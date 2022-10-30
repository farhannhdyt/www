import styled from 'styled-components'
import NatureImg from '../../assets/nature.jpg'

export const StyledBanner = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${NatureImg});
  background-position: center;
  background-size: cover;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 50px;
    font-weight: 800;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme.primaryGradientColor},
      ${(props) => props.theme.secondaryGradientColor}
    );
  }

  span {
    font-size: 23px;
    color: ${(props) => props.theme.primaryTextColor};
    font-weight: 500;
    margin-bottom: 15px;
    display: inline-block;
  }

  p {
    color: ${(props) => props.theme.primaryTextColor};
  }
`
