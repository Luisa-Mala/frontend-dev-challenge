import Image from "next/image"
import { useState } from "react"
import { Input } from "../Input/Input"
import styles from "./Header.module.scss"

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