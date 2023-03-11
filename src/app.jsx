import React from "react";
import { FontStyles, GlobalStyle } from "./assets";
import { Footer, Header, Main } from "./components";

export const App = () => {
	return (
		<>
			<FontStyles />
			<GlobalStyle />
			<Header />
			<Main />
			<Footer />
		</>
	);
};
