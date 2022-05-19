import style from "../../styles/Projects.module.css";
import { projects } from "../projectsArray";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={style.container}>
      <div className={style.title_box}>
        <h2 className={style.title}>Projects</h2>
      </div>
      <div className={style.projects_box}>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          name={project.name}
          description={project.description}
          technology={project.technology}
          gitHubLink={project.gitHubLink}
          media={project.media}
        />
      ))}
      </div>
    </section>
  );
};

export default Projects;
