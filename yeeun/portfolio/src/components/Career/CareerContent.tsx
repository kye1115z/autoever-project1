import { careers } from "../../data/careers";
import type { CareerCategory } from "../../types";
import styles from "./CareerContent.module.css";

const CareerContent = ({ title }: { title: CareerCategory }) => {
  const categoryData = careers.find((career) => career.category === title);

  if (!categoryData) return null;
  return (
    <>
      <div>
        <div className={styles.lineTitle}>
          <span>{categoryData?.category}</span>
        </div>
        {categoryData.items.map((item) => (
          <div key={item.id}>
            <div>
              {title !== "활동" ? (
                <img src="/assets/icons/Star.svg" />
              ) : (
                <img src="/assets/Octagram.svg" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CareerContent;
