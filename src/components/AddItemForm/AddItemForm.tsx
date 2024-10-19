import React, { useState, useRef, useEffect } from 'react';
import {
    addingButton,
    addingForm,
    addingInput,
    cancelButton,
} from './AddItemForm.css';

interface AddItemFormProps {
    placeholder: string;
    buttonText: string;
    onAddItem: (title: string) => void;
    isAdding: boolean;
    setIsAdding: (isAdding: boolean) => void;
    buttonStyle: string;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({
    placeholder,
    buttonText,
    onAddItem,
    isAdding,
    setIsAdding,
    buttonStyle,
}) => {
    const [title, setTitle] = useState('');
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setIsAdding(false);
            }
        };

        if (isAdding) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isAdding, setIsAdding]);

    const handleAddItem = () => {
        if (title.trim() === '') return;
        onAddItem(title);
        setTitle('');
        setIsAdding(false);
    };

    return (
        <>
            {isAdding ? (
                <div className={addingForm} ref={modalRef}>
                    <input
                        className={addingInput}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={placeholder}
                    />
                    <button className={addingButton} onClick={handleAddItem}>
                        {buttonText}
                    </button>
                    <button
                        className={cancelButton}
                        onClick={() => setIsAdding(false)}
                        aria-label="Cancel adding item"
                    />
                </div>
            ) : (
                <button
                    className={buttonStyle}
                    onClick={() => setIsAdding(true)}
                >
                    + {buttonText}
                </button>
            )}
        </>
    );
};
