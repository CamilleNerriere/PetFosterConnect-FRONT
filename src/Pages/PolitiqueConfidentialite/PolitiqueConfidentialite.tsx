import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import "./PolitiqueConfidentalite.scss";

const PolitiqueConfidentialite = () => {
    return (
        <>
            <Helmet>
                <title>Politique de Confidentialité | PetFoster Connect</title>
                <meta
                    name="description"
                    content="Consultez la politique de confidentialité de PetFoster Connect pour en savoir plus sur la collecte, l'utilisation et la protection de vos données personnelles."
                />
            </Helmet>
            <Header />
            <main className="main__politique__confidentialite">
                <div>
                    <h1 className="main__title">Politique de Confidentialité</h1>

                    <p className="main__resume">https://www.petfoster.com</p>
                    <p className="main__resume">PetFoster Connect</p>
                    <p className="main__resume">Type de site : Un site d'échange</p>

                    <span className="main__informations">
                        Le but de cette politique de confidentialité
                    </span>
                    <p>
                        Le but de cette politique de confidentialité est d'informer les utilisateurs
                        de notre site des données personnelles que nous recueillerons ainsi que les
                        informations suivantes, le cas échéant :
                    </p>

                    <ol>
                        <li>a. Les données personnelles que nous recueillerons</li>
                        <li>b. L’utilisation des données recueillies</li>
                        <li>c. Qui a accès aux données recueillies</li>
                        <li>d. Les droits des utilisateurs du site</li>
                        <li>e. La politique de cookies du site</li>
                    </ol>

                    <p>
                        Cette politique de confidentialité fonctionne parallèlement aux conditions
                        générales d’utilisation de notre site.
                    </p>

                    <span className="main__informations">Lois applicables</span>
                    <p>
                        Conformément au Règlement général sur la protection des données (RGPD),
                        cette politique de confidentialité est conforme aux règlements suivants.
                    </p>

                    <p>Les données à caractère personnel doivent être :</p>
                    <ol>
                        <li>
                            a. traitées de manière licite, loyale et transparente au regard de la
                            personne concernée (licéité, loyauté, transparence) ;
                        </li>
                        <li>
                            b. collectées pour des finalités déterminées, explicites et légitimes,
                            et ne pas être traitées ultérieurement d'une manière incompatible avec
                            ces finalités; le traitement ultérieur à des fins archivistiques dans
                            l'intérêt public, à des fins de recherche scientifique ou historique ou
                            à des fins statistiques n'est pas considéré, conformément à l'article
                            89, paragraphe 1, comme incompatible avec les finalités initiales
                            (limitation des finalités) ;
                        </li>
                        <li>
                            c. adéquates, pertinentes et limitées à ce qui est nécessaire au regard
                            des finalités pour lesquelles elles sont traitées (minimisation des
                            données) ;
                        </li>
                        <li>
                            d. exactes et, si nécessaire, tenues à jour; toutes les mesures
                            raisonnables doivent être prises pour que les données à caractère
                            personnel qui sont inexactes, eu égard aux finalités pour lesquelles
                            elles sont traitées, soient effacées ou rectifiées sans tarder
                            (exactitude) ;
                        </li>
                        <li>
                            e. conservées sous une forme permettant l'identification des personnes
                            concernées pendant une durée n'excédant pas celle nécessaire au regard
                            des finalités pour lesquelles elles sont traitées; les données à
                            caractère personnel peuvent être conservées pour des durées plus longues
                            dans la mesure où elles seront traitées exclusivement à des fins
                            archivistiques dans l'intérêt public, à des fins de recherche
                            scientifique ou historique ou à des fins statistiques conformément à
                            l'article 89, paragraphe 1, pour autant que soient mises en œuvre les
                            mesures techniques et organisationnelles appropriées requises par le
                            règlement afin de garantir les droits et libertés de la personne
                            concernée (limitation de la conservation) ;
                        </li>
                        <li>
                            f. traitées de façon à garantir une sécurité appropriée des données à
                            caractère personnel, y compris la protection contre le traitement non
                            autorisé ou illicite et contre la perte, la destruction ou les dégâts
                            d'origine accidentelle, à l'aide de mesures techniques ou
                            organisationnelles appropriées (intégrité et confidentialité).
                        </li>
                    </ol>

                    <p>
                        Le traitement n'est licite que si, et dans la mesure où, au moins une des
                        conditions suivantes est remplie :
                    </p>
                    <ol>
                        <li>
                            a. la personne concernée a consenti au traitement de ses données à
                            caractère personnel pour une ou plusieurs finalités spécifiques ;
                        </li>
                        <li>
                            b. le traitement est nécessaire à l'exécution d'un contrat auquel la
                            personne concernée est partie ou à l'exécution de mesures
                            précontractuelles prises à la demande de celle-ci;
                        </li>
                        <li>
                            c. le traitement est nécessaire au respect d'une obligation légale à
                            laquelle le responsable du traitement est soumis ;
                        </li>
                        <li>
                            d. le traitement est nécessaire à la sauvegarde des intérêts vitaux de
                            la personne concernée ou d'une autre personne physique ;
                        </li>
                        <li>
                            e. le traitement est nécessaire à l'exécution d'une mission d'intérêt
                            public ou relevant de l'exercice de l'autorité publique dont est investi
                            le responsable du traitement ;
                        </li>
                        <li>
                            f. le traitement est nécessaire aux fins des intérêts légitimes
                            poursuivis par le responsable du traitement ou par un tiers, à moins que
                            ne prévalent les intérêts ou les libertés et droits fondamentaux de la
                            personne concernée qui exigent une protection des données à caractère
                            personnel, notamment lorsque la personne concernée est un enfant.
                        </li>
                    </ol>

                    <p>
                        Pour les résidents de l’État de Californie, cette politique de
                        confidentialité vise à se conformer à la California Consumer Privacy Act
                        (CCPA). S’il y a des incohérences entre ce document et la CCPA, la
                        législation de l’État s’appliquera. Si nous constatons des incohérences,
                        nous modifierons notre politique pour nous conformer à la loi pertinente.
                    </p>

                    <span className="main__informations">Consentement</span>
                    <p>
                        Les utilisateurs conviennent qu’en utilisant notre site, ils consentent à :
                    </p>

                    <p>
                        <ol>
                            <li>
                                a. les conditions énoncées dans la présente politique de
                                confidentialité et
                            </li>
                            <li>
                                b. la collecte, l’utilisation et la conservation des données
                                énumérées dans la présente politique.
                            </li>
                        </ol>
                    </p>

                    <span className="main__informations">
                        Données personnelles que nous collectons
                    </span>

                    <p>Données collectées automatiquement</p>
                    <p>Nous ne collectons aucune donnée automatiquement sur notre site.</p>

                    <p>Données recueillies de façon non automatique</p>
                    <p>
                        Nous pouvons également collecter les données suivantes lorsque vous
                        effectuez certaines fonctions sur notre site :
                    </p>
                    <ol>
                        <li>a. Prénom et nom</li>
                        <li>b. Age</li>
                        <li>c. Email</li>
                        <li>d. Numéro de téléphone</li>
                        <li>e. Domicile</li>
                    </ol>

                    <p>Ces données peuvent être recueillies au moyen des méthodes suivantes :</p>
                    <p>Formulaire d'inscription</p>

                    <p>
                        Veuillez noter que nous ne collectons que les données qui nous aident à
                        atteindre l’objectif énoncé dans cette politique de confidentialité. Nous ne
                        recueillerons pas de données supplémentaires sans vous en informer au
                        préalable.
                    </p>

                    <span className="main__informations">
                        Comment nous utilisons les données personnelles
                    </span>

                    <p>
                        Les données personnelles recueillies sur notre site seront utilisées
                        uniquement aux fins précisées dans la présente politique ou indiquées sur
                        les pages pertinentes de notre site. Nous n’utiliserons pas vos données
                        au-delà de ce que nous divulguerons.
                    </p>

                    <p>
                        Les données que nous recueillons lorsque l’utilisateur exécute certaines
                        fonctions peuvent être utilisées aux fins suivantes :
                    </p>

                    <p>
                        <ol>
                            <li>a. Communication</li>
                        </ol>
                    </p>

                    <span className="main__informations">
                        Avec qui nous partageons les données personnelles
                    </span>
                    <p>
                        <span className="main__informations">Employés</span>
                    </p>
                    <p>
                        Nous pouvons divulguer à tout membre de notre organisation les données
                        utilisateur dont il a raisonnablement besoin pour réaliser les objectifs
                        énoncés dans la présente politique.
                    </p>

                    <span className="main__informations">Tierces parties</span>
                    <p>Nous pouvons partager les données utilisateur avec les tiers suivants :</p>

                    <p>
                        Nous pouvons partager les données utilisateur avec des tiers aux fins
                        suivantes :
                    </p>

                    <p>
                        Les tiers ne seront pas en mesure d’accéder aux données des utilisateurs
                        au-delà de ce qui est raisonnablement nécessaire pour atteindre l’objectif
                        donné.
                    </p>

                    <span className="main__informations">Autres divulgations</span>
                    <p>
                        Nous nous engageons à ne pas vendre ou partager vos données avec des tiers,
                        sauf dans les cas suivants :
                    </p>

                    <ol>
                        <li>a. si la loi l'exige</li>
                        <li>b. si elle est requise pour toute procédure judiciaire</li>
                        <li>c. pour prouver ou protéger nos droits légaux</li>
                        <li>
                            d. à des acheteurs ou des acheteurs potentiels de cette société dans le
                            cas où nous cherchons à la vendre la société
                        </li>
                    </ol>

                    <p>
                        Si vous suivez des hyperliens de notre site vers un autre site, veuillez
                        noter que nous ne sommes pas responsables et n’avons pas de contrôle sur
                        leurs politiques et pratiques de confidentialité.
                    </p>

                    <span className="main__informations">
                        Combien de temps nous stockons les données personnelles
                    </span>

                    <p>
                        Nous ne conservons pas les données des utilisateurs au-delà de ce qui est
                        nécessaire pour atteindre les fins pour lesquelles elles sont recueillies.
                    </p>

                    <span className="main__informations">
                        Comment nous protégeons vos données personnelles
                    </span>

                    <p>
                        Afin d’assurer la protection de votre sécurité, nous utilisons le protocole
                        de sécurité de la couche transport pour transmettre des renseignements
                        personnels dans notre système.
                    </p>

                    <p>
                        Toutes les données stockées dans notre système sont bien sécurisées et ne
                        sont accessibles qu’à nos employés. Nos employés sont liés par des accords
                        de confidentialité stricts et une violation de cet accord entraînerait le
                        licenciement de l'employé.
                    </p>

                    <p>
                        Alors que nous prenons toutes les précautions raisonnables pour nous assurer
                        que nos données d’utilisateur sont sécurisées et que les utilisateurs sont
                        protégés, il reste toujours du risque de préjudice. L’Internet en sa
                        totalité peut être, parfois, peu sûr et donc nous sommes incapables de
                        garantir la sécurité des données des utilisateurs au-delà de ce qui est
                        raisonnablement pratique.
                    </p>

                    <span className="main__informations">Mineurs</span>

                    <p>
                        Le RGPD précise que les personnes de moins de 15 ans sont considérées comme
                        des mineurs aux fins de la collecte de données. Les mineurs doivent avoir le
                        consentement d’un représentant légal pour que leurs données soient
                        recueillies, traitées et utilisées.
                    </p>

                    <span className="main__informations">Vos droits en tant qu’utilisateur</span>

                    <p>
                        En vertu du RGPD, les utilisateurs ont les droits suivants en tant que
                        personnes concernées :
                    </p>

                    <ol>
                        <li>a. droit d’accès</li>
                        <li>b. droit de rectification</li>
                        <li>c. droit à l’effacement</li>
                        <li>d. droit de restreindre le traitement</li>
                        <li>e. droit à la portabilité des données</li>
                        <li>f. droit d'objection</li>
                    </ol>

                    <p>
                        Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art
                        12-23) du RGPD.
                    </p>

                    <span className="main__informations">
                        Comment modifier, supprimer ou contester les données recueillies
                    </span>

                    <p>
                        Si vous souhaitez que vos renseignements soient supprimés ou modifiés d’une
                        façon ou d’une autre, veuillez communiquer avec notre agent de protection de
                        la vie privée ici :
                    </p>

                    <p>Sloan Gauthier</p>
                    <p>1 rue des Echevins 75000 Paris</p>
                    <p>contact@petfosterconnect.com</p>

                    <span className="main__informations">Politique sur les cookies</span>

                    <p>
                        Un cookie est un petit fichier, stocké sur le disque dur d’un utilisateur
                        par le site Web. Son but est de recueillir des données relatives aux
                        habitudes de navigation de l’utilisateur.
                    </p>

                    <p>Nous utilisons les types de cookies suivants sur notre site :</p>

                    <span className="main__informations">Cookies fonctionnels</span>
                    <p>
                        Nous les utilisons pour mémoriser toutes les sélections que vous faites sur
                        notre site afin qu’elles soient sauvegardées pour vos prochaines visites.
                    </p>
                    <p>
                        Vous pouvez choisir d’être averti chaque fois qu’un cookie est transmis.
                        Vous pouvez également choisir de désactiver les cookies entièrement dans
                        votre navigateur Internet, mais cela peut diminuer la qualité de votre
                        expérience d’utilisation.
                    </p>

                    <span className="main__informations">Modifications</span>

                    <p>
                        Cette politique de confidentialité peut être modifiée à l’occasion afin de
                        maintenir la conformité avec la loi et de tenir compte de tout changement à
                        notre processus de collecte de données. Nous recommandons à nos utilisateurs
                        de vérifier notre politique de temps à autre pour s’assurer qu’ils soient
                        informés de toute mise à jour. Au besoin, nous pouvons informer les
                        utilisateurs par courriel des changements apportés à cette politique.
                    </p>

                    <span className="main__informations">Contact</span>

                    <p>
                        Si vous avez des questions à nous poser, n’hésitez pas à communiquer avec
                        nous en utilisant ce qui suit :
                    </p>
                    <p>contact@petfosterconnect.com</p>
                    <p>1 rue des Echevins 75000 Paris</p>

                    <p>
                        Date d’entrée en vigueur : le 30 octobre 2024 2002-2024, DocumentsLégaux
                        (Sequiter Inc.)
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PolitiqueConfidentialite;
