import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Expériences Professionnelles</h2>
      <div className="experience-item">
        <h3>SnoviBox SARL</h3>
        <p>Développement du back-end et du front-end d'une plateforme de gestion des projets des OSC avec Symfony 6, jQuery et ReactJs</p>
        <p className="date">Août 2022 - Janv 2023</p>
      </div>
      <div className="experience-item">
        <h3>SnoviBox SARL (Stagiaire)</h3>
        <p>Développement du back-end et du front-end du projet Tsimoka avec Symfony 5 et jQuery</p>
        <p className="date">Juin - Août 2022</p>
      </div>
      <div className="experience-item">
        <h3>BICI</h3>
        <p>Développement du back-end, front en JAVA/ReactJs (Vidy Varotra, Cemedi et autres)</p>
        <p className="date">Fév 2022 - Ce jour</p>
      </div>
    </section>
  );
};

export default Experience;
