import "./ManageAnimal.scss";
import { Helmet } from "react-helmet-async";
import Header from "../../Components/Header/Header.tsx";
import Footer from "../../Components/Footer/Footer.tsx";

import DashboardCard from "../../Components/DashboardCard/DashboardCard.tsx";
import { Error } from "../../Components/Error/Error.tsx";

import Loading from "../../Components/Loading/Loading.tsx";
import { Button, Modal, Toast } from "react-bootstrap";
import { IAnimal } from "../../Interfaces/IAnimal.ts";
import LeftNavBar from "../../Components/LeftNavBar/LeftNavBar";
import { useState, useEffect, useCallback, useRef } from "react";
import Icon from "../../Components/Icon/Icon.tsx";
import GestionModal from "../../Components/GestionModal/GestionModal.tsx";
import { useAuth } from "../../Context/AuthContext.tsx";
import { useFetchAssociationAnimals } from "../../Hook/useFetchAssociationAnimals.ts";
import PaginationComposant from "../../Components/Pagination/Pagination";

const ManageAnimal = () => {
	// state qui permet de gérer si on a une modale edit ou créer un animal

	const [showGestionModal, setShowGestionModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const [associationAnimals, setAssociationAnimals] = useState<IAnimal[]>([]);

	// states qui permettent de gérer quel animal est à éditer ou supprimer

	const [animalToEdit, setAnimalToEdit] = useState<IAnimal | null>(null);
	const [animalToDelete, setAnimalToDelete] = useState<IAnimal | null>(null);

	// state de gestion du toast de message erreur ou succès formulaire

	const [toastMessage, setToastMessage] = useState("");
	const [showToast, setShowToast] = useState(false);

	const toggleToast = useCallback((message) => {
		setToastMessage(message);
		setShowToast(true);
	}, []);

	// Gestion de la pagination

	const token = localStorage.getItem("auth_token");

	const {
		paginatedAnimals,
		isLoading,
		setIsLoading,
		error,
		setError,
		baseURL,
		totalCount,
	} = useFetchAssociationAnimals(token);

	const [animalsToDisplay, setAnimalsToDisplay] = useState<IAnimal[]>([]);

	const [currentPage, setCurrentPage] = useState(1);

	const animalList = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (paginatedAnimals) {
			setAnimalsToDisplay(paginatedAnimals);
		}
	}, [paginatedAnimals]);

	const handleChangePage = async (page: number) => {
		setCurrentPage(page);
		try {
			setIsLoading(true);

			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/dashboard/association/animals?page=${page}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			if (!response.ok) {
				return setError(
					"Une erreur est survenue, veuillez rafraîchir la page.",
				);
			}
			const data = await response.json();
			setAnimalsToDisplay(data.paginatedAnimals);
			xs;
		} catch (error) {
			setError("Une erreur est survenue, veuillez rafraîchir la page.");
			console.error("Erreur lors de la récupération des données:", error);
		} finally {
			setIsLoading(false);
			if (animalList.current !== null) {
				animalList.current.scrollIntoView();
			}
		}
	};

	// handler de la modale de gestion
	const handleShowGestionModal = useCallback((animal?: IAnimal) => {
		setShowGestionModal(true);
		setAnimalToEdit(animal || null);
		setToastMessage("");
		setShowToast(false);
	}, []);

	const handleCloseGestionModal = useCallback(() => {
		setShowGestionModal(false);
		setToastMessage("");
	}, []);

	// L'event listener à la soumission du formulaire éditer

	const handleSubmitEdit = useCallback(
		async (values) => {
			const formData = new FormData();

			// On construit FormData avec les valeurs du formulaire
			for (const key in values) {
				if (Object.hasOwnProperty.call(values, key)) {
					const value = values[key];
					if (value !== undefined && value !== null && value !== "") {
						formData.append(key, value);
					}
				}
			}

			let updatedAnimal;
			try {
				const token = localStorage.getItem("auth_token");
				const response = await fetch(
					`${baseURL}/dashboard/association/animals/${animalToEdit.id}`,
					{
						method: "PATCH",
						headers: {
							Authorization: `Bearer ${token}`,
						},
						body: formData,
					},
				);

				if (response.ok) {
					updatedAnimal = await response.json(); // on récupère updatedAnimal ici

					toggleToast("Animal édité avec succès");

					setAnimalsToDisplay((prevAnimals) =>
						prevAnimals.map((animal) =>
							animal.id === updatedAnimal.id ? updatedAnimal : animal,
						),
					);

					setTimeout(() => {
						handleCloseGestionModal();
					}, 1000);
				} else {
					updatedAnimal = await response.json();
					toggleToast(updatedAnimal.error || "Erreur lors de la mise à jour");
				}
			} catch (error) {
				console.error("Erreur:", error);
			}
		},
		[handleCloseGestionModal, animalToEdit, toggleToast],
	);

	// L'eventListener à la soumission du formulaire ajouter un animal

	const handleSubmitAdd = useCallback(
		async (values) => {
			const formData = new FormData();

			for (const key in values) {
				if (Object.hasOwnProperty.call(values, key)) {
					const value = values[key];
					if (value !== undefined && value !== null && value !== "") {
						formData.append(key, value);
					}
				}
			}
			let createdAnimal;
			try {
				const token = localStorage.getItem("auth_token");
				const response = await fetch(
					`${baseURL}/dashboard/association/animals/`,
					{
						method: "POST",
						headers: {
							Authorization: `Bearer ${token}`,
						},
						body: formData,
					},
				);

				if (response.ok) {
					createdAnimal = await response.json();

					toggleToast("Animal ajouté avec succès");
					setTimeout(() => {
						handleCloseGestionModal();
					}, 1000);
				} else {
					createdAnimal = await response.json();
					toggleToast(createdAnimal.error || "Erreur lors de la création");

					setTimeout(() => {
						handleCloseGestionModal();
					}, 1000);
				}
			} catch (error) {
				console.error("Erreur:", error);
			}
		},
		[handleCloseGestionModal, toggleToast],
	);

	// Gestion de la modale confirmation de suppression

	const handleShowDeleteModal = useCallback((animal: IAnimal) => {
		setShowDeleteModal(true);
		setAnimalToDelete(animal);
		setToastMessage("");
		setShowToast(false);
	}, []);

	const handleCloseDeleteModal = useCallback(() => {
		setShowDeleteModal(false);
		setAnimalToDelete(null);
	}, []);

	const deleteAnimal = useCallback(async () => {
		try {
			const token = localStorage.getItem("auth_token");
			const response = await fetch(
				`${baseURL}/dashboard/association/animals/${animalToDelete.id}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			if (response.ok) {
				toggleToast("Animal supprimé");
				setAnimalsToDisplay((prevAnimals) =>
					prevAnimals.filter((animal) => animal.id !== animalToDelete.id),
				);

				setTimeout(() => {
					handleCloseDeleteModal();
				}, 1000);
			} else {
				toggleToast("Erreur lors de la suppression");
			}
		} catch (error) {
			console.error("Erreur:", error);
		}
	}, [animalToDelete, handleCloseDeleteModal, toggleToast]);

	return (
		<div className="manage-animal">
			<button
				className="btn btn--add-animal"
				type="button"
				onClick={() => {
					handleShowGestionModal();
				}}
			>
				<span>Ajouter un animal</span>
				<img src="/src/assets/icons/plus.svg" alt="icône Ajout" />
			</button>

			<div className="manage-animal__cards__container">
				<div className="row gx-8 gy-3">
					{isLoading ? (
						<Loading />
					) : error ? (
						<Error error={error} />
					) : (
						animalsToDisplay.map((animal) => (
							<div
								className="manage-animal__cards__container__card col-12 col-sm-6 col-md-4"
								key={animal.id}
							>
								<DashboardCard
									onShowDeleteModal={handleShowDeleteModal}
									onShowGestionModal={handleShowGestionModal}
									path={`/animaux/${animal.slug}`}
									src={`${baseURL}${animal.url_image}`}
									alt={animal.name}
									name={animal.name}
									animal={animal}
								/>
							</div>
						))
					)}
				</div>
			</div>

			<PaginationComposant
				items={totalCount}
				currentPage={currentPage}
				handleChangePage={handleChangePage}
			/>

			{/* Modale pour modifier ou créer un animal */}

			<GestionModal
				handleCloseGestionModal={handleCloseGestionModal}
				showGestionModal={showGestionModal}
				setShowGestionModal={setShowGestionModal}
				handleSubmitEdit={handleSubmitEdit}
				handleSubmitAdd={handleSubmitAdd}
				animalToEdit={animalToEdit}
				showToast={showToast}
				toggleToast={toggleToast}
				toastMessage={toastMessage}
			/>

			{/* Modale pour confirmer la suppression d'un animal */}

			<Modal
				show={showDeleteModal}
				onHide={handleCloseDeleteModal}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Confirmation suppression</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Voulez-vous vraiment supprimer {animalToDelete && animalToDelete.name}{" "}
					?{" "}
					<div className="modal__toast d-flex justify-content-center mt-3">
						<Toast show={showToast} onClose={toggleToast}>
							<Toast.Body>{toastMessage}</Toast.Body>
						</Toast>
					</div>
				</Modal.Body>
				<Modal.Footer>
					{" "}
					<Button className="btn--form" onClick={deleteAnimal}>
						Oui
					</Button>
					<Button className="btn--form" onClick={handleCloseDeleteModal}>
						Non
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ManageAnimal;