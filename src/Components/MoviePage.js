import React, {useState, useEffect} from "react";
import {
	Typography,
	Grid,
	Paper,
	makeStyles,
	GridList,
	GridListTile,
	IconButton,
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import Spinner from "./UI/Spinner/Spinner";
import ErrorModal from "./UI/ErrorModal";
import MovieIcon from "@material-ui/icons/Movie";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
	root: {
		// display: "flex",
		// width: "100%",
		// height: "500px",
		padding: "16px",
	},
}));

export default () => {
	const {id} = useParams();
	const [info, setInfo] = useState();
	const [error, setError] = useState();
	const classes = useStyles();

	useEffect(
		() => {
			fetch("http://apitest.tek-nic.com/movie/GetContent", {
				method: "POST",
				body: `{
                "request": {
                    "RequestID": ${id}
                }
            }`,
			})
				.then(res => {
					return res.json();
				})
				.then(res => {
					if (res.status === 1) {
						setInfo(res.result);
					} else {
						setError(res.message);
					}
				})
				.catch(err => {
					setError(err);
				});
		},
		[id]
	);

	// useEffect(() => {
	// 	if (info) {
	// 		// console.log(info.Properties);
	// 	}
	// });

	const handleErrorAlertClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setError(null);
	};

	const content = () =>
		<Paper dir="rtl" className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={1}>
					<MovieIcon style={{fontSize: 100}} color="secondary" />
				</Grid>
				<Grid item xs>
					<Typography variant="h3">
						{info.Title} ({info.Properties.find(x => x.PropertyId === 4).Value})
					</Typography>
					<Typography variant="body2" color="textSecondary">
						ژانر: {info.Properties.find(x => x.PropertyId === 7).Value} | کشور:{" "}
						{info.Properties.find(x => x.PropertyId === 12).Value}
					</Typography>
				</Grid>
				<Grid item xs={12} style={{margin: 0, padding: 0}}>
					<GridList cellHeight={480} className={classes.gridList} cols={3}>
						<GridListTile cols={1}>
							<img src={info.PortraitImage} alt={info.title} />
						</GridListTile>
						<GridListTile cols={2}>
							<img src={info.LandscapeImage} alt={info.title} />
						</GridListTile>
					</GridList>
				</Grid>
				<Grid item xs={8}>
					<Typography variant="subtitle1">
						{info.Summary}
					</Typography>
					<Typography variant="subtitle2">
						کارگردان: {info.Properties.find(x => x.PropertyId === 8).Value}
					</Typography>
					<Typography variant="subtitle2">
						بازیگران: {info.Properties.find(x => x.PropertyId === 10).Value}
					</Typography>
					<IconButton
						target="_blank"
						href={`https://www.imdb.com/title/${info.Properties.find(
							x => x.PropertyId === 2
						).Value}/`}>
						<Typography variant="body1" color="textSecondary">
							IMDB
						</Typography>
						<InfoIcon />
					</IconButton>
				</Grid>
			</Grid>
		</Paper>;

	return (
		<Grid container style={{marginTop: "10px"}} justify="center">
			<ErrorModal
				open={error}
				handleClose={handleErrorAlertClose}
				message={"Network Error : " + error}
				severity="error"
			/>
			{info ? content() : <Spinner />}
		</Grid>
	);
};
