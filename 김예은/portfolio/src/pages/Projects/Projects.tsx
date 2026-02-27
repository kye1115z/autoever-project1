import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import type { Project } from "../../types";
import { supabase } from "../../api/supabase";
import { techMap } from "../../utils/getIcon";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("start_date", { ascending: false })
        .limit(3); // 최신 프로젝트 3개만 띄우기!!

      if (error) {
        console.log("error", error);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className={styles.loading}>불러오는 중...</div>;
  }

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>

      <div className={styles.viewAllProjects}>
        <p>모든 프로젝트 보러 가기</p>
        <button>View All Projects</button>
      </div>

      <div className={styles.projectList}>
        {projects.map((project) => {
          // project에서 받아온 데이터 중 `tech_stacks`를 문자열 배열로 변환
          const techNames =
            project.tech_stacks?.split(",").map((t) => t.trim()) || [];

          // `tecjNames`와 일치하는 아이콘 정보를 techMap에서 찾기
          const techDetails = techNames.map((name) =>
            techMap.get(name.toLowerCase()),
          );

          return (
            <div key={project.id} className={styles.projectCard}>
              <img
                src={project.thumbnail_url ?? "/default-project.png"}
                alt={project.title}
              />

              <div>
                <h2>{project.title}</h2>

                <div className={styles.techStacks}>
                  {techDetails.map(
                    (tech) =>
                      tech && (
                        <img
                          key={tech.id}
                          src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color}`}
                          alt={tech.name}
                          title={tech.name}
                          className={styles.techIcon}
                        />
                      ),
                  )}
                </div>

                <p>
                  {project.start_date} - {project.end_date ?? "진행 중"}
                </p>

                <button>View Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
