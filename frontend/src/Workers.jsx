import { useState } from "react";

function Workers() {
  //single value
  //const [workersData, setWorkersData] = useState(2000);

  //objects
  //   const [workersData, setWorkersData] = useState({
  //     name: "Ali",
  //     salary: 3000,
  //   });

  // nested objects
  const [workersData, setWorkersData] = useState({
    name: "Ali",
    salary: 5000,
    posting: {
      region: "kpk",
      location: "Peshawar",
    },
  });

  const handleData = () => {
    //updating single value
    // setWorkersData(workersData + 3000);

    // updating an object
    // setWorkersData({ ...workersData, salary: 12000 });

    // updating nested objects
    setWorkersData({
      ...workersData,
      posting: { ...workersData.posting, location: "Abbottabad" },
    });
  };
  return (
    <>
      {/* single value */}
      {/* <p>{workersData}</p> */}

      {/* accessing object  */}
      {/* <p>{workersData.salary}</p> */}

      <p>{workersData.posting.location}</p>
      <button onClick={handleData}>Change location</button>
    </>
  );
}

export default Workers;