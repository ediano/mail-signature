import styled from 'styled-components'

export const Container = styled.footer`
  background: #0ccff2;

  > div {
    max-width: 992px;
    width: 90%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 30px 0;

    font-weight: 600;

    &,
    a {
      color: #fff;
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`
