import React from 'react';
import { connect } from 'react-redux';

import Droprown from './Dropdown';
import Modal from './Modal';
import { useOutsideAlerter, isObjectEmpty } from '../lib/helpers';

import store from '../redux/store';
import { toggleModal as toggleModalActionCreator } from '../redux/ui';
import { editCard, createCard } from '../redux/cards/actions';

function create(values) {
    store.dispatch(createCard(values));
    store.dispatch(toggleModalActionCreator());
}

function edit(values) {
    store.dispatch(editCard(values));
    store.dispatch(toggleModalActionCreator());
}

const Header = (props) => {
    const { isModalOpen, toggleModal, editing, dispatch } = props;

    const dropdownRef = React.useRef(null);
    const modalRef = React.useRef(null);

    const [isDroprownOpen, setIsDropdownOpen] = React.useState(false);

    useOutsideAlerter(dropdownRef, setIsDropdownOpen);
    useOutsideAlerter(modalRef, toggleModal);

    return (
        <header className="header">
            <div className="container flex justify-between">
                <div>
                    <button
                        className="button button-blue"
                        onClick={toggleModal}
                    >
                        Nueva tarjeta
                    </button>
                    {isModalOpen && (
                        <div className="overlay">
                            <div ref={modalRef}>
                                <Modal
                                    onSubmit={editing ? edit : create}
                                    onClose={() => dispatch(toggleModal())}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div ref={dropdownRef}>
                    <button
                        className="button button-border"
                        onClick={() => setIsDropdownOpen(true)}
                    >
                        Ordenar por
                    </button>
                    {isDroprownOpen && <Droprown />}
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.ui.isModalOpen,
        editing: !isObjectEmpty(state.cards.editingCard),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => dispatch(toggleModalActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
