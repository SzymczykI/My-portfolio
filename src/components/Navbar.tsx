import { Link } from "react-scroll";
import style from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <section className={style.link}>
        <Link
          // activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          ABOUT
        </Link>
        </section>
        <section className={style.link}>
        <Link
          to="works"
          spy={true}
          smooth={true}
        >
          PROJECTS
        </Link>
        </section>
        <section className={style.link}>
        <Link
          to="contact"
          spy={true}
          smooth={true}
        >
          CONTACT
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
