import { ReactNode } from "react";
import styles from "./ButtonPage.module.css";

const ButtonPage: React.FC<{children: ReactNode, isActive?: boolean}> = ({children, isActive}) => {

  const onClick = (event: any) => {
    const btn = event.target;
    const isActive = btn.classList.contains(styles.pagination__page_active);
    if (isActive) {
      btn.classList.remove(styles.pagination__page_active);
    } else {
      btn.classList.add(styles.pagination__page_active);
    }
  };

  return (
    <li className={styles.pagination__item}>
      <a
        className={
          isActive
            ? `${styles.pagination__page} ${styles.pagination__page_active}`
            : `${styles.pagination__page}`
        }
        href="#"
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
};

export default ButtonPage;
