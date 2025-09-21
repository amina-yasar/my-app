import Background from "./Background";
import Headings from "./Headings";
import Buttons from "./Buttons";
import Cards from "./Cards"; // This renders ONE card
import Information from "./Information";
function HeroSection(){
     const numberOfCards = 8;
    return<>
    {/* background*/}
      <div className="row" style={{width:"100vw"}}>
        <div className="col" style={{ textAlign: "center" }}>
          <Background />
        </div>
      </div>
      {/* Headings */}
      <div className="row" style={{backgroundColor:"#f2960bff",marginLeft:"1px"}}>
        <div className="col" style={{ textAlign: "center" }}>
          <Headings />
        </div>
      </div>

    {/* Buttons */}
<div className="row" style={{background:"skin"}}>
  <div className="col-12">
    <Buttons />
  </div>
</div>

      {/* Cards */}
    {/* Cards */}
<div className="container mt-5" style={{position: 'relative',
        width: '100vw',
         background:"white",
        overflow: 'hidden',}}>
  <Cards />
</div>



{/* information */}
     <div className="row" style={{background:"lightgrey"}}>
  <Information />
</div>

    
    </>
}
export default HeroSection;