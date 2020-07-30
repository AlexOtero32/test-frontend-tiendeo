import React from 'react';
import Droprown from './Dropdown';
import Modal from './Modal';
import { useOutsideAlerter } from '../lib/helpers';

const Header = () => {
    const dropdownRef = React.useRef(null);
    const modalRef = React.useRef(null);

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isDroprownOpen, setIsDropdownOpen] = React.useState(false);

    useOutsideAlerter(dropdownRef, setIsDropdownOpen);
    useOutsideAlerter(modalRef, setIsModalOpen);

    return (
        <header className="header">
            <div className="container flex justify-between">
                <div>
                    <button
                        className="button button-blue"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Nueva tarjeta
                    </button>
                    {isModalOpen && (
                        <div className="fixed flex justify-center items-center w-screen h-screen bg-gray-300 top-0 left-0 bg-opacity-50">
                            <div ref={modalRef}>
                                <Modal onClose={setIsModalOpen} />
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

export default Header;
