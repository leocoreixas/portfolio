import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const skills = [
    {
      id: 3,
      name: "Angular"
    },
    {
      id: 4,
      name: ".NET"
    },
    {
      id: 5,
      name: "Node.js"
    },
    {
      id: 6,
      name: "DBMS"
    },
    {
      id: 7,
      name: "Relational Databases"
    },
    {
      id: 8,
      name: "NoSQL Databases"
    },
    {
      id: 9,
      name: "CI/CD"
    },
    {
      id: 11,
      name: "Azure DevOps"
    },
    {
      id: 12,
      name: "AWS"
    },
    {
      id: 13,
      name: "Scrum"
    },
    {
      id: 14,
      name: "Blockchain"
    }
  ];


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My technical proficiencies:<br></br>Below is a comprehensive list of the principal hard skills that I am proficient in:</p>

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => {
                  return (
                    <div key={skill.id} className="item">
                      <h3>{skill.name}</h3>
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
