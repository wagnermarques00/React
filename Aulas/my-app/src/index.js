import React from "react"; // vai direto na node modules
import ReactDOM from "react-dom/client"; // vai direto na node modules
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TemaProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<TemaProvider>
			<App />
		</TemaProvider>
	</BrowserRouter>
);
