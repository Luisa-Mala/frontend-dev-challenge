import Image from "next/image";
import styles from "./CardBlog.module.scss";

export const CardBlog = ({ data }) => {
  return (
    <div className={`${styles["cardBlog"]}`}>
      <div className={`${styles["cardBlog__card"]}`}>
        <div className={`${styles["cardBlog__card--image"]}`}>
          <div className="imageNext">
            <Image
              src={data.image.url}
              alt={data.image.alt}
              className="image"
              layout="fill"
            />
          </div>
        </div>
        <div className={`${styles["cardBlog__card--description"]}`}>
          <p className={`${styles["cardBlog__card--description-category"]}`}>
            {data.category}
          </p>
          <h4 className={`${styles["cardBlog__card--description-title"]}`}>
            {data.title}
          </h4>
          <p className={`${styles["cardBlog__card--description-info"]}`}>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
