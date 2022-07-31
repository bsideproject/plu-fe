import { GlobalStyle } from '@/theme';
import { TYPOGRAPHY, Typography } from '@/ui/Typography/types';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, Dispatch, useContext, useReducer } from 'react';

declare module '@emotion/react' {
  export interface Theme {
    typography: Typography;
  }
}

interface Theme {
  typography: Typography;
}

type Action = {};

type ThemeDispatch = Dispatch<Action>;

const ThemeStateContext = createContext<Theme | null>(null);
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null);

interface Props {
  children: React.ReactNode;
}

const reducer = (state: Theme, action: Action): Theme => {
  return state;
};

const ThemeProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    typography: TYPOGRAPHY,
  });

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <EmotionThemeProvider theme={state}>
          <GlobalStyle />
          {children}
        </EmotionThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export default ThemeProvider;

export function useThemeState() {
  const state = useContext(ThemeStateContext);

  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);

  return dispatch;
}
