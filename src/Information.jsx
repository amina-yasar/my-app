import React from "react";
import './Information.css'; 

function Information() {

  const infoData = [
    {
      title: "📞 Contact Us",
      text: (
        <>
          <span className="icon-style">🎥</span> Orphanage Story & Mission Recap<br />
          <span className="icon-style">📞</span> ph: +9200000<br />
          <span className="icon-style">✉️</span> Email:{" "}
          <a
            href="mailto:aminayasir805@gmail.com"
            className="link email-link"
          >
            aminayasir805@gmail.com
          </a>
        </>
      ),
    },
    {
      title: "🔗 Quick Links",
      text: (
        <>
          <span className="icon-style">🏠</span>
          <a
            href="/home"
            className="link home"
          >
            Home
          </a>
          <br />
          <span className="icon-style">🎓</span>
          <a
            href="/programs"
            className="link programs"
          >
            Programs
          </a>
          <br />
          <span className="icon-style">📱</span>
          <a
            href="/contact"
            className="link contact"
          >
            Contact
          </a>
          <br />
          <span className="icon-style">🖼️</span>
          <a
            href="/gallery"
            className="link gallery"
          >
            Gallery
          </a>
        </>
      ),
    },
    {
      title: "📬 Connect with Us",
      text: (
        <>
          <span className="icon-style">📘</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Facebook
          </a>
          <br />
          <span className="icon-style">📸</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Instagram
          </a>
          <br />
          <span className="icon-style">▶️</span>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            YouTube
          </a>
          <br />
          <span className="icon-style">📰</span>
          <a
            href="/newsletter"
            className="link gallery"
          >
            Newsletter
          </a>
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
