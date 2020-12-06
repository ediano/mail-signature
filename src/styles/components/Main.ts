import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.section`
  width: 100%;
  background: ${shade(0.2, '#666')};
  color: #fff;
  padding: 30px 0;
`

export const Content = styled.div`
  max-width: 992px;
  width: 90%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Aside = styled.aside`
  .user {
    width: 100%;

    padding-bottom: 1rem;
    margin-bottom: 1rem;

    text-align: center;

    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

    svg {
      flex-shrink: 0;

      margin-bottom: 0.5rem;
    }

    .input-block + .input-block {
      margin-top: 1rem;
    }

    .input-block label {
      text-align: left;
      display: block;
    }

    .input-block input {
      margin-top: 0.25rem;
      border-radius: 0.5rem;
      height: 2rem;
      padding: 0 0.5rem;
      width: 100%;
      color: #444;
    }
  }
`

export const MainContent = styled.main`
  > div {
    width: 100%;
    padding: 1rem;
  }

  > div + div {
    margin-top: 2rem;
  }

  .field-of-vision {
    width: 100%;

    > span {
      margin-bottom: 0.5rem;
      display: block;
      font-weight: 600;
      font-size: 1.5rem;
    }

    .body-profile {
      background: #fff;
      width: 100%;
      padding: 1rem;
      border: 1px solid #fff;
      border-radius: 0.5rem;
      font-weight: 400;
    }

    .profile {
      width: 100%;
      display: flex;
      align-items: center;

      border-bottom: 1px solid;
      padding-bottom: 1rem;

      color: #444;

      img {
        width: 52px;
        height: 52px;
        margin-right: 0.5rem;
        border-radius: 50%;
      }
    }

    .link-social {
      width: 100%;
      display: flex;
      align-items: center;

      padding-top: 1rem;

      img {
        width: 32px;
        height: 32px;
      }

      a + a {
        margin-left: 0.5rem;
      }
    }
  }

  .tips {
    span {
      margin-bottom: 0.5rem;
      display: block;
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`
