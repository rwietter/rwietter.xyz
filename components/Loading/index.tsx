import { useState } from "react";
import LoaderRouterIndicator from "react-topbar-progress-indicator";
import { Router } from "next/router";

const LoadingIndicator = () => {
	const [progress, setProgress] = useState(false);

	LoaderRouterIndicator.config({
		barColors: {
			0: "#617BFF",
			1.0: "#8338ec",
		},
		barThickness: 4,
		shadowBlur: 0,
	});

	Router.events.on("routeChangeStart", () => {
		setProgress(true);
	});

	Router.events.on("routeChangeComplete", () => {
		setProgress(false);
	});

	return <div>{progress && <LoaderRouterIndicator />}</div>;
};

export { LoadingIndicator };
