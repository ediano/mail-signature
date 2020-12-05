import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import Header from '../components/Header'
import Main from '../components/Main'

const Home = () => {
  return (
    <>
      <Head>
        <title>Assinaturas de e-mail</title>
      </Head>

      <Container>
        <Header />

        <Main />

        <footer></footer>
      </Container>
    </>
  )
}

export default Home
