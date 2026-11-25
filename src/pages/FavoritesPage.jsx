import './FavoritesPage.css';
import { MichiList } from '../Michidex/MichiList';
import { useContext } from 'react';
import { MichiContext } from '../context/MichiContext';

export const FavoritesPage = () => {

  const { searchedMichis, favoriteIds } = useContext(MichiContext);

  const favoriteMichis = searchedMichis.filter(michi => {
    return favoriteIds.includes(michi.id);
  });

  return (
    <section className="favorites-page">
      <h2 className="favorites-page__title">Mis michis favoritos</h2>
      <MichiList michis={favoriteMichis} />
    </section>
  )
};
