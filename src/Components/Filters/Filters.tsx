import "./Filters.scss";
import { FormEvent, useEffect, useState } from "react";
import { IAnimal } from "../../Interfaces/IAnimal.ts";
import { IAssociation } from "../../Interfaces/IAssociation.ts";
import { IDepartment } from "../../Interfaces/IDepartment.ts";
import InputWithLabel from "../InputWithLabel/InputWithLabel.tsx";

interface FiltersProps {
    animals: IAnimal[];
    handleFilter: (event: FormEvent) => void;
}

const Filters = ({ animals, handleFilter }: FiltersProps) => {

    const [departments, setDepartments] = useState<IDepartment[]>([]);
    const [associations, setAssociations] = useState<IAssociation[]>([]);

    // Permet de retourner un tableau des type et genre sans les dupliquer
    const uniqueSpecies = [...new Set(animals.map((animal) => animal.species))];
    const uniqueGender = [...new Set(animals.map((animal) => animal.gender))];

    useEffect(() => {
        const fetchFilterData = async () => {
            try {
                const [response1, response2] = await Promise.all([
                    fetch(`${import.meta.env.VITE_API_URL}/departments`),
                    fetch(`${import.meta.env.VITE_API_URL}/associations`),
                ]);

                const departments = await response1.json();
                const associations = await response2.json();

                setDepartments(departments);
                setAssociations(associations);

            } catch (error) {
                console.log(error);
            }
        };

        fetchFilterData();
    }, []);


    return (
        <div className="filters">
            <form className="filters__form" method="get" action="http://localhost:5050/animals/search"
                  onSubmit={handleFilter}>
                <label className="filters__form__description" htmlFor="species">Type</label>
                <select className="form-select" id="species" name="species">
                    <option value="">Tous les types</option>
                    {uniqueSpecies.map((species) => (
                        <option key={species} value={species}>
                            {species}
                        </option>
                    ))}

                </select>

                <label className="filters__form__description" htmlFor="department">Localisation</label>
                <select className="form-select" id="department" name="department_id">
                    <option value="">Tous les départements</option>
                    {departments.map((department) => (
                        //department_id
                        <option key={department.id} value={department.id}>{department.name}</option>
                    ))}
                </select>

                <label className="filters__form__description" htmlFor="association">Association</label>
                <select className="form-select" id="association" name="association_id">
                    <option value="">Toutes les associations</option>
                    {associations.map((association) => (
                        //association_id
                        <option key={association.id} value={association.id}>{association.name}</option>
                    ))}
                </select>

                <label className="filters__form__description" htmlFor="gender">Genre</label>
                <select className="form-select" id="gender" name="gender">
                    <option value="">Tous les genres</option>
                    {uniqueGender.map((gender) => (
                        // gender
                        <option key={gender} value={gender}>
                            {gender}
                        </option>
                    ))}
                </select>

                <fieldset className="filters__form__fieldset">
                    <legend className="filters__form__description">Âge</legend>

                    <InputWithLabel classNameInput="form-check-input" type="checkbox" name="age" ariaLabel="0 à 2 ans"
                                    value="0-2" text="0 à 2 ans" />

                    <InputWithLabel classNameInput="form-check-input" type="checkbox" name="age" ariaLabel="2 à 5 ans"
                                    value="2-5" text="2 à 5 ans" />

                    <InputWithLabel classNameInput="form-check-input" type="checkbox" name="age" ariaLabel="5 à 10 ans"
                                    value="5-10" text="5 à 10 ans" />

                    <InputWithLabel classNameInput="form-check-input" type="checkbox" name="age"
                                    ariaLabel="Plus de 10 ans"
                                    value="11" text="< 10 ans" />
                </fieldset>

                <fieldset className="filters__form__fieldset">
                    <legend className="filters__form__description">Taille</legend>

                    <InputWithLabel classNameInput="form-check-input" type="checkbox" name="size" ariaLabel="Petit"
                                    value="Petit" text="Petit" />

                    <InputWithLabel classNameInput="form-check-input" type="checkbox" name="size" ariaLabel="Moyen"
                                    value="Moyen" text="Moyen" />

                    <InputWithLabel classNameInput="form-check-input" type="checkbox" name="size" ariaLabel="Grand"
                                    value="Grand" text="Grand" />
                </fieldset>

                <button className="btn" type="submit" aria-label="Bouton de recherche">
                    Rechercher
                </button>
            </form>
        </div>

    );
};

export default Filters;
