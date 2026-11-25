
import { LuHouse, LuStar } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
export const Header = () => {
    
    return (
        <>
            <header className="header">
                <h2 className='header__title'>MICHIDEX</h2>

                <ul className='nav'>
                    <li className='nav__item'>
                        <NavLink to="/" end className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}>
                            <LuHouse className='nav__icon' /> Explorar
                        </NavLink>
                    </li>
                    
                    <li className='nav__item'>
                        <NavLink to="/favoritos" className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}>
                            <LuStar className='nav__icon' /> Favoritos
                        </NavLink>
                    </li>
                </ul>
            </header>

            <h1 className="header__title">MICHIDEX</h1>
            <h2 className='header__subtitle'>Descubre, clasifica y conecciona michis</h2>
        </>
    )
}