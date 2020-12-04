import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Next Template TypeScript</h1>

      <a
        href="https://github.com/ediano/next-template-typescript"
        target="_black"
      >
        Clone Repo GitHub
      </a>

      <p>
        Incididunt ut sit esse veniam laboris deserunt enim sit adipisicing
        magna culpa esse. Sit exercitation adipisicing occaecat exercitation
        anim cupidatat ipsum irure est ut qui esse. Officia sit ex esse
        occaecat. Ea aute non laborum ullamco mollit cupidatat non eiusmod
        laborum.
      </p>
    </Container>
  )
}

export default Home
