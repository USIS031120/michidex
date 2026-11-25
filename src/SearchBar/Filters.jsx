
import { useContext } from 'react';
import './Filters.css';
import { typeColors, types } from '../utils/typeColors';
import { TypeDropdown } from './TypeDropdown';
import { MichiContext } from '../context/MichiContext';

const Filters = () => {
	const { selectedType, setSelectedType } = useContext(MichiContext);
	return (
		<ul className="filters">
			<li
			className={`filters__item filters__item--all ${selectedType === 'Todos' ? 'filters__item--active': ''}`}
			onClick={() => setSelectedType('Todos')}
			>
				Todos
			</li>

			{ types.slice(0, 5).map(type => {
				const colors = typeColors[type];
				return (
					<li key={type} style={{
						'--type-light': colors.light,
						'--type-main': colors.main,
						'--type-text': colors.text,
          				'--type-active-text': colors.activeText,
					}} className={`filters__item ${selectedType === type ? 'filters__item--active' : ''}`}
					onClick={() => setSelectedType(type)}>{type}</li>
				)}
			)}

			<li className="filters__item filters__item--dropdown">
        		<TypeDropdown selectedType={selectedType} onSelect={setSelectedType} />
      		</li>
		</ul>
	)
}

export { Filters };