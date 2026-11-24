
import { typeColors } from "../utils/typeColors";

export const Card = ({id, name, image, types, ability}) => {
    const typeColor = typeColors[types.type1];
    const typeColor2 = typeColors[types.type2] && typeColors[types.type2].main || "";

    return (
        <li
            className="card"
            style={{backgroundColor: typeColor.light}}
        >
            <div className="card__image-container">
                <span className="card__id">{ id }</span>
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
            </div>
        </li>
    )
}