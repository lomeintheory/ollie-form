import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.ollieImage}
            src='https://placehold.co/600x400'
            alt='Ollie image'
            width={600}
            height={400}
            priority
          />
        </div>
        <form className={styles.signUpForm}>
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}
