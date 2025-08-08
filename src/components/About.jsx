import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
    <h2>about <span className="text-secondary">us</span></h2>
        <div className="about-content">
            <div className="about-img">
            <img src="./img/heroimage.jpg" alt="about-rainforest" />
            </div>
            <div className="text">
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, porro.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, porro.</p>
            <a href="#" className="btn-about">read more</a>     
            </div>
        </div>
    </section>
  );
};

export default About