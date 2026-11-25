import { useState } from "react";
import { Card } from "./Card";
import { MichiInfo } from "./MichiInfo";
import { Modal } from "./Modal";

const images = import.meta.glob(
	'../assets/michis/*.{jpg,jpeg,png,webp}',
	{
		eager: true,
		query: '?url',
		import: 'default',
	}
);

const MichiList = ({ michis }) => {
    const [selectedMichi, setSelectedMichi] = useState(null);
    const closeModal = () => setSelectedMichi(null);

    return (
        <>
            <ul className='michidex'>
                {michis.map(michi => {
                    const image = images[`../assets/michis/${michi.image}`];

                    return (
                    <Card
                        key={michi.id}
                        {...michi}
                        image={image}
                        onShowInfo={() => setSelectedMichi({ ...michi, image })}
                    />
                    );
                })}
            </ul>
            {selectedMichi && (
                <Modal onClose={closeModal}>
                    <MichiInfo {...selectedMichi} />
                </Modal>
            )}
        </>
    );
}

export { MichiList };