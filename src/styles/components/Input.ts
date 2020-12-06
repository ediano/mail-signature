import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    flex-shrink: 0;
  }

  div {
    width: 100%;

    label {
      margin-bottom: 0.5rem;
      width: 100%;
      display: block;
    }

    input {
      width: 100%;
      display: block;
      height: 2rem;
      border-radius: 0.5rem;
      padding: 0 0.5rem;
      font-size: 1.1rem;
      color: #444;
    }
  }
`
