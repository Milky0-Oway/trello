import React, { useRef, useEffect } from 'react';
import { modal, close } from './Modal.css.ts';

export const Modal: React.FC<ModalProps> = ({
    isVisible,
    closeModal,
    children,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                closeModal();
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, closeModal]);

    if (!isVisible) return null;

    return (
        <div className={modal} ref={modalRef}>
            <button className={close} onClick={closeModal}>
                x
            </button>
            {children}
        </div>
    );
};

interface ModalProps {
    isVisible: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}
