import { ActionTypes, Themes } from "./constants";

interface ToggleModal {
  type: typeof ActionTypes.TOGGLE_MODAL;
}
interface SwitchTheme {
  type: typeof ActionTypes.SWITCH_THEME;
  theme: Themes;
}

export type UIActions = ToggleModal | SwitchTheme;
