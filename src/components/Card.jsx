import React from 'react';

import { MdModeEdit, MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import {
    deleteCard as deleteCardActionCreator,
    setEditingCard,
} from '../redux/cards/actions';
import { toggleModal } from '../redux/ui';

const Card = (props) => {
    const { titulo, descripcion, url, id, deleteCard, editCard } = props;
    return (
        <div className="card">
            <div className="image-box">
                <img
                    className="w-full"
                    src={url || 'https://placehold.it/400x200'}
                    alt={titulo}
                />
                <div className="button-box">
                    <button
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2"
                        onClick={() =>
                            editCard({ titulo, descripcion, url, id })
                        }
                    >
                        {<MdModeEdit />}
                    </button>
                    <button
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-2"
                        onClick={() => deleteCard(id)}
                    >
                        {<MdDelete />}
                    </button>
                </div>
            </div>
            <div className="px-6 py-4 w-full">
                <div className="font-bold text-xl mb-2 text-gray-600">
                    {titulo}
                </div>
                <p className="text-gray-700 text-base">{descripcion}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatchEvent) => {
    return {
        editCard: (card) => {
            dispatchEvent(setEditingCard(card));
            dispatchEvent(toggleModal());
        },
        deleteCard: (id) => dispatchEvent(deleteCardActionCreator(id)),
    };
};

export default connect(null, mapDispatchToProps)(Card);
