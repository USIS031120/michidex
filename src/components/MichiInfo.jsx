import { typeColors } from '../utils/typeColors';
import './MichiInfo.css';

export const MichiInfo = ({ id, image, name, types, ability }) => {
    const typeColor = typeColors[types.type1];
    const secondaryTypeColor = types.type2
        ? typeColors[types.type2]?.main
        : undefined;

    return (
        <article className="card michi-info" style={{ backgroundColor: typeColor.light }}>
            <div className="card__image-container">
                <span className="card__id">{id}</span>
                <img src={image} alt={name} className="card__image" />
            </div>
            <div className="card__content">
                <div className="card__types">
                    <span
                        className="card__type"
                        style={{ backgroundColor: typeColor.main }}
                    >
                        {types.type1}
                    </span>
                    {types.type2 && (
                        <span
                            className="card__type"
                            style={{ backgroundColor: secondaryTypeColor }}
                        >
                            {types.type2}
                        </span>
                    )}
                </div>
                <h2 className="card__title" id="michi-info-title">{name}</h2>

                <div className="card__ability">
                    <p className="card__label">HABILIDAD</p>
                    <h3 className="card__text">{ability.name}</h3>
                    <p className="michi-info__description">{ability.description}</p>
                </div>
            </div>
        </article>
    );
};
