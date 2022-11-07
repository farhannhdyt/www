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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`

export const StyledTechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: ${(props) => props.theme.primaryTextColor};
    font-size: 15px;
  }

  svg {
    color: ${(props) => props.theme.primaryTextColor};
    width: 1.5em;
    height: 1.5em;
  }
`
