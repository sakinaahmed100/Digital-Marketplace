import React, { useEffect, useState } from 'react';
import styles from '../styles/HeroSection.module.css';
import Button from "../components/Button";
import heroVideo from '../assets/heroVideo.mp4';

const HeroSection: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000); // Delay for text animation
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div> {/* Optional dark overlay for better readability */}

      <div className={styles.heroContent}>
        <h1 className={`${styles.title} ${showText ? styles.animateTitle : ''}`}>
          Create Custom Merch, Wear Your Art
        </h1>
        <p className={styles.subtitle}>Bring your creativity to life with custom-designed merchandise.</p>
        <Button className={`${styles.ctaButton} ${showText ? styles.animateButton : ''}`}>Get Started</Button>
      </div>
    </section>
  );
};

export default HeroSection;
