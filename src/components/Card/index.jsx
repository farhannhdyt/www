import { IoLogoGithub } from 'react-icons/io5'
import { StyledCard } from './styles'
import { Link } from 'react-router-dom'

const Card = ({ title, desc, github }) => {
  return (
    <StyledCard>
      <h2>{title}</h2>

      <p>{desc}</p>

      <Link to={github} target="_blank" rel="noopener noreferrer">
        <IoLogoGithub />
      </Link>
    </StyledCard>
  )
}

export { Card }
