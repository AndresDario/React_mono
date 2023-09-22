//External import
import { useNavigate } from "react-router-dom";


const AddUser = () => {
    const navigate = useNavigate();
    const handleCreateUser = () => {
        navigate(-1);

    }
    return (
        <div className="container">
            <h2>Ajouter un utilisateur</h2>
            <button onClick={handleCreateUser} className="text-button-delete">Creer</button>
        </div>
    )
}

export default AddUser