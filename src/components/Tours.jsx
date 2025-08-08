import React from 'react'

const Tours = () => {
  return (
    <article className="tours" id="tours">
        <h2>featured <span className="text-secondary">tours</span></h2>
        <div className="cards">
            <div className="card">
                <div className="card-img"><img src="./img/tour1.jpg" alt="" />
                <p>1 Aug 2025</p>
                </div>
                <div className="card-content">
                    <h3>adventure</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <ul>
                        <li><i className="fa-solid fa-map"></i>China</li>
                        <li>6 days</li>
                        <li>From $2100</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="card-img"><img src="./img/tour3.jpg" alt="" />
                <p>12 Aug 2025</p>
                </div>
                <div className="card-content">
                    <h3>adventure</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <ul>
                        <li><i className="fa-solid fa-map"></i>China</li>
                        <li>6 days</li>
                        <li>From $2100</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <div className="card-img"><img src="./img/tour4.jpg" alt="" />
                <p>15 Aug 2025</p>
                </div>
                <div className="card-content">
                    <h3>adventure</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <ul>
                        <li><i className="fa-solid fa-map"></i>China</li>
                        <li>6 days</li>
                        <li>From $2100</li>
                    </ul>
                </div>
            </div>                        
        </div>
    </article>
  );
};

export default Tours