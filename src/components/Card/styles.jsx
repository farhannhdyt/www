import styled from 'styled-components'

export const StyledCard = styled.div`
  border: 1px solid ${(props) => props.theme.primaryBorderColor};
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  transition: 0.2s;

  &:hover {
    box-shadow: 10px 10px 0 ${(props) => props.theme.primaryTextColor};
  }

  h2 {
    font-weight: 800;
  }

  a {
    font-size: 25px;
    color: ${(props) => props.theme.primaryTextColor};
  }
`