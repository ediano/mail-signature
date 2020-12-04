import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    width: 700px;
    margin: 40px auto 0;
  }
  a {
    font-size: 24px;
    color: ${props => props.theme.colors.primary};
    width: 700px;
    text-align: center;
    margin: 40px auto 0;
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }
  p {
    font-size: 24px;
    line-height: 32px;
    width: 700px;
    margin: 40px auto 0;
  }
`