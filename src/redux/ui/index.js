export const TOGGLE_MODAL = 'toggle_modal';

const initialState = {
    isModalOpen: false,
};

export function toggleModal() {
    return { type: TOGGLE_MODAL };
}

export default (state = initialState, action) => {
    if (action.type === TOGGLE_MODAL) {
        return { isModalOpen: !state.isModalOpen };
    }

    return state;
};
