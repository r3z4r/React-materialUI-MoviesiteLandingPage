import React from "react";
import {Button, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SearchField from "../../Components/UI/SearchField/SearchField";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	space: {
		flexGrow: 1,
	},
	button: {
		color: "white",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

export default function FirstToolbar(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={props.handleDrawerToggle}
					className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<Button className={classes.button}>Log in</Button>
				<Button className={classes.button}>Entries</Button>
				<span className={classes.space} />
				<SearchField />
			</Toolbar>
		</div>
	);
}
