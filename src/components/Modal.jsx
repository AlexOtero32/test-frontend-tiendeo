import React from 'react';

const Modal = ({ onClose }) => {
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="form-group">
                <label className="label">Título</label>
                <input
                    className="input"
                    id="titulo"
                    type="text"
                    placeholder="Título"
                    required
                />
            </div>
            <div className="form-group">
                <label className="label">Descripcion</label>
                <textarea
                    className="input"
                    id="descripcion"
                    placeholder="Descripción"
                    required
                />
            </div>
            <div className="form-group">
                <label className="label">URL de la imagen</label>
                <input
                    className="input"
                    id="descripcion"
                    placeholder="URL"
                    type="text"
                    required
                />
            </div>
            <p className="text-red-500 text-xs italic">
                Título y descripción obligatorios.
            </p>
            <div className="flex items-center justify-between">
                <button
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    onClick={() => onClose(false)}
                >
                    Cancelar
                </button>
                <button className="button button-blue" type="button">
                    Crear
                </button>
            </div>
        </form>
    );
};

export default Modal;
