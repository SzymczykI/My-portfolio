import Image from "next/image";
import style from "../../styles/About.module.css";

const About = () => {
  return (
    <section className={style.container}>
      <div className={style.about_box}>
        <div>
          <Image
            src="/izabela2.jpg"
            alt="Picture of the author"
            width={450}
            height={550}
          />
        </div>
        <div className={style.text_box}>
          <h2 className={style.title}>About me</h2>
          <p className={style.description}>
            {" "}
            Hi, I'm Izabela! <br></br>
            Open-minded and creative Full Stack JavaScript Developer from Poland
            living in Oslo, Norway. I am a Finance and Accountancy graduate,
            experienced in  e-commerce and sales in the insurance, clothing,
            cosmetics industries and also in creating and running my own
            business. Finally, I'm making my biggest dream come true by focusing
            entirely on my passion - programming{" "}
          </p>
          <h3 className={style.subtitle}>
            School of applied technology - SALT
          </h3>
          <p className={style.description}>
            From over 1000 applicants, I was one of ~30 students selected to
            partake in a highly paced and very intensive Full Stack JavaScript
            Developer program which I successfully finished. The training
            emphasises applied learning through Mob Programming, Agile work
            methods and consists of 500 coding hours with weekly demos and
            coding tests that are necessary to pass in order to graduate.
          </p>
          <h3 className={style.subtitle}>Tech Skills</h3>
          <p className={style.description}>
            JavaScript, TypeScript, React, Node.js, Next.js, Express, HTML5,
            CSS3, Databases incl. MongoDB and PostgreSQL, UX/UI and general
            development tools such as Git, REST, Docker, Kubernetes, Netlify,
            Redux, GraphQL, AWS, TDD and CI/CD.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
