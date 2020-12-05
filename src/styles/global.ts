import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  background: ${props => props.theme.colors.background};
}

body {
  font-weight: 300
}

body,
input,
textarea,
button,
code {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
`
