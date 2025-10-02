function Information() {
  const iconStyle = {
    width: 16,
    height: 16,
    stroke: "#d35400",
    strokeWidth: 2,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    verticalAlign: "middle",
    marginRight: "6px",
  };

  const quickLinkColors = {
    home: "#2980b9",
    programs: "#27ae60",
    contact: "#e67e22",
    gallery: "#8e44ad",
  };

  const infoData = [
    {
      title: "📞 Contact Us",
      text: (
        <>
          <span style={iconStyle}>🎥</span> Orphanage Story & Mission Recap<br />
          <span style={iconStyle}>📞</span> ph: +9200000<br />
          <span style={iconStyle}>✉️</span> Email: aminayasir805@gmail.com
        </>
      ),
    },
    {
      title: "🔗 Quick Links",
      text: (
        <>
          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>🏠</span>
          Home
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>🎓</span>
          Programs
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>📱</span>
          Contact
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>🖼️</span>
          Gallery
        </>
      ),
    },
    {
      title: "📬 Connect with Us",
      text: (
        <>
          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>📘</span>
          Facebook
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>📸</span>
          Instagram
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>▶️</span>
          YouTube
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>📰</span>
          Newsletter
        </>
      ),
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {infoData.map((item, index) => (
          <div className="col" key={index}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
