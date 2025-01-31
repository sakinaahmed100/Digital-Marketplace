import styles from "../styles/HomePage.module.css";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FeaturedMerch from "../components/FeaturedMerch";
import Benefits from "../components/Benefits";
import Button from "../components/Button";


const HomePage = () => {
  return (
    <div className={styles.homePage}>

      <HeroSection></HeroSection>

      <HowItWorks></HowItWorks>

     <FeaturedMerch></FeaturedMerch>

 <Benefits></Benefits>
      {/* Sign Up/Sign In Section */}
      <section className={styles.authPrompt}>
        <Button className={styles.cta}>Create an Account</Button>
        <Button className={styles.cta}>Log In</Button>
      </section>


    </div>
  );
};

export default HomePage;
