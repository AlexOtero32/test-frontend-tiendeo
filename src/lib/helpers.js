import * as React from 'react';

/**
 * Utilizamos el hook useEffect para crear una función que permita detectar cuándo se pincha fuera del menú
 * Se pasa una referencia y se añade el evento mousedown
 */
export const useOutsideAlerter = (ref, callback) => {
    React.useEffect(() => {
        function handleClickOutside(event) {
            // Comprobamos que se ha hecho click fuera
            if (ref.current && !ref.current.contains(event.target)) {
                callback(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

export const renderInputField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error },
}) => {
    return (
        <div className="form-group">
            <label className="label">{label}</label>

            <input
                {...input}
                className="input"
                type={type}
                placeholder={placeholder ? placeholder : label}
            />

            {touched && error && (
                <p className="text-red-500 text-xs italic">{error}</p>
            )}
        </div>
    );
};

export const renderTextAreaField = ({
    input,
    label,
    meta: { touched, error },
}) => {
    return (
        <div className="form-group">
            <label className="label">{label}</label>

            <textarea {...input} className="input" placeholder={label} />

            {touched && error && (
                <p className="text-red-500 text-xs italic">{error}</p>
            )}
        </div>
    );
};
