import React from "react";
import styles from "../styles/Benefits.module.css";
import { FaPalette, FaTshirt } from "react-icons/fa"; // Import icons

const benefitsData = [
  {
    title: "For Designers",
    description: "Showcase your creativity and earn money by designing custom merch.",
    icon: <FaPalette />, // Palette icon for designers
  },
  {
    title: "For Customers",
    description: "Express your personality through exclusive custom designs.",
    icon: <FaTshirt />, // T-shirt icon for customers
  },
];

const Benefits: React.FC = () => {
  return (
    <section className={styles.benefits} aria-label="Benefits Section">
      {benefitsData.map((benefit, index) => (
        <div key={index} className={styles.benefit}>
          <div className={styles.icon}>{benefit.icon}</div>
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
