import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 2px 0 ${(props) => props.theme.tomato};
}

body {
    background: ${(props) => props.theme['midnightblue-900']};
    color: ${(props) => props.theme['midnightblue-300']}};
    --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`
