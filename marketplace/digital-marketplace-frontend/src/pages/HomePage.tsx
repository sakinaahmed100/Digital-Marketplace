import styles from "../styles/HomePage.module.css";
import Button from "../components/Button";


const HomePage = () => {
  return (
    <div className={styles.homePage}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Create Your Custom Merch, Wear Your Art.</h1>
        <p>Design and sell custom t-shirts, hoodies, and more. Simple, fast, and fun.</p>
        <Button  className={styles.cta}>Start Designing</Button>
      </section>
      
      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>Step 1</h3>
            <p>Choose a Product</p>
          </div>
          <div className={styles.step}>
            <h3>Step 2</h3>
            <p>Customize</p>
          </div>
          <div className={styles.step}>
            <h3>Step 3</h3>
            <p>Order or Sell</p>
          </div>
        </div>
      </section>
      
      {/* Featured Merch Section */}
      <section className={styles.featuredMerch}>
        <h2>Trending Designs</h2>
        <div className={styles.productGrid}>
          {/* Add images and links to the products */}
          <div className={styles.product}>Product 1</div>
          <div className={styles.product}>Product 2</div>
          <div className={styles.product}>Product 3</div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.benefit}>
          <h3>For Designers</h3>
          <p>Showcase your creativity and earn money by designing custom merch.</p>
        </div>
        <div className={styles.benefit}>
          <h3>For Customers</h3>
          <p>Express your personality through exclusive custom designs.</p>
        </div>
      </section>
      
      {/* Sign Up/Sign In Section */}
      <section className={styles.authPrompt}>
        <button className={styles.cta}>Create an Account</button>
        <button className={styles.cta}>Log In</button>
      </section>
      
    
    </div>
  );
};

export default HomePage;
