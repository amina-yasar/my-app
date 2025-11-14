import AdminHeader from "./AdminHeader";
import AdminMainBody from "./AdminMainBody";

function MainSection() {
  return (
    <>
     <div style={{ width: "100vw", padding: 0,marginTop:"80px" }}>
        <AdminHeader />
      </div>
      <div style={{ width: "100vw", padding: 0 }}>
        <AdminMainBody />
      </div>
    </>
  );
}

export default MainSection;
