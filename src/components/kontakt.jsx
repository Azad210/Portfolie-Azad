import "../style/kontakt.scss";

export default function Kontakt() {
  return (
    <>
      <h2 id="kontakt">Kontakt</h2>
      <div class="contact-box">
        <div class="contact-container">
          <p>Du kan kontakte mig via følgende oplysninger:</p>

          <div class="contact-details">
            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+4550471299">+45 50 47 12 99</a>
            </p>
            <p>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:azad123@live.dk">azad123@live.dk</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/azad-karaman-720213339/"
                target="_blank"
              >
                Klik her
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
