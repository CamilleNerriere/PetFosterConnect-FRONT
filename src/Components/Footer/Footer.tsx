import NavigationLink from "../Links/NavLink";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer__nav__list">
                    <li>
                        <NavigationLink
                            to={"/mentions-legales"}
                            className={"footer__nav__link"}
                            text={"Mentions légales"}
                            title={"Consulter la page des mentions légales"}
                        />
                    </li>
                    <li>
                        <NavigationLink
                            to={"/politique-confidentialite"}
                            className={"footer__nav__link"}
                            text={"Politique de confidentialité"}
                            title={"Consulter la page Politique de confidentialité"}
                        />
                    </li>
                    <li>
                        <NavigationLink
                            to={"/plan-du-site"}
                            className={"footer__nav__link"}
                            text={"Plan du site"}
                            title={"Consulter la page Plan du site"}
                        />
                    </li>
                    <li>
                        <a
                            className="footer__nav__link"
                            href="mailto:contact@petfosterconnect.com"
                            title="Envoyer un email à PetFosterConnect"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="copyright">PetFosterConnect - Copyright © 2024</div>
        </footer>
    );
};

export default Footer;
