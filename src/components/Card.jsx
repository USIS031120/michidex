
import { LuHeart } from "react-icons/lu";
import { typeColors } from "../utils/typeColors";
import { useContext } from "react";
import { MichiContext } from "../context/MichiContext";

export const Card = ({id, name, image, types, ability, onShowInfo}) => {
    const typeColor = typeColors[types.type1];
    const typeColor2 = typeColors[types.type2] && typeColors[types.type2].main || "";

    const { toggleFavorite, favoriteIds } = useContext(MichiContext);
    return (
        <li
            className="card"
            style={{backgroundColor: typeColor.light}}
        >
            <div className="card__image-container">
                <span className="card__id">{ id }</span>
                <button className={`card__heart ${favoriteIds.includes(id) ? 'card__heart--active' : ''}`} onClick={() => toggleFavorite(id)}>
                    <LuHeart className="card__icon" />
                </button>
                <img src={image} alt={name} className="card__image" />
            </div>
            <div className="card__content">

                <div className="card__types">
                    <span
                        className="card__type"
                        style={{backgroundColor: typeColor.main}}
                    >
                        {types.type1}
                    </span>
                    {types.type2 && (
                        <span
                            className="card__type"
                            style={{backgroundColor: typeColor2}}
                        >
                            {types.type2}
                        </span>
                    )}
                </div>
                <h2 className="card__title">{ name }</h2>

                <div className="card__ability">
                    <p className="card__label">HABILIDAD</p>
                    <h2 className="card__text">{ ability.name }</h2>
                </div>
                <button
                    type="button"
                    className="card__details-button"
                    aria-label={`Ver información de ${name}`}
                    aria-haspopup="dialog"
                    onClick={onShowInfo}
                >
                    Ver información
                </button>
            </div>
        </li>
    )
}