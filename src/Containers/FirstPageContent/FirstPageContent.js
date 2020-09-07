import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import MediaCard from "../../Components/MediaCard/MediaCard";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Pagination from "@material-ui/lab/Pagination";

export default function FirstPageContent() {
	const [banner, setBanner] = useState();
	const [topMovies, setTopMovies] = useState();
	const [content, setContent] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(2);

	const pageSize = 12;

	useEffect(() => {
		setLoading(true);
		fetch("http://apitest.tek-nic.com/movie/FirstPage")
			.then(res => res.json())
			.then(res => {
				if (res.status === 1) {
					setBanner(res.result[0].list[0]);
					setTopMovies(res.result[1].list);
					setContent(res.result[2].list);
					setLoading(false);
				} else {
					setError(res.message);
					setLoading(false);
				}
			})
			.catch(err => {
				console.error(err);
				setError(err);
				setLoading(false);
			});
	}, []);

	const handlePageChange = (event, value) => {
		setPage(value);
		setLoading(true);
		fetch("http://apitest.tek-nic.com/movie/GetContentList", {
			method: "POST",
			body: `{
        "request": {
            "pageSize": ${pageSize},
            "pageIndex": ${value}
        }
      }`,
		})
			.then(res => {
				setLoading(false);
				return res.json();
			})
			.then(res => {
				if (res.status === 1) {
					setContent(res.result.list);
					setTotalPages(res.result.totalPages);
				} else {
					setError(res.message);
				}
			});
	};

	const contentList = () => {
		if (content && !loading) {
			return content.map(item =>
				<MediaCard
					size={3}
					title={item.Title}
					image={item.PortraitImage}
					summary={item.Summary}
					height={300}
				/>
			);
		} else return <Spinner />;
	};

	return (
		<Grid
			container
			style={{marginTop: "10px"}}
			xs={12}
			spacing={3}
			justify="center">
			{banner &&
				<MediaCard
					size={12}
					title={banner.Title}
					image={banner.ThumbImage}
					summary={banner.Summary}
					height={480}
				/>}
			{topMovies &&
				topMovies.map(item =>
					<MediaCard
						size={6}
						title={item.Title}
						image={item.ThumbImage}
						summary={item.Summary}
						height={240}
					/>
				)}
			{contentList()}
			<Grid container xs={12} justify="center">
				<Pagination
					count={content ? totalPages : 2}
					page={page}
					variant="outlined"
					shape="rounded"
					style={{padding: "16px"}}
					onChange={handlePageChange}
				/>
			</Grid>
		</Grid>
	);
}
