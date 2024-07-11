import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

const Legal = () => {
  return (
    <Layout
      title={`Mentions légales`}
      description="Mentions légales du site Mycelium"
    >
      <main className="container py-16 flex flex-col gap-8">
        <Heading as="h1" className="text-4xl font-bold uppercase">
          Mentions légales
        </Heading>

        <section className="flex flex-col gap-2">
          <Heading as="h2" className="text-2xl font-bold mb-2">
            Éditeur du service
          </Heading>

          <div>
            <p>
              <span className="font-bold">Nom de l'éditeur</span> :{" "}
              <strong className="font-normal">Christian HUMBERT</strong>
            </p>

            <p>
              <span className="font-bold">Forme juridique</span> :{" "}
              <strong className="font-normal">Développeur Web</strong>
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold">Adresse email</span> :{" "}
              <strong className="font-normal">
                chrstn.hmbrt67@outlook.com
              </strong>
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <Heading as="h2" className="text-2xl font-bold mb-2">
            Directeur de la publication
          </Heading>

          <div>
            <p>
              <span className="font-bold">
                Nom du directeur de la publication
              </span>{" "}
              : <strong className="font-normal">Christian HUMBERT</strong>
            </p>

            <p>
              <span className="font-bold">Adresse email</span> :{" "}
              <strong className="font-normal">
                chrstn.hmbrt67@outlook.com
              </strong>
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <Heading as="h2" className="text-2xl font-bold mb-2">
            Hébergement
          </Heading>

          <div>
            <p>
              <span className="font-bold">Nom de l'hébergeur</span> :{" "}
              <strong className="font-normal">GitHub Page</strong>
            </p>

            <p>
              <span className="font-bold">Adresse web de l'hébergeur</span> :{" "}
              <strong className="font-normal">www.github.com</strong>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Legal;
