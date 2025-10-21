import React from 'react';

function Home() {
  return (
    <>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{color:"rgb(185,14,79)",fontFamily:" 'Times New Roman', serif"}}>Welcome to the Orphanage Admin Portal</h1>
        <p>
          This portal is designed to help administrators efficiently manage all aspects
          of the orphanage. From tracking student details, managing donor information,
          to overseeing administrative tasks, everything is centralized here.
        </p>

        <h2 style={{color:"rgb(185,14,79)",fontFamily:" 'Times New Roman', serif"}}>Features:</h2>
        <ul>
          <li>View and update student records including personal details and progress.</li>
          <li>Maintain a comprehensive list of donors and track donations.</li>
          <li>Manage administration staff and related activities.</li>
          <li>Access reports and analytics to monitor the orphanage’s overall well-being.</li>
          <li>Communicate important announcements to staff and volunteers.</li>
        </ul>

        <p>
          Use the navigation bar above to access different sections of the admin portal.
          Your dedicated effort helps provide care, education, and a loving environment
          for the children in our orphanage.
        </p>

        <p style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          Together, we build brighter futures.
        </p>
      </div>
    </>
  );
}

export default Home;
