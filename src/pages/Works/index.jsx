import { projects } from '../../data/projects'
import { Card, Grid } from '../../components'
import { StyledWorks } from './styles'

const Works = () => {
  console.log(projects)
  return (
    <StyledWorks>
      <h1>Works</h1>
      <span>Projects that I build with my current knowledge.</span>

      <Grid className="works-grid-wrapper">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            desc={project.desc}
            github={project.github}
          />
        ))}
      </Grid>

      <span>
        See all my projects on <a href="#">Github</a>
      </span>
    </StyledWorks>
  )
}

export { Works }
