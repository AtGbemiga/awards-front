import SubHeading from "../components/app/SubHeading";
import WinnersOnHomePage from "../components/home/WinnersOnHomePage";
import styles from "./styles/aboutUs.module.css";

function AboutUsPage() {
  return (
    <div>
      <SubHeading value="ABOUT PRIDE OF NIGERIA" />
      <p className={styles.aboutP}></p>
      <ol>
        <li>
          The Pride of Nigeria was founded with the belief that every hero's
          journey deserves to be celebrated. Our team is dedicated to uncovering
          and sharing the stories that inspire, educate, and motivate people
          across Nigeria and beyond.
        </li>
        <li>
          Our mission- Our mission is to highlight the incredible achievements
          and personal journeys of Nigerian heroes from all walks of life.
          Through in-depth biographies, interviews, and exclusive content, we
          aim to inspire and educate our audience
        </li>
      </ol>
      <WinnersOnHomePage />
    </div>
  );
}
export default AboutUsPage;
