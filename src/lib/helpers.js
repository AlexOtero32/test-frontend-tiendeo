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
