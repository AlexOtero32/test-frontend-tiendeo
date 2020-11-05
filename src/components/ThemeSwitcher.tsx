import { connect, ConnectedProps } from 'react-redux';
import React from 'react';
import { Dispatch } from 'redux';
import { UIState, switchThemeAction } from '../redux/ui';
import { Themes } from '../redux/ui/constants';

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {

    const {buttons, activeTheme, switchTheme} = props;

    return <div>
        {buttons.map(button => (
            <button
                onClick={() => {
                    switchTheme(button)
                }}
                className={'button button-blue'}
                key={button}
            >
                {button}
            </button>
        ))}

        <p style={{color: 'red'}}>{activeTheme}</p>
    </div>;
}

const mapStateToProps = (state: {ui: UIState}) => {
    return {
        activeTheme: state.ui.activeTheme
    }
}

const mapDispatchToProps = (dispatchEvent: Dispatch) => {
    return {
        switchTheme: (theme: Themes) => dispatchEvent(switchThemeAction(theme))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ThemeSwitcherProps = PropsFromRedux & {
    buttons: Array<Themes>
}

export default connector(ThemeSwitcher);