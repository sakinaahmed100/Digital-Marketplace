import React from 'react';
import styles from '../styles/Steps.module.css';

const Steps: React.FC = () => {
  return (
    <section className={styles.stepsSection}>
      <h2 className={styles.title}>Get Started in 3 Simple Steps</h2>
      <div className={styles.stepsCards}>
        <div className={styles.card}>
          <h3>Step 1</h3>
          <p>Create your custom design using our easy-to-use platform.</p>
        </div>
        <div className={styles.card}>
          <h3>Step 2</h3>
          <p>Choose your product and customize it further if you wish.</p>
        </div>
        <div className={styles.card}>
          <h3>Step 3</h3>
          <p>Place your order, and we'll handle the rest, from printing to shipping.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
