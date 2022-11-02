import { useState } from 'react'
import { Banner, Card, DotBreak } from '../../components'
import { StyledFeaturedWorks, StyledGrid } from './styles'
import { projects } from '../../data/projects'

const Home = () => {
  const handleFilteredProjects = projects.filter((project) => project.id <= 4)

  return (
    <section>
      <Banner />

      <StyledFeaturedWorks>
        <h2 className="featured-title">Featured Works</h2>
        <StyledGrid>
          {handleFilteredProjects.map((filteredProject) => (
            <Card
              title={filteredProject.title}
              desc={filteredProject.desc}
              github={filteredProject.github}
            />
          ))}
        </StyledGrid>
      </StyledFeaturedWorks>
    </section>
  )
}

export { Home }
