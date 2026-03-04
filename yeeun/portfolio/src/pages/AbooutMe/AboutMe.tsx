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
          <div className={styles.profileContainer}>
            <img
              src={profile.profile_img || "/profile.jpg"}
              alt="Profile"
              className={styles.profileImage}
              referrerPolicy="no-referrer"
            />
            <div className={styles.profileInfo}>
              <p className={styles.name}>{profile.name}</p>
              <p className={styles.role}>Full-stack Developer</p>
            </div>
          </div>
          <p>{profile.bio}</p>
          {/* <p className={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            orci quam, malesuada nec faucibus scelerisque, laoreet nec eros.
            Cras interdum ut nisl ac fringilla. Suspendisse vel mattis est.
            Fusce eu enim vitae neque elementum pharetra. Aliquam ante ipsum,
            mollis in diam id, iaculis tempus dui. Proin pharetra mi tortor, et
            varius justo molestie id. Etiam malesuada nisi id condimentum
            bibendum.
          </p> */}
        </>
      )}
    </div>
  );
};

export default AboutMe;
