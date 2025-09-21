function Background() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
      <img 
        src="/backgroundImage.jpg"  // direct path to public folder image
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      {/* You can add content here that will appear on top of the background image */}
    </div>
  );
}

export default Background;
