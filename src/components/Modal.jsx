import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LuX } from 'react-icons/lu';
import '../styles/Modal.css';

export const Modal = ({ children, onClose }) => {
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const modalRoot = document.getElementById('modal');
    if (!modalRoot) {
        throw new Error('The modal portal root element was not found.');
    }

    return createPortal(
        <div className="overlay" onClick={onClose}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="michi-info-title"
                onClick={event => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="modal__close"
                    aria-label="Cerrar información"
                    onClick={onClose}
                >
                    <LuX aria-hidden="true" />
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
}
