import Image from "next/image";
import { Input } from "../Input/Input";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={`${styles["footer"]}`}>
      <div className={`${styles["footer__subscribe"]}`}>
        <div className={`${styles["footer__subscribe--form"]}`}>
          <div className={`${styles["footer__subscribe--form-logo"]}`}>
            <Image
              src="/icons/ic-logo-degrade.svg"
              alt="logo"
              width="186px"
              height="186px"
            />
          </div>
          <div className={`${styles["footer__subscribe--form-input"]}`}>
            <p>Subscribete</p>
            <div>
              <Input
                addClass="bg-light"
                data={{
                  type: "email",
                  id: "email-subscribe",
                  name: "email-subscribe",
                  placeholder: "Correo",
                }}
              />
              <Input
                addClass="submit"
                data={{
                  type: "submit",
                  id: "submit-subscribe",
                  name: "submit-subscribe",
                  label: "Enviar",
                }}
              />
            </div>
          </div>
        </div>
        <div className={`${styles["footer__subscribe--menu"]}`}>
          <p>Menu</p>
          <nav>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a>Lorem ipsum</a></li>
              <li><a>Lorem ipsum</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`${styles["footer__copyright"]}`}>
        <div className={`${styles["footer__copyright--logo"]}`}>
          <Image
            src="/icons/ic-logo-mcontigo.png"
            alt="logo mcontigo"
            width="190px"
            height="32px"
          />
        </div>
        <div className={`${styles["footer__copyright--info"]}`}>
          <p>
            La Mente es Maravillosa is a property of Grupo MContigo<br></br>©
            2012 – 2020. All rights reserved.<br></br>Los contenidos de esta
            publicación se redactan solo con fines informativos. En ningún
            momento pueden servir para facilitar diagnósticos o sustituir la
            labor de un profesional. Le recomendamos que contacte con su
            especialista de confianza.
          </p>
        </div>
      </div>

      <div className={`${styles["footer__menu"]}`}>
        <nav>
          <ul>
            <li>
              <a>Política de Cookies</a>
            </li>
            <li>
              <a>Política de Privacidad</a>
            </li>
            <li>
              <a>Términos y condiciones de uso</a>
            </li>
            <li>
              <a>Cláusula Informativa de Consentimiento</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
