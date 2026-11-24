
import '../styles/Filters.css';
import { typeColors, types } from '../utils/typeColors';

const Filters = () => {
	return (
		<ul className="filters">
			<li className="filters__item">Todos</li>

			{ types.map(type => (
				<li key={type} style={{backgroundColor: typeColors[type].main}} className="filters__item">{type}</li>
			)) }
		</ul>
	)
}

export { Filters };