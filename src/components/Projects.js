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
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1

    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1

    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,

  };
  return (
    <div className="projects-wrap">
      <ExperienceBttomBg className="topExpBg"></ExperienceBttomBg>
      <div className="projects__header">
        <StaticImage
          src="../../static/images/workSectionPic.svg"
          alt="Projects Intro"
        />
        <h3> Recent Works </h3>
      </div>
      <div className='projects'>
        <Slider {...settings}>

          {
            projects.map((project) => (
              <div className="projects__slider">

                <div className='slider-items'>
                  <div className='slider-images'>
                    <div>
                      <img src={project.node.project_screenshot.pageBannerBackgroundImage.sourceUrl} width="300px" alt="" />
                    </div>
                    <div className='links'>
                      {/* <img src={project.node.featuredImage.node.sourceUrl} width="300px" alt="" /> */}
                      <Link to={project.node.projectInfo.projectLink} >Demo</Link>

                      <Link
                        to={project.node.projectInfo.githubLink}
                        className={project.node.projectInfo.githubLink ? 'exist' : 'notExist'} > <span>Code</span> </Link>
                    </div>
                  </div>

                  <div className='slider-details'>
                    <h3>{project.node.title}</h3>
                    <p>{parse(project.node.content)}</p>
                  </div>
                </div>

              </div>

            )
            )
          }
        </Slider>
      </div>
      <ExperienceBttomBg ></ExperienceBttomBg>
    </div>
  );
}

export default Projects