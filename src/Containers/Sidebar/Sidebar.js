import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 1,
		},
	},
	drawerPaper: {
		width: drawerWidth,
		marginTop: "10px",
		top: "auto",
		left: "1vw",
	},
}));

export default function Sidebar(props) {
	const {window} = props;

	const classes = useStyles();
	const theme = useTheme();

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{["Actors", "Actresses", "Authors", "Directors"].map(text =>
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				)}
			</List>
			<Divider />
			<List>
				<ListItem button key={"id"}>
					<ListItemText primary="Rest" secondary={"Rest of options"} />
				</ListItem>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />

			<nav className={classes.drawer}>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden mdUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={props.mobileOpen}
						onClose={props.handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden smDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<div />
		</div>
	);
}
