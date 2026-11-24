
import { Card } from './Card';
import '../styles/Michidex.css';
import { useContext } from 'react';
import { MichiContext } from '../context/MichiContext';

const images = import.meta.glob(
    '../assets/michis/*.{jpg,jpeg,png,webp}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);

export const Michidex = () => {

    const { searchedMichis } = useContext(MichiContext);
    
    return (
        <ul className='michidex'>
            {
                searchedMichis.map(michi => (
                    <Card
                        key={michi.id}
                        {...michi}
                        image={images[`../assets/michis/${michi.image}`]} />
                ))
            }
        </ul>
    )
}
