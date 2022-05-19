import style from "../../styles/ProjectCard.module.css";
import Image from "next/image";
import github from '../assets/GitHub.png';

interface CardProps {
  name: string;
  description: string;
  technology: string;
  gitHubLink: string;
  media: string;
}

const ProjectCard = (project: CardProps) => {
  return (
    <div className={style.container}>
      <div className={style.media_box}>
      <Image
            src={project.media}
            alt="Picture of the project"
            width={450}
            height={320}
          />
      </div>
      <div className={style.text_box}>
        <h1 className={style.title}>{project.name}</h1>
        <p className={style.description}>{project.description}</p>
        <p className={style.description}>{project.technology}</p>
        <div className={style.links_box}>
          <a className={style.git} href={project.gitHubLink}>
          <Image src={github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
