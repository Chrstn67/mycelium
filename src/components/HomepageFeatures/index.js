import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Veille et Conseils",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        J'acore partager des tips pour les jeunes développeurs qui se prette au
        jeu de ce métier passionnant
      </>
    ),
  },
  {
    title: "Mes articles",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>J'écris des tutoriels et des articles sur des sujets relatifs au dev</>
    ),
  },
  {
    title: "Projets et découvertes",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        J'aime découvrir et partager des projets. Que ce soient les miens ou
        d'autres, chaque secret du web est une mine d'or !
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
