import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
	root: {
		// maxWidth: 345
	},
	media: {
		height: props => props.height,
	},
});

export default function MediaCard(props) {
	const classes = useStyles(props);
	return (
		<Grid item sm={props.size}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={props.image}
						title={props.title}
					/>
					<CardContent>
						<Typography dir="rtl" gutterBottom variant="h5" component="h2">
							{props.title}
						</Typography>
						<Typography
							dir="rtl"
							variant="body2"
							color="textSecondary"
							component="p">
							{props.summary}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
