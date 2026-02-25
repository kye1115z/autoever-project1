import styles from "./Posts.module.css";
import { useEffect, useState } from "react";
import type { Post } from "../../types";
import { supabase } from "../../api/supabase";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("type", "TIL"); // TIL 타입의 게시물만 가져오도록

      if (error) {
        console.log("error: ", error);
      } else {
        setPosts(data ?? []);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.posts}>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h1>Studay Note</h1>
            <div className={styles.postContent}>
              <p>{post.title}</p>
              <p>{post.summary}</p>
              <button>→ Read More</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
