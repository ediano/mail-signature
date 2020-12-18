import { useState } from 'react'
import Head from 'next/head'
import {
  FaUserCircle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink
} from 'react-icons/fa'

import Header from '../components/Header'
import Input from '../components/Input'
import Footer from '../components/Footer'

import { Main, Content, Aside, MainContent } from '../styles/pages/Home'

const Home = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [twitter, setTwitter] = useState('')
  const [facebook, setFacebook] = useState('')
  const [github, setGithub] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState(false)

  const [background, setBackground] = useState('#fff')
  const [colorName, setColorName] = useState('#444')
  const [colorDetails, setColorDetails] = useState('#444')
  const [colorDescription, setColorDescription] = useState('#444')
  const [colorBar, setColorBar] = useState('#444')

  return (
    <>
      <Head>
        <title>Assinatura de e-mail</title>
      </Head>

      <Header />

      <Main>
        <Content>
          <Aside>
            <div className="user">
              <FaUserCircle size="3rem" color="#fff" />

              <div className="input-block">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="avatar">Imagem de perfil</label>
                <input
                  type="text"
                  name="avatar"
                  id="avatar"
                  placeholder="exemplo: https://i.imgur.com/***.png"
                  onChange={e => setAvatar(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="phone">Telefone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="00 9 1234-5678"
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <div className="input-checkbox-block">
                <label htmlFor="description">Add descrição</label>
                <input
                  type="checkbox"
                  name="description"
                  id="description"
                  onChange={e => setDescription(!!e.target.checked)}
                />
              </div>
            </div>

            <div className="social">
              <Input
                name="linkedin"
                label={`https://www.linkedin.com/in/${linkedin}`}
                ico={FaLinkedin}
                onChange={e => setLinkedin(e.target.value)}
              />

              <Input
                name="twitter"
                label={`https://twitter.com/${twitter}`}
                ico={FaTwitter}
                onChange={e => setTwitter(e.target.value)}
              />

              <Input
                name="facebook"
                label={`https://www.facebook.com/${facebook}`}
                ico={FaFacebook}
                onChange={e => setFacebook(e.target.value)}
              />

              <Input
                name="github"
                label={`https://github.com/${github}`}
                ico={FaGithub}
                onChange={e => setGithub(e.target.value)}
              />

              <Input
                name="link"
                label={`https://${link || '...'}`}
                ico={FaLink}
                onChange={e => setLink(e.target.value)}
              />
            </div>
          </Aside>

          <MainContent>
            <div className="template">
              <span>Selecione as cores</span>

              <div>
                <Input
                  type="color"
                  name="color-background"
                  id="color-background"
                  label="Fundo"
                  onChange={e => setBackground(e.target.value)}
                />

                <Input
                  type="color"
                  name="color-name"
                  id="color-name"
                  label="Nome"
                  onChange={e => setColorName(e.target.value)}
                />

                <Input
                  type="color"
                  name="color-details"
                  id="color-details"
                  label="Detalhe"
                  onChange={e => setColorDetails(e.target.value)}
                />

                <Input
                  type="color"
                  name="color-description"
                  id="color-description"
                  label="Descrição"
                  onChange={e => setColorDescription(e.target.value)}
                />

                <Input
                  type="color"
                  name="color-bar"
                  id="color-bar"
                  label="Barra"
                  onChange={e => setColorBar(e.target.value)}
                />
              </div>
            </div>

            <div className="field-of-vision">
              <span>Resultado</span>

              <div className="body-profile" style={{ background: background }}>
                <div className="profile">
                  <div>
                    {avatar && <img src={avatar} alt={name} />}

                    <div>
                      {name && <h1 style={{ color: colorName }}>{name}</h1>}
                      {phone && (
                        <span style={{ color: colorDetails }}>
                          Phone: {phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {description && (
                    <div
                      contentEditable
                      className="description"
                      style={{ color: colorDescription }}
                    >
                      Clique aqui para editar a descrição!
                    </div>
                  )}
                </div>

                {(linkedin || twitter || facebook || github || link) && (
                  <div
                    className="link-social"
                    style={{
                      borderTop: `1px solid ${colorBar}`
                    }}
                  >
                    {linkedin && (
                      <a
                        href={`https://www.linkedin.com/in/${linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://i.imgur.com/oFS6ca6.png"
                          alt={`linkedin ${name}`}
                        />
                      </a>
                    )}

                    {twitter && (
                      <a
                        href={`https://twitter.com/${twitter}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://i.imgur.com/0ZcPdgV.png"
                          alt={`twitter ${name}`}
                        />
                      </a>
                    )}

                    {facebook && (
                      <a
                        href={`https://www.facebook.com/${facebook}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://i.imgur.com/TMou1Ap.png"
                          alt={`facebook ${name}`}
                        />
                      </a>
                    )}

                    {github && (
                      <a
                        href={`https://github.com/${github}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://i.imgur.com/7ud4NVq.png"
                          alt={`github ${name}`}
                        />
                      </a>
                    )}

                    {link && (
                      <a
                        href={`https://${link || '...'}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://i.imgur.com/ZYHWrxL.png"
                          alt={`site ${name}`}
                        />
                      </a>
                    )}

                    <br />
                  </div>
                )}
              </div>
            </div>

            <div className="tips">
              <span>Dicas</span>

              <ul>
                <li>
                  <a
                    href="https://color.adobe.com/pt/create/color-wheel"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Gerador de cor hexadecimal
                  </a>
                  Abobe
                </li>

                <li>
                  <a
                    href="https://materializecss.com/color.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Paleta de cores
                  </a>
                  Materialize CSS
                </li>
              </ul>
            </div>
          </MainContent>
        </Content>
      </Main>

      <Footer />
    </>
  )
}

export default Home
