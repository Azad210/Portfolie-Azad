import "../style/projekter.scss";
import dinmaegler from "../img/dinmaegler.png";
import hifi from "../img/hifi.png";
import movie from "../img/movie.png";
import news from "../img/newsify.png";

export default function Projekter() {
  return (
    <>
      <h2 id="projekter">Mine seneste projekter</h2>

      <div className="section-med-projekter">
        <div className="project-card">
          <h3>Din Mægler</h3>
          <img className="billeder-af-projekter" src={dinmaegler} alt="" />
          <p></p>
          <a
            target="blank"
            href="https://praktik-din-m-gler-azad-magnus-oliver.onrender.com/"
            className="project-btn"
          >
            Se det her
          </a>
        </div>

        <div className="project-card">
          <h3>HiFi</h3>
          <img className="billeder-af-projekter" src={hifi} alt="" />
          <p></p>
          <a
            target="blank"
            href="https://praktik-hifi-corner-med-react-azad-magnus-og-oliver.vercel.app/"
            className="project-btn"
          >
            Se det her
          </a>
        </div>

        <div className="project-card">
          <h3>MyMovies</h3>
          <img className="billeder-af-projekter" src={movie} alt="" />
          <p></p>
          <a
            target="blank"
            href="https://projekt-moviez-azad210.onrender.com/"
            className="project-btn"
          >
            Se det her
          </a>
        </div>

        <div className="project-card">
          <h3>Newsify</h3>
          <img className="billeder-af-projekter" src={news} alt="" />
          <p></p>
          <a
            target="blank"
            href="https://rts-cmk-wu12.github.io/newsify-Azad210/"
            className="project-btn"
          >
            Se det her
          </a>
        </div>
      </div>
    </>
  );
}
