import { Banner, Card } from '../../components'
import { IoLogoGithub } from 'react-icons/io5'
import { StyledGrid } from './styles'

const Home = () => {
  return (
    <section>
      <Banner />

      <StyledGrid>
        <Card />
        <Card />
        <Card />
        <Card />
      </StyledGrid>
    </section>
  )
}

export { Home }
