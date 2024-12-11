import React, { useState, useEffect } from "react";

export const SocialNetworks = () => {
  const [socialData, setSocialData] = useState([]);

  useEffect(() => {
    fetch('https://api.maxopen.com.ua/api/0b75148ea08740bd8c78fc4077500b5d/social-networks', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer c8TUpsSJoXrGQLD0laAtVwYOgJdGtEPm72xrA2SP'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setSocialData(data);
        } else {
          console.error('The data is not an array:', data);
        }
      })
      .catch(error => console.error('Error obtaining data:', error));
  }, []);

  return (
    <div className="box-socials">
      {Array.isArray(socialData) && socialData.map((network, index) => (
        <a key={index} className={`icon-socials icon-${network["text-alt"].toLowerCase()}`} href={network["social-link"]} target="_blank" rel="noopener noreferrer">
          <img alt={network["text-alt"]} src={network["social-icon"].full_url} />
        </a>
      ))}
    </div>
  );
};
