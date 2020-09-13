import React from "react";
import Layout from "./Containers/Layout/Layout";
import FirstPageContent from "./Containers/FirstPageContent/FirstPageContent";
import {ThemeProvider, createMuiTheme} from "@material-ui/core";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NoMatch from "./Components/UI/NoMatch";
import MoviePage from "./Components/MoviePage";

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Layout>
					<Switch>
						<Route exact path="/">
							<FirstPageContent />
						</Route>
						<Route exact path="/movies/:id">
							<MoviePage />
						</Route>
						<Route>
							<NoMatch />
						</Route>
					</Switch>
				</Layout>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
