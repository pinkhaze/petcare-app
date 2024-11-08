import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_PET_INFOS } from '../utils/queries';
import { DELETE_PET_INFO, UPDATE_PET_INFO, ADD_MEDICATION } from '../utils/mutations';

const Dashboard = () => {
  const { loading, data, error, refetch } = useQuery(QUERY_ALL_PET_INFOS);
  const [deletePetInfo] = useMutation(DELETE_PET_INFO, { onCompleted: () => refetch() });
  const [updatePetInfo] = useMutation(UPDATE_PET_INFO, { onCompleted: () => refetch() });
  const [addMedication] = useMutation(ADD_MEDICATION, {
    onCompleted: () => {
      refetch();
      setIsAddingMedication(false);
      setMedicationData({ name: '', frequency: '' });
    }
  });

  const petList = data?.petInfos || [];
  const [selectedPet, setSelectedPet] = useState(petList[0]?._id || null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingMedication, setIsAddingMedication] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: 0, weight: 0, breed: '' });
  const [medicationData, setMedicationData] = useState({ name: '', frequency: '' });

  const handleEditToggle = (pet) => {
    setIsEditing(!isEditing);
    setFormData({
      name: pet.name || '',
      age: pet.age || 0,
      weight: pet.weight || 0,
      breed: pet.breed || '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'age' || name === 'weight' ? Number(value) : value,
    });
  };

  const handleMedicationInputChange = (event) => {
    const { name, value } = event.target;
    setMedicationData({ ...medicationData, [name]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    await updatePetInfo({ variables: { ...formData, _id: selectedPet } });
    setIsEditing(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this pet? This action cannot be undone.");
    if (confirmDelete) {
      try {
        await deletePetInfo({ variables: { _id: id } });
        if (selectedPet === id) {
          setSelectedPet(petList[0]?._id || null);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  

  const handleAddMedication = async (event) => {
    event.preventDefault();
    await addMedication({ variables: { petId: selectedPet, ...medicationData } });
  };

  if (loading) return <div>fetching your pets. Please wait while we load your information.</div>;
  if (error) return <div>Oops! We encountered an issue loading your pets.</div>;

  return (
    <div className="section">
      <div className="">
        <div className="card-header">
          <h1 className="title is-2 has-text-centered">Pet Dashboard</h1>
        </div>
        <div className="card-content content">
          <div className="tabs is-centered">
            <ul className="title is-3">
              {petList.map((pet) => (
                <li key={pet._id} className={selectedPet === pet._id ? 'is-active' : ''}>
                  <a onClick={() => setSelectedPet(pet._id)}>{pet.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            {petList.map((pet) => (
              selectedPet === pet._id && (
                <div key={pet._id}>
                  {isEditing ? (
                    <form onSubmit={handleUpdate}>
                      <div className="field">
                        <label className="label">Pet Name:</label>
                        <div className="control">
                          <input className="input" type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Age:</label>
                        <div className="control">
                          <input className="input" type="number" name="age" value={formData.age} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Weight (lbs):</label>
                        <div className="control">
                          <input className="input" type="number" name="weight" value={formData.weight} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Breed:</label>
                        <div className="control">
                          <input className="input" type="text" name="breed" value={formData.breed} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="field is-grouped">
                        <div className="control">
                          <button type="submit" className="button is-dark is-outlined">Save Changes</button>
                        </div>
                        <div className="control">
                          <button type="button" className="button is-dark is-outlined" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <>
                      <h3 className="title is-4">Name: {pet.name}</h3>
                      <p><strong>Age:</strong> {pet.age} years</p>
                      <p><strong>Weight:</strong> {pet.weight}lbs</p>
                      <p><strong>Breed:</strong> {pet.breed}</p>
                      <button className="button is-dark is-outlined mt-2" onClick={() => handleEditToggle(pet)}>Edit Pet</button>
                      <button className="button is-dark is-outlined mt-2" onClick={() => handleDelete(pet._id)}>Delete Pet</button>
                    </>
                  )}

                  <h4 className="title is-5 mt-4">Medications</h4>
                  <ul>
                    {(pet.medications || []).map((medication) => (
                      <li key={medication._id}>
                        {medication.name} - {medication.frequency}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="button is-dark is-outlined mt-2"
                    onClick={() => setIsAddingMedication(!isAddingMedication)}
                  >
                    {isAddingMedication ? "Cancel Medication" : "Add Medication"}
                  </button>
                  {isAddingMedication && (
                    <form onSubmit={handleAddMedication} className="mt-4">
                      <div className="field">
                        <label className="label">Medication Name:</label>
                        <div className="control">
                          <input className="input" type="text" name="name" value={medicationData.name} onChange={handleMedicationInputChange} required />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Frequency:</label>
                        <div className="control">
                          <input className="input" type="text" name="frequency" value={medicationData.frequency} onChange={handleMedicationInputChange} required />
                        </div>
                      </div>
                      <div className="control">
                        <button type="submit" className="button is-dark is-outlined mt-2">Add Medication</button>
                      </div>
                    </form>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
