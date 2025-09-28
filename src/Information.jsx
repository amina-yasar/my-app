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
          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg
              {...iconStyle}
              viewBox="0 0 24 24"
              stroke={quickLinkColors.home}
              fill="none"
            >
              <path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </span>
          Home
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg
              {...iconStyle}
              viewBox="0 0 24 24"
              stroke={quickLinkColors.programs}
              fill="none"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          Programs
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg
              {...iconStyle}
              viewBox="0 0 24 24"
              stroke={quickLinkColors.contact}
              fill="none"
            >
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72 13 13 0 0 0 .57 2.64 2 2 0 0 1-.45 2.11L9.91 11a16 16 0 0 0 6.07 6.07l1.53-1.3a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.64.57A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          Contact
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg
              {...iconStyle}
              viewBox="0 0 24 24"
              stroke={quickLinkColors.gallery}
              fill="none"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </span>
          Gallery
        </>
      ),
    },
    {
      title: "📬 Connect with Us",
      text: (
        <>
          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg width="16" height="16" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.92.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </span>
          Facebook
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg width="16" height="16" fill="#E1306C" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
            </svg>
          </span>
          Instagram
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg width="16" height="16" fill="#FF0000" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.91 2.91 0 00-2.048-2.054C19.428 3.5 12 3.5 12 3.5s-7.428 0-9.45.632a2.91 2.91 0 00-2.048 2.054A30.025 30.025 0 000 12a30.025 30.025 0 00.502 5.814 2.91 2.91 0 002.048 2.054C4.572 20.5 12 20.5 12 20.5s7.428 0 9.45-.632a2.91 2.91 0 002.048-2.054A30.025 30.025 0 0024 12a30.025 30.025 0 00-.502-5.814zM9.75 15.02v-6.04L15.5 12l-5.75 3.02z" />
            </svg>
          </span>
          YouTube
          <br />

          <span style={{ verticalAlign: "middle", marginRight: "6px" }}>
            <svg {...iconStyle} viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          </span>
          Newsletter
        </>
      ),
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {infoData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
