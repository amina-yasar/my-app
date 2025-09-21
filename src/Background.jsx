import orphans from './assets/images/orphans.jpg';

function Background() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <img
        src={orphans}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      />

      {/* Semi-transparent dark overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 0.5 = 50% darkness
          zIndex: -1,
        }}
      ></div>

      {/* Content on top */}
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

      </div>
    </div>
  );
}

export default Background;
