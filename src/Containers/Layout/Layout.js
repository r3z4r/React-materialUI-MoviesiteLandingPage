import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = props => {
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Grid container direction="column">
			<Grid xs={12} item>
				<Header handleDrawerToggle={handleDrawerToggle} />
			</Grid>
			<Grid item container>
				<Grid item xs={false} sm={2}>
					<Sidebar
						handleDrawerToggle={handleDrawerToggle}
						mobileOpen={mobileOpen}
					/>
				</Grid>
				<Grid item xs={12} sm={9}>
					{props.children}
				</Grid>
				{/* <Grid item xs={false} sm={1} /> */}
			</Grid>
		</Grid>
	);
};

export default Layout;
