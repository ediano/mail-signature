import styled from 'styled-components'
import { shade } from 'polished'

export const Main = styled.section`
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

    .input-checkbox-block {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 1rem;

      label {
        font-weight: 400;
      }

      input {
        margin-top: 0.25rem;
        border-radius: 0.5rem;
        height: 2rem;
        padding: 0 0.5rem;
        width: 32px;
        color: #444;
      }
    }
  }

  .social .input-block + .input-block {
    padding-top: 1rem;
    margin-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }
`

export const MainContent = styled.main`
  > div {
    width: 100%;
    padding: 1rem;
  }

  .template {
    width: 100%;

    > span {
      margin-bottom: 0.5rem;
      display: block;
      font-weight: 600;
      font-size: 1.5rem;
    }

    > div + div {
      margin-top: 1rem;
    }

    > div {
      display: flex;
      grid-gap: 1rem;

      input {
        width: 100%;
      }
    }
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
      width: 100%;
      padding: 1rem;
      border: 1px solid #fff;
      border-radius: 0.5rem;
      font-weight: 400;
    }

    .profile {
      width: 100%;

      > div {
        display: flex;
        align-items: center;

        img {
          width: 80px;
          height: 80px;
          margin-right: 0.5rem;
          border-radius: 50%;
        }
      }

      .description {
        margin-top: 1rem;
      }
    }

    .link-social {
      width: 100%;
      display: flex;
      align-items: center;

      margin-top: 1rem;
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
      color: #fff;
      margin-bottom: 0.5rem;
      display: block;
      font-weight: 600;
      font-size: 1.5rem;
    }

    ul {
      background: #fff;
      padding: 1rem;
    }

    ul li {
      display: block;
      font-weight: 400;
      color: #444;

      & + li {
        margin-top: 1rem;
      }

      a {
        margin-right: 0.5rem;
        color: #444;
        font-weight: 300;
        text-decoration: underline;
      }
    }
  }
`
