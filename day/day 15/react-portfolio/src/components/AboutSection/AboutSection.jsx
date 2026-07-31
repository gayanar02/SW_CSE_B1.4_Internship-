import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='GayanaR' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm GayanaR, a 2nd B.Tech student from MSRUAS, with a passion for software development.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
