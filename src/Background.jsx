import fullBackground from './assets/images/fullBackground.jpg';

function Background() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh', // <-- Full viewport height
        overflow: 'hidden',
      }}
    >
      <img
        src={fullBackground}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top', // Optional: shows top of the image
          zIndex: -2,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        }}
      ></div>

      {/* Foreground text */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          textAlign: 'center',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h1><i>Welcome To Our Site</i></h1>
        <p>Supporting orphans with love and care</p>
        <h1><i>"Every Child Deserves Love, Shelter & a Future."</i></h1>
        <h3><i>"Join us in changing the lives of orphans in Pakistan."</i></h3>

        <div className="row text-center" style={{ marginTop: '50px' }}>
          <div className="col">
            <button type="button" className="btn btn-warning btn-lg">Donate Now</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-secondary btn-lg">Sponsor A Child</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary btn-lg">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
