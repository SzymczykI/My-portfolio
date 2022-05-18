import { Link } from "react-scroll";
import style from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <section className={style.navbar}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
          ignoreCancelEvents={false}
        >
          About
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
