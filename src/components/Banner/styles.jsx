import styled from 'styled-components'

export const StyledBanner = styled.section`
  margin-top: 50px;

  h1 {
    font-size: 40px;
    font-weight: 800;
  }

  span {
    display: inline-block;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 700;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.primaryGradientColor},
      ${(props) => props.theme.secondaryGradientColor}
    );
  }
`
