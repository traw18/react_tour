import img from "../assets/heroimage.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="about" id="about">
    <Title title='about' subtitle='us' />
        <div className="about-content">
            <div className="about-img">
            <img src={img} alt="about-rainforest" />
            </div>
            <div className="text">
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, porro.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, porro.</p>
            <a href="#home" className="btn-about">read more</a>     
            </div>
        </div>
    </section>
  );
};

export default About