import React from "react";
import styles from "../styles/FeaturedMerch.module.css";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import hoodieImg from "../assets/hoodie.jpg"
import tshirtImg from "../assets/tshirt.jpg"
import capImg from "../assets/cap.jpg"

const FeaturedMerch: React.FC = () => {
  // Replace with actual product data later
  const products = [
    { id: 1, name: "Galaxy Hoodie", imageUrl:hoodieImg },
    { id: 2, name: "Minimalist T-Shirt", imageUrl: tshirtImg },
    { id: 3, name: "Retro Cap", imageUrl: capImg },
  ];

  return (
    <section className={styles.featuredMerch}>
      <h2 className={styles.heading}>🔥 Trending Designs</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <button className={styles.viewDetails}>
              <FaShoppingCart className={styles.cartIcon} /> View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMerch;

