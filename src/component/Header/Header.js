import React, { useState } from "react";
import cn from "classnames";
import Button from "../Button/Button.js";
import { useCompetitions } from "../lib/useCompetitions.js";
import MenuIcon from "../../icons/menu.svg";
import CancelIcon from "../../icons/cancel.svg";
import BackIcon from "../../icons/arrow-left.svg";
import styles from "./Header.module.scss";
import Spinner from "../Spinner/Spinner.js";

const Header = () => {
  const { state } = useCompetitions();
  const [menu, setMenu] = useState("isClose");

  const openMenu = () => {
    setMenu("isOpen");
  };
  const closeMenu = () => {
    setMenu("isClose");
  };
  const openSubMenu = () => {
    setMenu("subMenu");
  };

  const menuClassName = cn(styles.navMenu, {
    [styles.active]: menu === "isOpen" || menu === "subMenu",
  });

  const subMenuClassName = cn(styles.dropDownList, {
    [styles.subMenuActive]: menu === "subMenu",
  });

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Button
          className={cn(styles.mobileNavBtn, styles.mobile)}
          onClick={openMenu}
          variant="square"
        >
          <MenuIcon />
        </Button>
        <a className={styles.logo} href="/">
          EuroMATCH
        </a>
      </div>
      <div className={cn(styles.wrap)}>
        <nav>
          <div className={menuClassName}>
            <Button
              className={cn(
                styles.mobileNavBtn,
                styles.mobile,
                styles.closeBtn
              )}
              onClick={closeMenu}
              variant="square"
            >
              <CancelIcon />
            </Button>

            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <Button className={styles.listItemLink} onClick={openSubMenu}>
                  Competitions
                </Button>

                <ul className={subMenuClassName}>
                  <li className={styles.dropDownSection}>
                    <Button
                      className={cn(styles.closeSubMenu, styles.mobile)}
                      variant="transparent"
                      onClick={openMenu}
                    >
                      <BackIcon />
                      Competitions
                    </Button>
                    <div className={styles.inner}></div>

                    <ul className={styles.sublist}>
                      <li className={cn(styles.sublistItem, styles.mobile)}>
                        <a className={styles.sublistItemLink} href="/">
                          All competitions
                        </a>
                      </li>
                      {state.isloading ? (
                        <Spinner size={3} center />
                      ) : (
                        state.data.international.map((i) => (
                          <li key={i.id} className={cn(styles.sublistItem)}>
                            <a
                              href={`test-app/competitions/${i.id}`}
                              className={styles.sublistItemLink}
                            >
                              {i.name}
                            </a>
                          </li>
                        ))
                      )}
                    </ul>

                    <a
                      href="/"
                      className={cn(styles.seeAllLink, styles.desktop)}
                    >
                      <div className={styles.allProductSection}>
                        <span className={styles.allProductText}>
                          All competitions
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li className={styles.navListItem}>
                <a href="test-app/matches" className={styles.listItemLink}>
                  Matches
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
