import { useState } from "react";
import SubHeading from "../components/app/SubHeading";
import styles from "./styles/awardTypes.module.css";

function AwardTypesPage() {
  const [showAwardContent, setShowAwardContent] = useState(true);
  const [showBenefitContent, setShowBenefitContent] = useState(false);
  function handleContentToggle(e: React.MouseEvent<HTMLButtonElement>) {
    setShowAwardContent((prevState) => !prevState);
    setShowBenefitContent((prevState) => !prevState);
  }

  return (
    <div>
      <SubHeading value="AWARDS TYPE" />
      <section className={styles.specificPageNav}>
        <button
          onClick={handleContentToggle}
          className={
            showAwardContent ? `${styles.active}` : `${styles.nonActive}`
          }
        >
          AWARDS
        </button>
        <button
          onClick={handleContentToggle}
          className={
            showBenefitContent ? `${styles.active}` : `${styles.nonActive}`
          }
        >
          BENEFITS
        </button>
      </section>
      {showAwardContent ? (
        <section className={styles.awardContent}>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Nigeria Heroes Award Honours Distinguished Citizens In Various
              Fields
            </h4>
            <p>
              Nigerians excelling in various fields of endeavours have been
              recognised for impacting humanity positively within and outside
              their environment. The Nigerian Silent Heroes Award initiative
              conceived by the Coordinator, Mrs. Ozioma Odita.
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              WOFAN ED Bags Heroes’ Award, Dedicates it to Rural Women
            </h4>
            <p>
              The Executive Director of Women Farmers Advancement Network
              (WOFAN), Hajia Salamatu Garba has bagged the Agriculture and
              Community Development award of the maiden Kano Heroes Award held
              inside the Coronation Hall of the Government House, Kano.
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Vanguard Personality of the Year
            </h4>
            <p>
              In a clime where high poverty level is mostly used to justify
              certain societal ills, Miss Ngozi Kekwaru proved the proponents of
              such wrong. Through a sheer display of honesty, she showed that
              all hope isn’t lost in this generation of Nigerians, who place
              high premium on materialism. In her, the expectation of a nation
              where eroded value system is rebuilt came alive. To some sections
              of Nigerians, especially young people, her action didn’t speak
              smartnesss in a period of harsh economic realities. But Ngozi
              Kekwaru is the true Nigerian heroine, who believes a good name is
              worth more than a million diamonds.
            </p>
          </div>
        </section>
      ) : showBenefitContent ? (
        <section className={styles.benefitContent}>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Vanguard Personality of the year award
            </h4>
            <p>
              Being named the Vanguard Personality of the Year is a prestigious
              honor that recognizes individuals who have made significant
              contributions to society. This award highlights the recipient’s
              achievements and positions them as a leading figure in their
              field. Awardees receive increased media exposure, including
              features in prominent publications and coverage on various media
              platforms. This heightened visibility helps to elevate their
              public profile and can lead to new opportunities and partnerships.
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Nigeria Heroes Award Honours Distinguished Citizens In Various
              Fields
            </h4>
            <p>
              This award opens doors to exclusive networking events and
              gatherings with other distinguished leaders and influencers. These
              connections can lead to collaborations, mentorship opportunities,
              and further professional growth.
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              WOFAN ED Bags Heroes’ Award, Dedicates it to Rural Women
            </h4>
            <p>
              Awardees often use their platform to advocate for causes they are
              passionate about. This award amplifies their voice and allows them
              to make an even greater impact on their communities and society at
              large.
            </p>
          </div>
        </section>
      ) : (
        <p>Nothing to display</p>
      )}
    </div>
  );
}
export default AwardTypesPage;
