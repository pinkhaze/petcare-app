import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import HomePage from './pages/HomePage';
import PetsOverview from './pages/PetsOverview';
import AddPetProfile from './pages/AddPetProfile';
import Dashboard from './pages/Dashboard';
import HelpPage from './pages/HelpPage';

import Navbar from './components/Navbar';
import Header from './components/Header';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container is-fluid p-5">
          <div className="columns">
            <div className="column is-half">
              <Header />
            </div>
            <div className="column is-half">
              <Navbar />
            </div>
          </div>
        <Routes>y
          <Route 
            path="/" 
            element={<HomePage />}
          />
          <Route 
            path="/pets-overview" 
            element={<PetsOverview />}
          />
          <Route 
            path="/add-pet" 
            element={<AddPetProfile />}
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard />}
          />
          <Route 
            path="/dashboard/:id" 
            element={<Dashboard />}
          />
          <Route 
            path="/help-page" 
            element={<HelpPage />}
          />
        </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;


