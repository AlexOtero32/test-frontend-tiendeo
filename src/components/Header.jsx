import React from 'react';
import { connect } from 'react-redux';

import Droprown from './Dropdown';
import Modal from './Modal';
import { useOutsideAlerter } from '../lib/helpers';

import store from '../redux/store';
import { toggleModal as toggleModalActionCreator } from '../redux/ui';

const Header = (props) => {
    const { isModalOpen, toggleModal } = props;

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
                        <div className="fixed flex justify-center items-center w-screen h-screen bg-gray-300 top-0 left-0 bg-opacity-50">
                            <div ref={modalRef}>
                                <Modal
                                    onClose={() =>
                                        store.dispatch(toggleModal())
                                    }
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
    return { isModalOpen: state.ui.isModalOpen };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => dispatch(toggleModalActionCreator()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
