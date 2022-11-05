import styled from 'styled-components'

export const StyledFeaturedWorks = styled.div`
  margin-top: 5rem;

  h2.featured-title {
    margin-bottom: 30px;
    font-size: 30px;
  }

  @media screen and (max-width: 600px) {
    h2.featured-title {
      font-size: 25px;
    }
  }
`
