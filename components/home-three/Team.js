import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Team() {
  return (
    <div className="fugu--team-section fugu--section-padding2">
      <div className="container">
        <div className="fugu--section-title-wrap" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
          <div className="fugu--section-title">
            <div className="fugu--default-content content-sm" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h2>Decouvrez notre équipe</h2>
              <p>
                Ci-dessous la liste des membres de notre équipe.
              </p>
            </div>
          </div>
          {/* <div className="fugu--section-button">
            <div className="fugu--portfolio-btn">
              <Link href={"#"} legacyBehavior>
                <a className="fugu--outline-btn">
                  <span>View All Members</span>
                </a>
              </Link>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0s">
              <div className="fugu--team-left">
                <div className="fugu--team-thumb">
                  <img src="/images/all-img/v3/team2.jpg" alt="" />
                </div>
                <div className="fugu--team-data">
                  <h4>Cedric</h4>
                  <p>Capitaine | Chef de projet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fugu--team-wrap wow fadeInUpX"
              data-wow-delay="0.10s"
            >
              <div className="fugu--team-left">
                <div className="fugu--team-thumb">
                  <img src="/images/all-img/v3/team1.jpg" alt="" />
                </div>
                <div className="fugu--team-data">
                  <h4>Tsanta</h4>
                  <p>Developpeur Fullstack pro max - Mathematicien - Physicien - Docteur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fugu--team-wrap wow fadeInUpX"
              data-wow-delay="0.20s"
            >
              <div className="fugu--team-left">
                <div className="fugu--team-thumb">
                  <img src="/images/all-img/v3/team3.jpg" alt="" />
                </div>
                <div className="fugu--team-data">
                  <h4>Idealy</h4>
                  <p>Developpeur front-end et integrateur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="fugu--team-wrap wow fadeInUpX"
              data-wow-delay="0.30s"
            >
              <div className="fugu--team-left">
                <div className="fugu--team-thumb">
                  <img src="/images/all-img/v3/team4.jpg" alt="" />
                </div>
                <div className="fugu--team-data">
                  <h4>Fanantenana</h4>
                  <p>Developpeur front-end et integrateur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fugu--shape3">
        <img src="/images/shape2/shape3.png" alt="" />
      </div>
    </div>
  );
}
