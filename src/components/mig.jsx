import "../style/mig.scss";
import billedeafmig from "../img/billedeafmig.jpg";

export default function Mig() {
  return (
    <>
      <h2>Frontend Webudvikler - Azad Karaman</h2>
      <div className="om-mig">
        <img className="mit-billede" src={billedeafmig} />
        <p className="info-om-mig">
          Mit navn er Azad Karaman, og jeg er webudvikler studerende, hvor jeg
          primært fokuserer på frontend-udvikling. I mit portfolio vil jeg
          præsentere en række projekter, der afspejler mine færdigheder og
          erfaringer, samt fremhæve de kompetencer, jeg har opnået indtil videre
          under min uddannelse.
        </p>
      </div>
    </>
  );
}
