import style from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={style.container}>
      <h1 className={style.title}>Izabela Szymczyk</h1>
      <h2 className={style.title2}>Full Stack Developer</h2>
    </header>
  );
};

export default Header;
