//External import
import { useParams, useNavigate } from "react-router-dom";
//Internal import
import { findById } from "../controllers/users";
const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const user = findById(id);

    const handleOnBack = () => {
        navigate(-1);
    }


    return (
        <div className="container">
            <h2>Utilisateur</h2>
            <div className="card">
                {
                    user === null ?
                        <div className="card-body">
                            <h5 className="card-title">Utilisateur non trouver</h5>
                            <button className="btn btn-primary" onClick={handleOnBack}>Retour</button>
                        </div> : <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text">{user.phone}</p>
                            <p className="card-text">{user.address}</p>
                            <button className="btn btn-primary" onClick={handleOnBack}>Retour</button>
                        </div>
                }

                {
                    user !== null && <div className="text-button-delete">Supprimer</div>
                }
            </div>



        </div>
    )
}

export default User