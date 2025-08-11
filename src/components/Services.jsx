import Title from "./Title";

const Services = () => {
  return (
    <main className="services" id="services">
        <Title title='our' subtitle='services' />
        <div className="service-content">
            <div className="service-title">
                <i className="fa-solid fa-wallet"></i>
                <h3>saving money</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, reiciendis?</p>
            </div>
            <div className="service-title">
                <i className="fa-solid fa-tree"></i>
                <h3>endless hiking</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, facilis.</p>
            </div>
            <div className="service-title">
                <i className="fa-solid fa-socks"></i>
                <h3>Amazing Comfort</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deserunt!</p>
            </div>            
        </div>
    </main>
  );
};

export default Services