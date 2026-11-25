
import './Michidex.css';
import { useContext } from 'react';
import { MichiContext } from '../context/MichiContext';
import { MichiList } from './MichiList';

export const Michidex = () => {

    const { searchedMichis } = useContext(MichiContext);
    
    return (
        <MichiList michis={searchedMichis} />
    )
}
