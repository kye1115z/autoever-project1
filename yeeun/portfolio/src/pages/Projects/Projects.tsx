import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import type { Project } from "../../types";
import { supabase } from "../../api/supabase";
import { techMap } from "../../utils/getIcon";
import ProjectsContent, {
  type TechDetail,
} from "../../components/Projects/ProjectsContent";

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
        .limit(3); // 최신순으로 프로젝트 3개 불러오기

      if (error) {
        console.error(error);
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
      <p className="section-title">프로젝트</p>

      <div className={styles.projectList}>
        {projects.map((project) => {
          // project에서 받아온 데이터 중 tech_stacks를 문자열 배열로 변환
          const techNames =
            project.tech_stacks?.split(",").map((t) => t.trim()) || [];

          // tecjNames와 일치하는 아이콘 정보를 techMap에서 찾기
          const techDetails = techNames
            .map((name) => techMap.get(name.toLowerCase()))
            .filter((tech): tech is TechDetail => tech !== undefined); // undefined 제거

          return (
            <ProjectsContent
              key={project.id}
              project={project}
              techDetails={techDetails}
            />
          );
        })}
      </div>
      {/* TODO: 버튼 클릭 시 전체 페이지로 넘어게끔 */}
      <button className={styles.viewAllProjects}>→ View All Projects</button>
    </div>
  );
};

export default Projects;
