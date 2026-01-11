function About() {
  return (
    <section className="about-section" id="APropos">
      <div className="about-container">
        <div className="about-content">
          <h2>À Propos de Moi</h2>
          <p>
            Actuellement étudiant en 3ème année de BUT Informatique à l'IUT de Bordeaux Gardignan, 
            je développe ma passion pour le code et les nouvelles technologies. Mon parcours m'a 
            permis de découvrir différents aspects du développement, de la création d'interfaces 
            utilisateur à la gestion de bases de données.
          </p>
          <p>
            Ce qui me motive particulièrement, c'est de voir mes projets prendre vie et être utilisés. 
            J'aime travailler sur l'expérience utilisateur, cherchant toujours à 
            rendre les interfaces intuitives et agréables à utiliser.
          </p>
        </div>
        <div className="about-image">
          <img src="/Images/Portrait.JPG" alt="Portrait de Thomas Des Deserts" />
        </div>
      </div>
    </section>
  );
}

export default About;
