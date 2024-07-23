import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Hello, world!</h1>
            <h2 className="display-6">I'm Eddie Hinojosa</h2>
            
                <p className="lead">
                    Welcome to my Portfolio.
                </p>
                <hr className="my-4" />
                <p>
                    It uses utility classes for typography and spacing to space content out
                    within the larger container.
                </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                    Learn more
                </a>
        </div>
    );
};

export default Home;
