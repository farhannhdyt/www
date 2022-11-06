import { StyledAbout, StyledAboutDesc } from './styles'
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiReactjsFill,
  RiGithubFill,
  RiGitBranchFill
} from 'react-icons/ri'
import { StyledTechFlex } from './styles'
import { StyledTechItem } from './styles'

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
            <RiHtml5Fill />

            <span>HTML</span>
          </StyledTechItem>
          <StyledTechItem>
            <RiCss3Fill />

            <span>CSS</span>
          </StyledTechItem>
          <StyledTechItem>
            <RiHtml5Fill />

            <span>JavaScript</span>
          </StyledTechItem>
          <StyledTechItem>
            <RiReactjsFill />

            <span>React</span>
          </StyledTechItem>
          <StyledTechItem>
            <RiGithubFill />

            <span>Github</span>
          </StyledTechItem>
          <StyledTechItem>
            <RiGitBranchFill />

            <span>Git</span>
          </StyledTechItem>
        </StyledTechFlex>
      </StyledAboutDesc>
    </StyledAbout>
  )
}

export { About }
