import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function TeamSection() {
  return (
    <div className="fugu--team-two dark-version">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0s">
            <div className="fugu--team-thumb">
              <img src="/images/all-img/v4/team1.png" alt="" />
            </div>
            <div className="fugu--team-data">
              <h4>Cedric</h4>
              <p>Capitaine | Chef de projet</p>
              <div className="fugu--social-icon">
                <ul>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/twitter.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/instagram.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/github.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="fugu--team-wrap wow fadeInUpX" data-wow-delay=".10s">
            <div className="fugu--team-thumb">
              <img src="/images/all-img/v4/team2.png" alt="" />
            </div>
            <div className="fugu--team-data">
              <h4>Tsanta</h4>
              <p>Développeur Back-End</p>
              <div className="fugu--social-icon">
                <ul>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/twitter.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/instagram.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/github.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="fugu--team-wrap wow fadeInUpX" data-wow-delay=".20s">
            <div className="fugu--team-thumb">
              <img src="/images/all-img/v4/team3.png" alt="" />
            </div>
            <div className="fugu--team-data">
              <h4>Idealy</h4>
              <p>Développeur front-end et intégrateur</p>
              <div className="fugu--social-icon">
                <ul>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/twitter.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/instagram.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/github.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="fugu--team-wrap wow fadeInUpX" data-wow-delay=".30s">
            <div className="fugu--team-thumb">
              <img src="/images/all-img/v4/team4.png" alt="" />
            </div>
            <div className="fugu--team-data">
              <h4>Fanantenana</h4>
              <p>Développeur front-end et intégrateur</p>
              <div className="fugu--social-icon">
                <ul>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/twitter.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/instagram.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/github.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fugu--team-button">
        <Link href={"#"} className="fugu--btn bg-gray active">
          Join Our Team
        </Link>
      </div>
    </div>
  );
}
