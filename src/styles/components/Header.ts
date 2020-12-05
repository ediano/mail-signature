import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  background: linear-gradient(217deg, #0ccff2, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #00e68a, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #0cf214, rgba(0, 0, 255, 0) 70.71%);

  box-shadow: 0 0 12px 4px #0ccff2;

  padding: 25px 0;

  border-bottom: 1px solid rgb(255 255 255 / 10%);
`

export const Content = styled.div`
  max-width: 992px;
  width: 90%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  h1 {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
    h1 {
      margin-right: 2rem;
    }
  }
`
