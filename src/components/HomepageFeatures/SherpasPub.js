import React from "react";
import styles from "./sherpas.module.css";

function SherpasPub() {
  return (
    <div className={styles.sherpasPub}>
      <h3>Cours Particuliers en collaboration avec Les Sherpas</h3>
      <p>Je donne également des cours particuliers en :</p>
      <div className={styles.tableWrapper}>
        <table className={styles.subjectTable}>
          <thead>
            <tr>
              <th>
                Matière <br />
                <span className={styles.infos}>Clique pour plus d'infos</span>
              </th>
              <th>Classes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://sherpas.com/t/developpeur-web-donne-des-cours-de-mise-a-niveau-en-informatique-de-tous-niveaux-de-la-primaire-a-la-terminale-molsheim-et-alentours-ou-en-ligne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.subject}
                >
                  Informatique
                </a>
              </td>
              <td>Classes élémentaires à Adultes apprenants</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://sherpas.com/t/professeur-de-maths-niveau-primaire-et-college-cours-sur-molsheim-ou-en-ligne-ancien-aesh?subjectName=Maths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.subject}
                >
                  Maths
                </a>
              </td>
              <td>Du CP à la 3ème</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://sherpas.com/t/cours-de-francais-dorthographe-de-grammaire-et-conjugaison-sur-molsheim-et-alentours-ou-en-ligne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.subject}
                >
                  Français
                </a>
              </td>
              <td>Du CP à la 3ème</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://sherpas.com/t/jai-lhabitude-de-donner-des-conferences-devant-du-public-je-saurais-te-donner-les-meilleurs-conseils-pour-que-ton-oral-se-passe-bien-en-ligne-uniquement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.subject}
                >
                  Expression Orale
                </a>
              </td>
              <td>Classes élémentaires à Adultes apprenants</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://sherpas.com/t/professeur-despagnol-sur-molsheim-ou-en-ligne-apprentissage-de-la-lecture-et-du-vocabulaire-de-la-magnifique-langue-de-cervantes-niveau-b1-b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.subject}
                >
                  Espagnol
                </a>
              </td>
              <td>Du CP à la 3ème</td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://sherpas.com/t/la-nature-est-si-belle-que-je-veux-la-rendre-encore-plus-belle-a-tes-yeux-cours-sur-molsheim-ou-en-ligne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.subject}
                >
                  Sciences de la Vie de la Terre
                </a>
              </td>
              <td>Du CP à la 3ème</td>
            </tr>
          </tbody>
        </table>
      </div>

      <a
        href="https://sherpas.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Modalités et Inscription sur{" "}
        <span
          className={styles.infos_sherpas}
          style={{
            display: "block",
            fontSize: "0.8em",
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
