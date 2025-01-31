import React from 'react';
import styles from '../styles/HowItWorks.module.css';
import { FaPaintBrush, FaEye, FaShippingFast } from 'react-icons/fa'; // Importing icons

const HowItWorks: React.FC = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <FaPaintBrush className={styles.icon} />
          <h3>Create Your Design</h3>
          <p>Use our easy-to-use design tools to create your custom merch design.</p>
        </div>
        <div className={styles.step}>
          <FaEye className={styles.icon} />
          <h3>Preview & Order</h3>
          <p>See how your design will look and order your custom merch in just a few clicks.</p>
        </div>
        <div className={styles.step}>
          <FaShippingFast className={styles.icon} />
          <h3>Delivery to Your Door</h3>
          <p>We’ll print your design and ship it directly to you in no time!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
