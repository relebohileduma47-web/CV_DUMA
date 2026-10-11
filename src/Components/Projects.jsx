import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h3>Featured Projects</h3>
      <div className="item">
        <h4>1. TaskFlow — Kanban Project Management App</h4>
        <p>A drag-and-drop task management tool built with Next.js, Node.js, and PostgreSQL featuring real-time updates.</p>
      </div>
      <div className="item">
        <h4>2. EcoShop — Sustainable E-Commerce Platform</h4>
        <p>Designed and deployed a full-featured online storefront with modern cart features and Stripe API integration.</p>
      </div>
    </section>
  );
}

export default Projects;