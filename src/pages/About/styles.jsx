import styled from 'styled-components'

export const StyledAbout = styled.section`
  margin: 50px 0;
`

export const StyledAboutDesc = styled.div`
  margin-top: 50px;

  h2 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  h2.second-title {
    margin-top: 50px;
  }

  p {
    margin: 15px 0;
  }
`

export const StyledTechFlex = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const StyledTechItem = styled.div`
  border: 1px solid ${(props) => props.theme.primaryBorderColor};
  padding: 12px 30px;
  color: ${(props) => props.theme.primaryTextColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    border: 1px solid ${(props) => props.theme.primaryTextColor};
  }

  svg {
    width: 1.5em;
    height: 1.5em;
  }
`
