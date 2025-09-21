function Buttons() {
  return (
    <div className="row text-center" style={{marginTop:"50px"}}>
      <div className="col">
       <button type="button" class="btn btn-warning">Donate Now</button>
      </div>
      <div className="col">
        <button type="button" class="btn btn-secondary">Sponsor A Child</button>
      </div>
      <div className="col">
        <button type="button" class="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
}

export default Buttons;
