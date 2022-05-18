import { Link } from "react-scroll";
import style from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <section className={style.navbar}>
        <Link
          // activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          ABOUT
        </Link>
        <Link
          to="works"
          spy={true}
          smooth={true}
        >
          PORTFOLIO
        </Link>
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
