import { StyledAbout, StyledAboutDesc } from './styles'
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub
} from 'react-icons/io5'
import { SiGit, SiStyledcomponents } from 'react-icons/si'
import { StyledTechFlex, StyledTechItem } from './styles'

const About = () => {
  return (
    <StyledAbout>
      <StyledAboutDesc>
        <h2>Greetings</h2>
        <p>
          I'm Farhan Nur Hidayat. I'm a self-taught front-end developer based in Bandung, Indonesia.
          I’m teaching myself about programming especially in front-end web development.
        </p>

        <p>
          I started my journey to teach myself about web development starting from learning the
          basics of HTML, CSS, and JavaScript. I studied it on various platforms, ranging from
          youtube, udemy and many more, and was also assisted by roadmap.sh so that what I learned
          about front-end development was structured and directed.
        </p>

        <h2 className="second-title">Now</h2>
        <p>
          Focus on learning and building. Here are the list of front-end stacks that I'm currently
          learning.
        </p>

        <StyledTechFlex>
          <StyledTechItem>
            <IoLogoHtml5 />
            <span>HTML5</span>
          </StyledTechItem>
          <StyledTechItem>
            <IoLogoCss3 />
            <span>CSS3</span>
          </StyledTechItem>
          <StyledTechItem>
            <IoLogoJavascript />
            <span>JavaScript</span>
          </StyledTechItem>
          <StyledTechItem>
            <IoLogoReact />
            <span>React.js</span>
          </StyledTechItem>
          <StyledTechItem>
            <IoLogoGithub />
            <span>Github</span>
          </StyledTechItem>
          <StyledTechItem>
            <SiGit />
            <span>Git</span>
          </StyledTechItem>
          <StyledTechItem>
            <SiStyledcomponents />
            <span>Styled Components</span>
          </StyledTechItem>
        </StyledTechFlex>
      </StyledAboutDesc>

      <div>
        <div></div>
      </div>
    </StyledAbout>
  )
}

export { About }
