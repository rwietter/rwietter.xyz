import Header from "components/Header";
import { StickyBar } from "components/StickyBar";
import { FC, ReactNode } from "react";
import { LayoutCSS } from "./styles";

interface LayoutProps {
	children: ReactNode;
	layout?: "small" | "medium" | "large" | "full";
}

const Layout: FC<LayoutProps> = ({ children, layout = "small" }) => (
	<>
		<Header />
		<LayoutCSS className="fade-in-layout" layout={layout}>
			{children}
		</LayoutCSS>
		<StickyBar />
	</>
);

export { Layout };
