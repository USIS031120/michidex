
import { michis } from '../utils/data';
import { Card } from './Card';
import '../styles/Michidex.css';

const images = import.meta.glob(
    '../assets/michis/*.{jpg,jpeg,png,webp}',
    {
        eager: true,
        query: '?url',
        import: 'default',
    }
);

export const Michidex = () => {

    return (
        <ul className='michidex'>
            {
                michis.map(michi => (
                    <Card
                        key={michi.id}
                        {...michi}
                        image={images[`../assets/michis/${michi.image}`]} />
                ))
            }
        </ul>
    )
}
