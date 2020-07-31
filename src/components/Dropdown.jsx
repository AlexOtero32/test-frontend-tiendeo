import React from 'react';
import { orderBy } from '../redux/cards/actions';
import { connect } from 'react-redux';

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <button
                className="dropdown-item"
                onClick={() => props.order('newest')}
            >
                Más recientes
            </button>
            <button
                className="dropdown-item"
                onClick={() => props.order('oldest')}
            >
                Más antiguos
            </button>
            <button className="dropdown-item" onClick={() => props.order('az')}>
                A-Z
            </button>
            <button className="dropdown-item" onClick={() => props.order('za')}>
                Z-A
            </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    order: (order) => dispatch(orderBy(order)),
});

export default connect(null, mapDispatchToProps)(Dropdown);
