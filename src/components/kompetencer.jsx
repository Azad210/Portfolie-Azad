import "../style/kompetencer.scss";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { SiWebpack } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";

export default function Kompetencer() {
  return (
    <>
      <h2 id="kompetencer">Kompetencer</h2>

      <div className="section-som-holder-alle-kompetencer">
        <div className="box-med-kompetencer">
          <FaHtml5 className="icons-kompetencer" />
          <p>Html</p>
        </div>

        <div className="box-med-kompetencer">
          <FaSass className="icons-kompetencer" />
          <p>Sass</p>
        </div>

        <div className="box-med-kompetencer">
          <IoLogoCss3 className="icons-kompetencer" />
          <p>Css</p>
        </div>

        <div className="box-med-kompetencer">
          <IoLogoJavascript className="icons-kompetencer" />
          <p>Javascript</p>
        </div>

        <div className="box-med-kompetencer">
          <SiWebpack className="icons-kompetencer" />
          <p>Webpack</p>
        </div>

        <div className="box-med-kompetencer">
          <DiNodejsSmall className="icons-kompetencer" />
          <p>Node.js</p>
        </div>

        <div className="box-med-kompetencer">
          <DiMongodb className="icons-kompetencer" />
          <p>MongoDb</p>
        </div>

        <div className="box-med-kompetencer">
          <FaReact className="icons-kompetencer" />
          <p>React</p>
        </div>
      </div>
    </>
  );
}
