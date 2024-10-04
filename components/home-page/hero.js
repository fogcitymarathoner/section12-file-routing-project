import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <h1>Hi, I'm Marc</h1>
      <p>
        I do web development with frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
