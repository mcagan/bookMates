import React from "react";
import Logo from "../assets/docs/bookmates.png";
import purpose_1 from "../assets/docs/purpose_1.png";
import purpose_2 from "../assets/docs/purpose_2.png";
import purpose_3 from "../assets/docs/purpose_3.png";
import fixed_1 from "../assets/docs/fixed_img.jpeg";

export default function Home() {
  return (
    <React.Fragment>
      <div id="home">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <a class="navbar-brand" href="/">
                <img src={Logo} />
              </a>
              <li class="nav-item">
                <a class="nav-link" href="#works">
                  How it Works
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="landing">
          <div class="home-wrap">
            <div class="home-inner"></div>
          </div>
        </div>
        <div class="caption text-center">
          <h1>
            Got books in your shelf that are just dying to be opened again?
          </h1>
          <h1>Trade them now with bookMates!</h1>

          <form method="GET" action="/createEvent">
            <button class="btn btn-outline-light btn-lg" type="submit">
              Get Started
            </button>
          </form>
        </div>
      </div>

      <div id="about" class="offset">
        <div class="col-12 narrow text-center">
          <h1>About Us</h1>
          <div class="about-underline"></div>
          <p class="about-description">
            A community of book lovers looking to swap our books, giving them a
            chance to be read again. Really, a new chance at life! And
            commemoration of the worlds greatest literatures.
          </p>
        </div>
      </div>

      <div id="purpose" class="offset">
        <div class="jumbotron">
          <div class="col-12 narrow text-center">
            <h3 class="purpose-heading">Our Purpose</h3>
            <div class="purpose-underline"></div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <div class="each-purpose">
                <img src={purpose_1} data-fa-transform="shrink-3 up-5" />
                <p>Making the planet greener one book at a time</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="each-purpose">
                <img src={purpose_2} data-fa-transform="shrink-3 up-5" />
                <p>Connecting people around the world with the same interest</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="each-purpose">
                <img src={purpose_3} data-fa-transform="shrink-3 up-5" />
                <p>
                  Reducing cost. It cost absolutely nothing to share and trade
                  your books!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fixed-background">
        <div class="fixed-wrap">
          <img src={fixed_1} />
        </div>
      </div>

      <div id="works" class="offset">
        <div class="jumbotron_works">
          <div class="col-12 narrow text-center">
            <h3 class="works-heading">How it Works</h3>
            <div class="works-underline"></div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <div class="each-work">
                <p>
                  Create an account and start adding books you have to your
                  library as well as books you need
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="each-work">
                <p>
                  Search for other bookMates in your neighbourhood with books of
                  interest to you
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="each-work">
                <p>
                  Initiate a conversation with a bookMate once they've accepted
                  your request to trade. And voila!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="features" class="offset">
        <div class="jumbotron">
          <div class="col-12 narrow text-center">
            <h3 class="features-heading">Features</h3>
            <div class="features-underline"></div>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <div class="each-feature">
                <p>
                  Chat with your fellow bookMate once you've decided to trade
                  books
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="each-feature">
                <p>
                  Leave feedback ratings, likes, and comments on the books read
                  and bookMate
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="each-feature">
                <p>
                  Mutually agree to meetup at a location of your choice to trade
                  and talk about books
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="offset">
        <footer>
          <div class="row justify-content-center">
            <div class="col-md-5 text-center">
              <h1>bookMates.</h1>
              <p>
                Our purpose is to share the world of literature through
                community book exchange.
              </p>
              <strong>Contact Info</strong>
              <p>
                (800) 111-111
                <br />
                email@bookMates.com
              </p>
            </div>
            <hr class="socket" />
            &copy; bookMates.
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
