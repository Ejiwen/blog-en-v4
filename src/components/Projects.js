import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        }
      }
    }
  }
  
  `)

  const projects = data?.allWpProject ?.edges ?? {}

    var settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <div className="projects-wrap projects">
            <div className="projects__header">
            <StaticImage
            src="../../static/images/workSectionPic.svg"
            alt="Projects Intro"
            />
          <h3> Recent Works </h3>
        </div>

            <Slider {...settings}>
             
              {
                projects.map((project) => (
                <div> 
                  <div> {project.node.title} </div>
                  <div> <img src={project.node.project_screenshot.pageBannerBackgroundImage.sourceUrl} /></div>
                </div>
                )
                  
                )
              }
              
            </Slider>
        
        </div>
      );
}

export default Projects