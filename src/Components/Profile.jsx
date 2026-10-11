import React from 'react';

function Profile({ summary }) {
  return (
    <section className="profile">
      <h3>Personal Profile</h3>
      <p>{summary}</p>
    </section>
  );
}

export default Profile;