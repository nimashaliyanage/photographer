import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          We provide a diverse range of services, and our passion for travel shines through in our work. We specialize in wedding photography that embraces an organic approach, capturing moments exactly as they unfold, with a genuine and unscripted style. We capture family sessions  with a lifestyle approach, aiming to authentically reflect your family's unique personality and dynamics.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <img src={d.img} alt="" />{" "}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
