import styles from "./ProjectsContent.module.css";
import type { Project } from "../../types";

export type TechDetail = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

type Props = {
  project: Project;
  techDetails: TechDetail[];
};

const ProjectsContent = ({ project, techDetails }: Props) => {
  const handleClick = () => {
    console.log("project id:", project.id);
  };

  return (
    <button type="button" className={styles.projectCard} onClick={handleClick}>
      <img
        // TODO: DB or 기본값
        // src={project.thumbnail_url ?? "/assets/default_project.svg"}
        src="/assets/images/default_project.svg"
        alt={project.title}
      />
      <div className={styles.projectInfo}>
        <h2>{project.title}</h2>

        <div className={styles.subInfo}>
          <span className={styles.date}>
            {project.start_date} - {project.end_date ?? "진행 중"}
          </span>
          <span className={project.is_team ? styles.team : styles.personal}>
            {project.is_team ? "팀 프로젝트" : "개인 프로젝트"}
          </span>
        </div>

        <p className={styles.summary}>{project.summary}</p>

        <div className={styles.techStacks}>
          {techDetails.map((tech) => (
            <img
              key={tech.id}
              src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
              alt={tech.name}
              title={tech.name}
              className={styles.techIcon}
            />
          ))}
        </div>
      </div>
    </button>
  );
};

export default ProjectsContent;
