import React from "react";
import { ProjectItem } from "../project-item";
import { topProjects } from "./data";
import { Grid } from "./styles";

const TopProjects: React.FC = () => (
	<Grid>
		{topProjects.sort((item, bitem) => item.title < bitem.title ? -1 : 1).map((project) => (
			<ProjectItem key={project.link} project={project} />
		))}
	</Grid>
);

export { TopProjects };
