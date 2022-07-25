import Image from "next/image"
import { useState } from "react"
import { Input } from "../Input/Input"
import styles from "./Header.module.scss"
import {data} from "./dataHeader"

export const Header = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <header className={styles.header}>
      <button
        id="button__menu"
        className={`${styles["header__hamburger"]} `}
        type="button"
        aria-label="Open menu"
        onClick={() => setIsActive(!isActive)}
      >
        <span className={`${styles["header__hamburger--box"]}`}>
          <span
            className={`
                ${styles["header__hamburger--box_inner"]} 
                ${isActive && "active"}`}
          />
        </span>
      </button>
      <div className={`${styles["header__nav"]} ${isActive ? "active" : "disabled"}`}>
        <nav>
          {data.menu.map((item, index) =>(
            <div className={`${styles["header__nav--item"]}`} key={"nav"+index}>
              <p className="category">{item.category}</p>
              <ul>
                {item.nav.map((linkItem, idx) => (
                  <li key={"linkItem"+idx}><a href={linkItem.url}>{linkItem.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className={`${styles["header__logo"]}`}>
        <div className="desktop">
          <Image
            src="/images/logo.svg"
            alt="logo mejor con salud"
            width="216px"
            height="38px"
          />
        </div>
        <div className="mobile">
          <Image
            src="/icons/ic-logo.svg"
            alt="logo mejor con salud"
            width="60px"
            height="40px"
          />
        </div>
      </div>
      <div className={`${styles["header__search"]}`}>
        <Input
          addClass="icon ic-search"
          data={{
            type: "text",
            id: "search-header",
            name: "search-header",
          }}
        />
      </div>
    </header>
  );
}