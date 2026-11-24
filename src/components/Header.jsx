
import { LuHouse, LuStar } from 'react-icons/lu';
import '../styles/Header.css';
export const Header = () => {
    
    return (
        <>
            <header className="header">
                <h2 className='header__title'>MICHIDEX</h2>

                <ul className='nav'>
                    <li className='nav__item nav__item--active'><a href="" className='nav__link'><LuHouse className='nav__icon' /> Explorar</a></li>
                    
                    <li className='nav__item'><a href="" className='nav__link'><LuStar className='nav__icon' /> Favoritos</a></li>
                </ul>
            </header>

            <h1 className="header__title">MICHIDEX</h1>
            <h2 className='header__subtitle'>Descubre, clasifica y conecciona michis</h2>
        </>
    )
}