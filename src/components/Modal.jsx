import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { clearEditingCard } from '../redux/cards/actions';
import {
    renderInputField,
    renderTextAreaField,
    isObjectEmpty,
} from '../lib/helpers';
import { toggleModal } from '../redux/ui';
import { connect } from 'react-redux';

function validate(values) {
    const errors = {};

    if (!values.titulo) {
        errors.titulo = 'El título es obligatorio.';
    }

    if (!values.descripcion) {
        errors.descripcion = 'La descripción es obligatoria';
    }

    const regexURL = new RegExp(
        '(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})'
    );

    if (values.url && !regexURL.test(values.url)) {
        errors.url = 'La URL no es válida';
    }

    return errors;
}

const Modal = (props) => {
    return (
        <form className="form" onSubmit={props.handleSubmit} method="POST">
            <Field
                name="titulo"
                component={renderInputField}
                type="text"
                label="Título"
            />
            <Field
                name="descripcion"
                component={renderTextAreaField}
                label="Descripción"
            />
            <Field
                name="url"
                component={renderInputField}
                type="text"
                label="URL"
                placeholder="https://ejemplo.com/imagen.png"
            />
            <div className="flex items-center justify-between">
                <button
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    onClick={() => {
                        props.reset();
                        props.dispatch(toggleModal());
                        props.dispatch(clearEditingCard());
                    }}
                >
                    Cancelar
                </button>
                <button className="button button-blue" type="submit">
                    Guardar
                </button>
            </div>
        </form>
    );
};

const ReduxFormModal = reduxForm({
    form: 'modal',
    validate,
})(Modal);

const mapStateToProps = (state) => {
    return {
        initialValues:
            // Comprobar si editingCard es un objeto vacío
            isObjectEmpty(state.cards.editingCard)
                ? {}
                : state.cards.editingCard,
    };
};

export default connect(mapStateToProps)(ReduxFormModal);
