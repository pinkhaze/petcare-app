import React from 'react';

function HelpPage() {
  return (
    <div className="section pt-0">
      <h1 className="title is-2 has-text-centered">HELP</h1>
      <div className="content">
        <p className="title is-3 has-text-centered">Welcome to the Help Center!</p>
        <p className="title is-4 has-text-centered">If you have any questions or need assistance, you've come to the right place. Below are some common topics and resources to help you get started.</p>
        <p className="title is-4 has-text-centered">How do I add a new pet?</p>
        <p className="title is-5 has-text-centered">To add a new pet, go the the "Add Pet" section in the navigation bar. Fill out the required informtion and click "Save."</p>
        <p className="title is-4 has-text-centered">How can I update my pet's health records?"</p>
        <p className="title is-5 has-text-centered">Navigate fo the "My Pets" section, select the pet you wish to update, and edit their health information as needed.</p>
        <p className="title is-4 has-text-centered">How can I delete a pet profile?</p>
        <p className="title is-5 has-text-centered">In the "My Pets" section, selelct the pet you want to delete and click the "Delete" button. You will be prompted to confirm you deletion action.</p>
      </div>
    </div>
  );
}

export default HelpPage;
