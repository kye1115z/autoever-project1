import { useEffect, useState } from "react";
import styles from "./AboutMe.module.css";
import { supabase } from "../../api/supabase";
import type { AdminProfile } from "../../types";

const AboutMe = () => {
  const [profile, setProfile] = useState<AdminProfile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("admin_profiles").select("*");

      if (error) {
        console.log("error: ", error);
      } else {
        setProfile(data?.[0] || null);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.aboutMe}>
      {profile && (
        <>
          <div>
            <img
              src={profile.profile_img || "/profile.jpg"}
              alt="Profile"
              className={styles.profileImage}
              referrerPolicy="no-referrer"
            />
            <div>
              <h2>{profile.name}</h2>
              <p>Full-stack Developer</p>
            </div>
          </div>
          <p>{profile.bio}</p>
        </>
      )}
    </div>
  );
};

export default AboutMe;
