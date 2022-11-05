import { Banner, Card, Grid } from '../../components'
import { StyledFeaturedWorks } from './styles'
import { projects } from '../../data/projects'

const Home = () => {
  const handleFilteredProjects = projects.filter((project) => project.id <= 4)

  return (
    <section>
      <Banner />

      <StyledFeaturedWorks>
        <h2 className="featured-title">Featured Works</h2>
        <Grid>
          {handleFilteredProjects.map((filteredProject) => (
            <Card
              title={filteredProject.title}
              desc={filteredProject.desc}
              github={filteredProject.github}
            />
          ))}
        </Grid>
      </StyledFeaturedWorks>
    </section>
  )
}

export { Home }
