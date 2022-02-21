import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled"
import parse from "html-react-parser"


const ExperienceBttomBg = styled.div`
  background: url("sectionmask3.svg") no-repeat;
  background-size: cover;
  height: 72px;
`

const Projects = () => {

  const data = useStaticQuery(graphql`
    query GetProjects {
      allWpProject {
        edges {
          node {
            title
            content
            project_screenshot {
              pageBannerBackgroundImage {
                sourceUrl
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            projectInfo {
              githubLink
              projectLink
            }
          }
        }
      }
    }
  `)

  const projects = data?.allWpProject?.edges ?? {}

  var settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // autoplay: true,
    // autoplaySpeed: 1500,
  };

  return (
    <div className="projects-wrap" id="projects">
      <ExperienceBttomBg className="topExpBg"></ExperienceBttomBg>
      <div className="projects__header">
        <StaticImage
          src="../../static/images/workSectionPic.svg"
          alt="Projects Intro"
        />
        <h3> Recent Projects </h3>
      </div>
      <div className='projects'>
        <Slider {...settings}>

          {
            projects.map((project) => (
              <div className="projects__slider">

                <div className='slider-items'>
                  <div className='slider-images'>
                    <div className='screenshot'>
                      <img src={project.node.project_screenshot.pageBannerBackgroundImage.sourceUrl.replace(/^http:\/\//i, 'https://')} alt="Project Miniature" />
                    </div>
                    <div className='links'>
                      <Link to={project.node.projectInfo.projectLink} target='_blank' >Live</Link>
                      <Link
                        to={project.node.projectInfo.githubLink}
                        className={project.node.projectInfo.githubLink ? 'exist' : 'notExist'}
                        target='_blank'> <span>Code</span> </Link>
                    </div>
                  </div>

                  <div className='slider-details'>
                    <h3>{project.node.title}</h3>
                    <p>{parse(project.node.content)}</p>
                  </div>
                  <div className='slider-logo'><img src={project.node.featuredImage.node.sourceUrl.replace(/^http:\/\//i, 'https://')} width="200" alt="Project Logo" /></div>
                </div>

              </div>

            )
            )
          }
        </Slider>
      </div >
      <ExperienceBttomBg ></ExperienceBttomBg>
    </div >
  );
}

export default Projects