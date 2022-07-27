import { CardBlog, Input } from "@/components/elements"
import Image from "next/image";
import styles from "./Aside.module.scss"

export const Aside = ({data}) => {
  return (
    <aside className={`${styles["aside"]}`}>
      <div className={`${styles["aside__search"]}`}>
        <Input
          addClass="ic-search"
          data={{
            type: "text",
            id: "search-blog",
            name: "search-blog",
            placeholder: "Buscar",
          }}
        />
      </div>
      <div className={`${styles["aside__post"]}`}>
        <CardBlog
          data={{
            image: {
              url: "/images/cardBlog.png",
              alt: "description",
            },
            category: "Nutrición",
            title: "Colapso mental: cuando siento el peso del mundo sobre mí",
            description:
              "A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…",
          }}
        />
      </div>
      {data && 
      <div className={`${styles["aside__promo"]}`}>
          <Image
            src={data.promo.image.url}
            alt={data.promo.image.alt}
            className="image"
            width="300px"
            height="600px"
          />
      </div>
      
      }
    </aside>
  );
}