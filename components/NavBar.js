import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/images/phoneCall.png' alt='' width='36' height='36' />
        </div>
        <div className={styles.text}>
          <div className={styles.text}>ORDER NOW!🍕</div>
          <div className={styles.text}>+91 8765-4123</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Menu</li>

          {/* logo   */}
          <Image priority src='/images/Logo.png' width='360px' height='70px' />

          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cartIcon}>
          <Image src='/images/Cart.png' height='36' width='36 ' />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
