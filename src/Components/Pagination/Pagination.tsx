import React from "react";
import "./Pagination.scss";
import { IAnimal } from "../../Interfaces/IAnimal.ts";

interface PaginationProps {
    animals: IAnimal[];
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination = ({ animals, handleChangePage }: PaginationProps) => {

    /* Calcule le nombre total de pages en fonction du nombre d'animaux */
    const totalPagesNumber = Math.round(animals.length / 6);

    /* Crée autant d'élément <li> <button> (bouton des pages) pour le nombre de pages calculés */
    const pageItems = [];
    for (let i = 0; i < totalPagesNumber; i++) {
        pageItems.push(
            <li key={i} className="page-item">
                <button onClick={handleChangePage} className="page-link" data-page={i + 1}>{i + 1}</button>
            </li>,
        );
    }


    return (
        <nav aria-label="Pages de navigation">
            <ul className="pagination">
                {pageItems}
            </ul>
        </nav>
    );
};

export default Pagination;
