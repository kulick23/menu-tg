import React from 'react';
import '../styles.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-button" onClick={onClose}>×</button>
                <div className="modal-content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;
