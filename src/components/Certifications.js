import React from 'react';
import '../styles/Certifications.css';

const certificationsData = [
  { title: "React Developer", organization: "Meta", date: "January 2023" },
  { title: "Python for Data Science", organization: "IBM", date: "March 2022" },
  { title: "AWS Cloud Practitioner", organization: "Amazon Web Services", date: "July 2023" },
  { title: "Responsive Web Design", organization: "freeCodeCamp", date: "August 2021" },
];

const Certifications = () => {
  return (
    <div className="certifications-page">
      <h2 className="certifications-heading">Certifications</h2>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-organization">{cert.organization}</p>
            <p className="cert-date">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
