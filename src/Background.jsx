import backGround from './assets/images/backGround.jpg';

function Background() {
  const buttons = [
    {
      type: "button",
      className: "btn",
      style: {
        background: "linear-gradient(90deg, #d35400 0%, #e67e22 100%)",
        color: "white",
        border: "none",
        borderRadius: "12px",
        padding: "12px 30px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
        cursor: "pointer",
      },
      iconClassName: "bi bi-heart-fill",
      iconStyle: {
        color: "#e67e22",
        fontSize: "1.5rem",
        textShadow: `-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white`,
      },
      text: "Donate Us",
    },
    {
      type: "button",
      className: "btn btn-secondary btn-lg",
      style: {
        whiteSpace: "nowrap",
      },
      text: "Sponsor A Child",
    },
    {
      type: "button",
      className: "btn btn-warning btn-lg",
      style: {
        background: "linear-gradient(90deg, #d35400 0%, #e67e22 100%)",
        color: "white",
        border: "none",
        borderRadius: "12px",
        padding: "12px 30px",
        fontWeight: "600",
        whiteSpace: "nowrap",
        gap: "10px",
        cursor: "pointer",
      },
      text: "Learn More",
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <img
        src={backGround}
        alt="Background"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        }}
      ></div>
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
        <h1
          style={{
            background: 'linear-gradient(90deg, #d35400 0%, #e67e22 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontFamily: '"Times New Roman", serif',
            fontSize: '4rem',
          }}
        >
          Welcome To Our Site
        </h1>
        <h3
          style={{
            color: 'rgba(226, 238, 243, 0.5)',
            fontFamily: '"Times New Roman", serif',
          }}
        >
          <i>Supporting orphans with love and care</i>
        </h3>
        <h1
          style={{
            fontStyle: 'italic',
            color: 'rgba(226, 238, 243, 0.5)',
            fontFamily: '"Times New Roman", serif',
          }}
        >
          Every Child Deserves <br />
          <u style={{ color: "orange" }}>Love</u> ,
          <u style={{ color: "orange" }}>Shelter</u> & a{' '}
          <u style={{ fontFamily: '"Times New Roman", serif', color: "orange" }}>
            Future
          </u>.
        </h1>
        <h3
          style={{
            fontStyle: 'italic',
            color: 'rgba(226, 238, 243, 0.5)',
            fontFamily: '"Times New Roman", serif',
          }}
        >
          "Join us in changing the lives of orphans in Pakistan."
        </h3>
        <div
          style={{
            marginTop: '150px',
            display: 'flex',
            justifyContent: 'center',
            gap: '8rem',
          }}
        >
          {buttons.map((btn, index) => (
            <button
              key={index}
              type={btn.type}
              className={btn.className}
              style={btn.style}
            >
              {btn.iconClassName && (
                <i className={btn.iconClassName} style={btn.iconStyle}></i>
              )}
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Background;
