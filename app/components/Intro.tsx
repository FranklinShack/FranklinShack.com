import Image from 'next/image'
import styles from '../page.module.css'

const Intro = () => {
    return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
            <h1 className={styles.intro}>
            Franklin Shack
            </h1>
            <p className={styles.introdesc}>
            I&apos;m a fresh CS graduate from Stevens Institute of Technology, seeking an entry level software engineering position.  Feel free to contact me through email, or take a look at my projects below.
            </p>
        </div>
    </main>
    );
  };
  
  export default Intro;
