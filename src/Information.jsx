function Information() {
const infoData = [
  {
    title: "🌐 About Us",
    text: (
      <>
        Orphanage Story & Mission Recap<br />
        ph: +9200000<br />
        Email: aminayasir805@gmail.com
      </>
    ),
  },
  {
    title: "🔗 Quick Links",
    text: (
      <>
        Home<br />
        Programs<br />
        Contact<br />
        Gallery
      </>
    ),
  },
  {
    title: "📬 Connect with Us",
    text: (
      <>
        Facebook<br />
        Instagram<br />
        YouTube<br />
        NewsLetter
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
