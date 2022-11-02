import { StyledNotFound } from './styles'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <span>Sorry we couldn't find this page.</span>

      <Link to="/">Return Home</Link>
    </StyledNotFound>
  )
}

export { NotFound }
