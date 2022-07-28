import styles from "./Accordion.module.scss";
import parse from "html-react-parser";
import {dataAccordion} from "./dataAccordion"

export const Accordion = () => {
  return (
    <section className={`${styles["accordion"]}`}>
      {dataAccordion.map((item, index) =>(
        <div className={`${styles["accordion__item"]}`} key={"accordion_"+index}>
          <div className={`${styles["accordion__item--container"]}`}>
            <details>
              <summary role="button">
                <h3 className={`${styles["accordion__item--container-title"]}`}>
                  {item.question}
                </h3>
                <svg viewBox="0 0 10 6">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                    fill="currentColor"
                  ></path>
                </svg>
              </summary>
              <div
                className={`${styles["accordion__item--container-description"]}`}
              >
                <p className="text">
                  {parse(item.answer)}
                </p>
              </div>
            </details>
          </div>
        </div>
      ))}
    </section>
  );
}