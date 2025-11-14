import React from "react";
import "./GetInvolved.css";
import CardSection from "./CardSection";
import RegistrationForm from "./RegistrationForm";

function GetInvolved() {
  const cardData = [
    {
      title: "Partners",
      description:
        "We believe in the power of collaboration. Partnering with us allows organizations to leverage their resources and networks to create measurable and lasting change in the lives of vulnerable children. By becoming a partner, you'll join a community of like-minded organizations that work together towards common goals. Your expertise, resources, and networks are invaluable in making a difference in the lives of children in need.",
    },
    {
      title: "Volunteers",
      description:
        "Our volunteers are the heartbeat of our mission. Whether it's a few hours a week or leading a project, your dedication helps shape the future of the children we serve. As a volunteer, you'll be actively involved in various activities such as tutoring, mentorship, event planning, and more. Each volunteer's contribution makes a meaningful impact, helping to build a stronger, brighter future for these children. Your time, effort, and passion are vital in creating lasting change.",
    },
    {
      title: "Fundraise",
      description:
        "Fundraising is a powerful way to contribute. Host events or share our cause to help us raise the resources needed to support children in need. Whether you’re organizing a charity run, a dinner event, or an online campaign, your fundraising efforts will directly support programs that provide education, healthcare, and other essential services to children living in challenging conditions. Your commitment to raising funds will help change the lives of countless children and create a lasting, positive impact on their communities.",
    },
  ];

  return (
    <div className="get-involved-container">
      <div className="col-12 col-lg-6 col-md-4">
        <div className="container">
          <h1 className="get-involved-heading">Get Involved</h1>
          <CardSection cardData={cardData} />
        </div>
      </div>

      <div className="col-12 col-lg-6 col-md-4">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default GetInvolved;
