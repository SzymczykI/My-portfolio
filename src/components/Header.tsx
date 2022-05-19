import Image from "next/image";
import style from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.box}>
        <div className={style.title}>
          <span className={style.block}></span>
          <h1 className={style.main_title}>
            Izabela Szymczyk
          </h1>
        </div>
        <div className={style.role}>
        <div className={style.block}></div>
        <p className={style.main_role}>Full Stack JS Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
