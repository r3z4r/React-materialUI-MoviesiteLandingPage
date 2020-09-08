import React from "react";
import Layout from "./Containers/Layout/Layout";
import FirstPageContent from "./Containers/FirstPageContent/FirstPageContent";
import {ThemeProvider, createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<FirstPageContent />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
