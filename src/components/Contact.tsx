import style from "../../styles/Contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={style.container}>
      <div className={style.title_box}>
        <h2 className={style.title}>Contact</h2>
      </div>
      <div className={style.links_box}>
        <a className={style.logo} href="https://github.com/SzymczykI">
          <Image width={40} height={40} src="/GitHub.png" alt="github" />
        </a>
        <a className={style.logo} href="https://www.linkedin.com/in/izabela-szymczyk-603514114/">
          <Image  width={40} height={40} src="/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
