import { UIActions } from "./actions";
import { ActionTypes, Themes } from "./constants";

export interface UIState {
  isModalOpen: boolean;
  activeTheme: Themes;
}

const initialState: UIState = {
  isModalOpen: false,
  activeTheme: "light",
};

export function toggleModal(): UIActions {
  return { type: ActionTypes.TOGGLE_MODAL };
}

export function switchThemeAction(theme: Themes): UIActions {
  return { type: ActionTypes.SWITCH_THEME, theme };
}

export default (state = initialState, action: UIActions): UIState => {
  switch (action.type) {
    case ActionTypes.TOGGLE_MODAL:
      return Object.assign(state, { isModalOpen: !state.isModalOpen });
    case ActionTypes.SWITCH_THEME:
      return Object.assign(state, { activeTheme: action.theme });
    default:
      return state;
  }
};
