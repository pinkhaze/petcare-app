import React from 'react';
import { useNavigate } from 'react-router-dom';

import homepagePetIcon from '../assets/homepage-pets.png';
import petProfileIcon from '../assets/pet-profile.png';
import healthScreeningIcon from '../assets/health-screening.png';
import syringeMedicationIcon from '../assets/syringe-medication.png';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/pets-overview');
  };

  return (
    <div className="section pt-2">
      <h1 className="title is-2 has-text-centered pb-3">WELCOME TO HEALTHY PAWS</h1>
      <div className="columns is-fullwidth px-2 is-centered">
        <div className="column content is-half has-border">
          <p className="title is-3">Take control of your pet's health with ease!</p>
          <p className="title is-3">Here's how our app helps you:</p>
          <p className="subtitle is-3 m-0">
            <span className="icon-text">
              <figure className="image is-48x48 mr-2">
                <img src={petProfileIcon} alt="Manage Pet Profiles" />
              </figure>
              <span className="p-2">Manage Pet Profiles</span>
            </span>
          </p>
          <p className="subtitle is-3 m-0">
            <span className="icon-text">
              <figure className="image is-48x48 mr-2">
                <img src={syringeMedicationIcon} alt="Medications and Vaccinations" />
              </figure>
              <span className="pt-2">Stay on Top of Medications</span>
            </span>
          </p>
          <p className="subtitle is-3 m-0">
            <span className="icon-text">
              <figure className="image is-48x48 mr-2 is-centered">
                <img src={healthScreeningIcon} alt="Track Medical Conditions" />
              </figure>
              <span className="pt-2">Track Medical Conditions</span>
            </span>
          </p>
          <div className="has-text-centered mt-5">
            <button 
            onClick={handleButtonClick} 
            className="button is-large is-dark is-outlined has-text-weight-bold"
           >
          Get Started
          </button>
        </div>
        </div>
        <div className="column is-half px-2 has-text-centered">
          <figure className="image homepage-pet is-inline-block">
            <img src={homepagePetIcon} alt="Homepage Pet" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
