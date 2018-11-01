import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Instructions</h1>
      <div className="container">
        <p className="lead">
          This is a data collector and visualisation for the heartbeat
          wristband. In the Self-assessment form contextual stressdata can be
          submitted to the database.
        </p>
        <p className="">
          The application is build in react and is connected to a REST API. Go
          to{" "}
          <a href="https://beautiful-data.herokuapp.com/api/users/1">
            https://beautiful-data.herokuapp.com/api/users/1
          </a>{" "}
        </p>
        <br />
        <p>
          To view the four datasets of all information products. Post requests
          can be send to the endpoints /weatherdata, /drowsinessdata,
          /stressdata and /heartdata. See{" "}
          <a href="https://github.com/samsoedien/ESP8266-data-collector">
            https://github.com/samsoedien/ESP8266-data-collector
          </a>{" "}
          for instructions how to configure data collectors for the REST API.
        </p>
      </div>
    </div>
  );
};

export default Home;
