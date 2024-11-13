import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IFamily } from "../Interfaces/IFamily.ts";
import { useAuth } from "../Context/AuthContext.tsx";
import Profil from "./Profil/Profil.tsx";
import { IUser } from "../Interfaces/IUser.ts";

const baseURL = import.meta.env.VITE_API_URL;

const Famille = () => {
    const { slug } = useParams();

    const arraySlug = slug!.split("-");
    const familyId = arraySlug![arraySlug!.length - 1];
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [family, setFamily] = useState<IFamily | null>(null);
    const [userHasFamily, setUserHasFamily] = useState<IUser | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Exécute les deux requêtes en parallèle
                const [familyResponse, userResponse] = await Promise.all([
                    fetch(`${baseURL}/family/${familyId}`, {
                        headers: { "Authorization": `Bearer ${localStorage.getItem("auth_token")}` },
                    }),
                    fetch(`${import.meta.env.VITE_API_URL}/auth/family/${familyId}`),
                ]);

                if (!familyResponse.ok || !userResponse.ok) {
                    setError("Une erreur est survenue, veuillez rafraîchir la page.");
                    setIsLoading(false);
                    return;
                }

                const [familyData, userData] = await Promise.all([
                    familyResponse.json(),
                    userResponse.json(),
                ]);

                setFamily(familyData);
                setUserHasFamily(userData);
            } catch (err) {
                setError("Une erreur est survenue, veuillez rafraîchir la page.");
                console.error("Erreur lors de la récupération des données:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [familyId, setFamily]);


    const { isAuth, userData } = useAuth();
    const isFamilyLegitimate = isAuth && userData.family_id === parseInt(familyId);


    return <Profil entity={family} baseURL={baseURL} isLoading={isLoading} error={error}
                   isLegitimate={isFamilyLegitimate} setEntity={setFamily} userHasEntity={userHasFamily} />;
};


export default Famille;
