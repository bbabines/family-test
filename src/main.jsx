import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Experience from "./Experience";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<div className="app-container">
			<Experience />
			<App />
		</div>
	</StrictMode>
);
