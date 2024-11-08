import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PET_INFOS } from '../utils/queries';

const PetsOverview = () => {
  const { loading, data } = useQuery(QUERY_ALL_PET_INFOS, {
    fetchPolicy: "no-cache"
  });

  const petList = data?.petInfos || [];

  return (
    <div className="section">
      <header className="title is-2 has-text-start pb-3">Welcome back!</header>
      <h1 className="title is-4">Here's an overview of your pets:</h1>
      
      {loading ? (
        <div>Fetching your pets...</div>
      ) : (
        <div className="columns is-multiline is-centered">
          {petList.map((pet) => (
            <div key={pet._id} className="column is-one-quarter">
              <Link to={`/dashboard/${pet._id}`}>
                <div className="card pet-card card">
                  <div className="card-content has-text-centered">
                    <p className="title is-2 p-3">{pet.name}</p>  <p><strong>Age:</strong> {pet.age} years</p>
                    <p><strong>Weight:</strong> {pet.weight} kg</p>
                    <p><strong>Breed:</strong> {pet.breed}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="has-text-centered mt-5">
        <h2 className="title is-5">Want to add a new pet?</h2>
        <Link to="/add-pet">
          <button className="button is-large is-dark has-border has-text-weight-bold is-outlined">Add Pet Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default PetsOverview;
