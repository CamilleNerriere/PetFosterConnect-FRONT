import "./Home.scss";
import { Helmet } from "react-helmet-async";
import Header from "../../Components/Header/Header.tsx";
import Footer from "../../Components/Footer/Footer.tsx";
import Card from "../../Components/Card/Card.tsx";
import AppLink from "../../Components/Links/AppLink.tsx";
import Loading from "../../Components/Loading/Loading.tsx";
import { Error } from "../../Components/Error/Error.tsx";
import { IAnimal } from "../../Interfaces/IAnimal.ts";
import { useFetchAnimals } from "../../Hook/useFetchAnimals.ts";

const Home = () => {
    const { animals, isLoading, error, baseURL } = useFetchAnimals();

    const getRandomizeAnimals = (animals: IAnimal[], count: number): IAnimal[] => {
        // les animaux disponibles seulement
        const availableAnimals = animals.filter((animal) => animal.availability === true);
        // Trie le tableau dans un ordre aléatoire
        const shuffledAnimals = availableAnimals.sort(() => 0.5 - Math.random());
        //Retourne un tableau avec "count" element (ici 3)
        return shuffledAnimals.slice(0, count);
    };

    const homeAnimals = getRandomizeAnimals(animals, 3);

    return (
        <>
            <Helmet>
                <title>Page d'accueil | PetFoster Connect</title>
                <meta
                    name="description"
                    content="PetFosterConnect permet de mettre en relation des familles d’accueil pour les animaux et des associations de protection animale en accueillant des animaux en attendant leur adoption définitive afin de leur offrir une meilleure vie."
                />
            </Helmet>

            <Header />
            <main>
                <section className="hero">
                    <p className="hero__text">
                        Familles d’accueil et associations, main dans la patte pour leur offrir une
                        seconde chance.
                    </p>
                </section>
                <div className="container-md">
                    <section className="intro">
                        <h1 className="main__title">PetFoster Connect</h1>

                        <p className="intro__text">
                            La plateforme qui met en liaison familles d’accueil et associations afin
                            de proposer aux animaux un foyer temporaire dans l’attente de leur
                            adoption. Que vous soyez une famille d’accueil ou une association,
                            inscrivez-vous en quelques clics.
                        </p>
                    </section>

                    <section className="animals__section__home">
                        <h2 className="section__title">Découvrez nos animaux à accueillir</h2>
                        <div className="cards">
                            {isLoading ? (
                                <Loading />
                            ) : error ? (
                                <Error error={error} />
                            ) : (
                                <ul className="cards__list">
                                    {homeAnimals.map((animal) => (
                                        <li key={animal.id}>
                                            <Card
                                                path={`/animaux/${animal.slug}`}
                                                src={`${baseURL}${animal.url_image!}`}
                                                alt={animal.name}
                                                name={animal.name}
                                                associationLocation={`${animal.association.department.name} (${animal.association.department.code})`}
                                                isHomePage={true}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <AppLink
                            to={"/animaux"}
                            className={"btn"}
                            title={"Voir tous les animaux"}
                            text={"Voir tous les animaux"}
                        />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
