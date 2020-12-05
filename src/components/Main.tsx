import { useState } from 'react'
import {
  FaUserCircle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLink
} from 'react-icons/fa'
import Input from '../components/Input'

import {
  Container,
  Content,
  Aside,
  MainContent
} from '../styles/components/Main'

const Main = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [twitter, setTwitter] = useState('')
  const [facebook, setFacebook] = useState('')
  const [github, setGithub] = useState('')
  const [link, setLink] = useState('')

  return (
    <Container>
      <Content>
        <Aside>
          <div className="user">
            <FaUserCircle size="3rem" color="#fff" />

            <div className="input-block">
              <label htmlFor="user">Nome completo</label>
              <input
                type="text"
                name="user"
                id="user"
                placeholder="Nome"
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="user">Imagem de perfil</label>
              <input
                type="text"
                name="avatar"
                id="avatar"
                placeholder="exemplo: https://i.imgur.com/***.png"
                onChange={e => setAvatar(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="user">Telefone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="00 9 1234-5678"
                onChange={e => setPhone(e.target.value)}
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
          <div className="template">Enim amet cupidatat et minim et.</div>

          <div className="field-of-vision">
            <span>Resultado</span>

            <p contentEditable>
              <div className="profile">
                <div>
                  {avatar && <img src={avatar} />}
                  {name && <h1>{name}</h1>}
                </div>

                {phone && <span>Phone: {phone}</span>}
              </div>

              <div className="link-social">
                {linkedin && (
                  <a
                    href={`https://www.linkedin.com/in/${linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} />
                  </a>
                )}

                {twitter && (
                  <a
                    href={`https://twitter.com/${twitter}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} />
                  </a>
                )}

                {facebook && (
                  <a
                    href={`https://www.facebook.com/${facebook}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} />
                  </a>
                )}

                {github && (
                  <a
                    href={`https://github.com/${github}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} />
                  </a>
                )}

                {link && (
                  <a
                    href={`https://${link || '...'}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={link} />
                  </a>
                )}
              </div>
            </p>
          </div>

          <div className="tips">
            <span>Dicas</span>

            <p>
              Ad enim dolore nostrud aliqua fugiat enim cillum do consequat
              cupidatat laborum. Sunt excepteur aliquip fugiat nisi est non.
              Pariatur enim ullamco ullamco ut esse enim. Anim excepteur commodo
              consectetur laborum sint dolore incididunt in cupidatat et ut
              eiusmod sunt enim. Exercitation reprehenderit consequat commodo
              magna quis sit sint aliquip non tempor aliquip in enim ipsum.
            </p>
          </div>
        </MainContent>
      </Content>
    </Container>
  )
}

export default Main
