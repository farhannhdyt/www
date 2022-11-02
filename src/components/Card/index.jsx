import { IoLogoGithub } from 'react-icons/io5'
import { StyledCard } from './styles'

const Card = () => {
  return (
    <StyledCard>
      <h2>Covid-19 Tracker</h2>

      <p>
        covid-19 tracker app contains data that confirmed, recovered, and died in each country
        caused by a coronavirus.
      </p>

      <a href="#">
        <IoLogoGithub />
      </a>
    </StyledCard>
  )
}

export { Card }
