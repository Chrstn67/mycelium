import React from "react";
import sherpas from "./sherpas.module.css";

// Import SVGs
import MountainSvg from "@site/static/img/undraw_docusaurus_mountain.svg";
import TreeSvg from "@site/static/img/undraw_docusaurus_tree.svg";
import ReactSvg from "@site/static/img/undraw_docusaurus_react.svg";

const teachingMethods = [
  {
    title: "Méthodologie vérifiée",
    Svg: MountainSvg,
    description:
      "Tu apprendras avec une méthodologie qui a fait ses preuves, dans une ambiance détendue et propice à l'apprentissage. L'objectif est de t'aider à progresser efficacement et en toute sérénité.",
  },
  {
    title: "Cours en ligne",
    Svg: TreeSvg,
    description:
      "Tu as la possibilité de suivre des cours en présentiel, mais aussi et surtout en ligne. Cette flexibilité te permet de choisir le format qui te convient le mieux.",
  },
  {
    title: "Le client, c'est l'élève !",
    Svg: ReactSvg,
    description:
      "Il est possible d'adapter les horaires et les formules d'apprentissage en fonction de tes besoins et de ton budget. Que tu préfères des sessions intensives ou des cours plus espacés, plusieurs options te sont proposées pour répondre à tes attentes et te permettre de progresser à ton rythme.",
  },
];

function Method({ Svg, title, description }) {
  return (
    <div className={sherpas.method}>
      <div className={sherpas.svgContainer}>
        <Svg className={sherpas.featureSvg} role="img" />
      </div>
      <div className={sherpas.textContainer}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SherpasPub() {
  return (
    <div className={sherpas.sherpasPub}>
      <h3 className={sherpas.header}>
        Cours Particuliers en collaboration avec Les Sherpas
      </h3>
      <p className={sherpas.description}>
        Je donne également des cours particuliers en :
      </p>
      <div className={sherpas.methodsWrapper}>
        {teachingMethods.map((method, index) => (
          <Method key={index} {...method} />
        ))}
      </div>
      <div className={sherpas.tableWrapper}>
        <table className={sherpas.subjectTable}>
          <thead>
            <tr>
              <th className={sherpas.tableHeader}>
                Matière <br />
                <span className={sherpas.infos}>Clique pour plus d'infos</span>
              </th>
              <th className={sherpas.tableHeader}>Classes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={sherpas.tableCell}>
                <a
                  href="https://sherpas.com/t/developpeur-web-donne-des-cours-de-mise-a-niveau-en-informatique-de-tous-niveaux-de-la-primaire-a-la-terminale-molsheim-et-alentours-ou-en-ligne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sherpas.subject}
                >
                  Informatique
                </a>
              </td>
              <td className={sherpas.tableCell}>
                Classes élémentaires à Adultes apprenants
              </td>
            </tr>
            <tr>
              <td className={sherpas.tableCell}>
                <a
                  href="https://sherpas.com/t/professeur-de-maths-niveau-primaire-et-college-cours-sur-molsheim-ou-en-ligne-ancien-aesh?subjectName=Maths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sherpas.subject}
                >
                  Maths
                </a>
              </td>
              <td className={sherpas.tableCell}>Du CP à la 3ème</td>
            </tr>
            <tr>
              <td className={sherpas.tableCell}>
                <a
                  href="https://sherpas.com/t/cours-de-francais-dorthographe-de-grammaire-et-conjugaison-sur-molsheim-et-alentours-ou-en-ligne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sherpas.subject}
                >
                  Français
                </a>
              </td>
              <td className={sherpas.tableCell}>Du CP à la 3ème</td>
            </tr>
            <tr>
              <td className={sherpas.tableCell}>
                <a
                  href="https://sherpas.com/t/jai-lhabitude-de-donner-des-conferences-devant-du-public-je-saurais-te-donner-les-meilleurs-conseils-pour-que-ton-oral-se-passe-bien-en-ligne-uniquement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sherpas.subject}
                >
                  Expression Orale
                </a>
              </td>
              <td className={sherpas.tableCell}>
                Classes élémentaires à Adultes apprenants
              </td>
            </tr>
            <tr>
              <td className={sherpas.tableCell}>
                <a
                  href="https://sherpas.com/t/professeur-despagnol-sur-molsheim-ou-en-ligne-apprentissage-de-la-lecture-et-du-vocabulaire-de-la-magnifique-langue-de-cervantes-niveau-b1-b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sherpas.subject}
                >
                  Espagnol
                </a>
              </td>
              <td className={sherpas.tableCell}>Du CP à la 3ème</td>
            </tr>
            <tr>
              <td className={sherpas.tableCell}>
                <a
                  href="https://sherpas.com/t/la-nature-est-si-belle-que-je-veux-la-rendre-encore-plus-belle-a-tes-yeux-cours-sur-molsheim-ou-en-ligne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sherpas.subject}
                >
                  Sciences de la Vie de la Terre
                </a>
              </td>
              <td className={sherpas.tableCell}>Du CP à la 3ème</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a
        href="https://sherpas.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={sherpas.link}
      >
        Modalités et Inscription sur{" "}
        <span
          className={sherpas.infos_sherpas}
          style={{
            display: "block",
            fontSize: "1.2em",
            color: "#95a3a5",
            marginLeft: "5px",
            fontWeight: "bold",
          }}
        >
          sherpas.com
        </span>
      </a>
    </div>
  );
}

export default SherpasPub;
