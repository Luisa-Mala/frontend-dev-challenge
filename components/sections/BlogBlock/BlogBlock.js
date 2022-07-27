import Image from "next/image";
import styles from "./BlogBlock.module.scss";

export const BlogBlock = () => {
  return (
    <section className={`${styles["blogBlock"]} blogBlock`}>
      <div className={`${styles["blogBlock__title"]} `}>
        <h3 className="heading">Lorem ipsum dolor sit amet</h3>
      </div>
      <div className={`${styles["blogBlock__author"]} `}>
        <Image
          src="/icons/ic-avatar.png"
          alt="author"
          width="58px"
          height="58px"
        />
        <div>
          <p className="text">
            Leonardo Biolatto.<br></br>
            Última actualización: 21 julio, 2022
          </p>
        </div>
      </div>

      <div className={`${styles["blogBlock__blockquote"]} `}>
        <p>
          ¿Cómo podemos diseñar una educación que tenga como resultado niños más
          responsables? En este artículo compartimos algunas estrategias que
          aumentan la probabilidad de éxito para este objetivo.
        </p>
      </div>
      <div className={`${styles["blogBlock__image"]} `}>
        <div className="imageNext">
          <Image
            src="/images/blog.png"
            alt="image description"
            layout="fill"
            className="image"
          />
        </div>
      </div>
      <div className={`${styles["blogBlock__description"]} `}>
        <h4 className="heading">1. Asignarles tareas sencillas</h4>
        <p className="text">
          La primera idea o estrategia para ayudar a los niños a ser
          responsables es asignarles tareas sencillas. Para que la situación sea
          más fácil, puede ser conveniente que un adulto también las haga. Por
          ejemplo, ayudar a lavar los platos o hacer la colada con alguno de los
          progenitores es una buena manera de empezar. Será el primer paso para
          que adquieran autonomía: ser sus modelos.{" "}
          <span>
            Pueden recoger los platos mientras uno de los progenitores los
            empieza a lavar.
          </span>{" "}
          Pueden hacer lo mismo con su propia colada, que separen su ropa blanca
          de la oscura y la lleven hacia los cubos correspondientes. De esta
          forma, progresivamente, los niños pueden comenzar a adquirir
          responsabilidades, lo que se trasladará también al uso de la
          tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos
          para clase, tiempo para los amigos, juegos, etc.).
        </p>
      </div>
      <div className={`${styles["blogBlock__readMore"]} `}>
        <a href="/blog-internal" className="btn-link">
          Seguir leyendo
        </a>
      </div>
    </section>
  );
}