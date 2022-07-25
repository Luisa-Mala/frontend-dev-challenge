import Image from "next/image"
import styles from "./TextBlock.module.scss"
export const TextBlock = () => {
  return (
    <section className={`${styles["textBlock"]} `}>
      <div className={`${styles["textBlock__container"]} container `}>
        <div className={`${styles["textBlock__container--title"]} `}>
          <Image
            src="/images/info_1.png"
            alt="niña sonriendo"
            width="507px"
            height="622px"
          />
          <h1>Su viaje de salud<br></br>emocional empieza aqui</h1>
        </div>
        <div className={`${styles["textBlock__container--description"]} `}>
          <div
            className={`${styles["textBlock__container--description_info"]} `}
          >
            <h2>Conoce nuestros<br></br>profesionales con licencia</h2>
            <p>
              Todos se someten a un proceso seguro de verificación y
              acreditación, además de adherirse a estrictos códigos de ética y
              confidencialidad.
            </p>
          </div>
          <Image
            src="/images/info_2.png"
            alt="niño mirando a un bebé"
            width="542px"
            height="542px"
          />
        </div>
      </div>
    </section>
  );
}