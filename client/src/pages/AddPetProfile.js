import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PET_INFO } from '../utils/mutations';
import { QUERY_ALL_PET_INFOS } from '../utils/queries';

const AddPetProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    breed: '',
  });

  const navigate = useNavigate();
  const [addPetInfo, { error }] = useMutation(ADD_PET_INFO, {
    refetchQueries: [{ query: QUERY_ALL_PET_INFOS }],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addPetInfo({
        variables: { 
          ...formData, 
          age: formData.age ? parseInt(formData.age) : null, 
          weight: formData.weight ? parseFloat(formData.weight) : null 
        },
      });
      navigate(`/dashboard`);
    } catch (err) {
      console.error(err);
    }
    setFormData({
      name: '',
      age: '',
      weight: '',
      breed: '',
    });
  };

  return (
    <div className="card form" style={{ maxWidth: '550px', margin: '3rem auto' }}>
      <header className="card-header">
        <p className="card-header-title form-header has-text-centered is-size-4">
          Add a New Pet Profile
        </p>
      </header>
      <div className="card-content">
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <label className="label">Pet Name</label>
            <div className="control">
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Age</label>
            <div className="control">
              <input
                type="number"
                name="age"
                className="input"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Weight (lbs)</label>
            <div className="control">
              <input
                type="number"
                name="weight"
                className="input"
                value={formData.weight}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Breed</label>
            <div className="control">
              <input
                type="text"
                name="breed"
                className="input"
                value={formData.breed}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="field has-text-centered">
            <button className="button is-dark is-outlined is-fullwidth has-text-weight-bold" type="submit">
              Add Pet
            </button>
          </div>
        </form>
        {error && <div className="notification is-danger mt-4">Something went wrong...</div>}
      </div>
    </div>
  );
};

export default AddPetProfile;
