interface ProjectsProps {
  openModal: (image: string, title: string, context: string) => void;
}

interface Project {
  id: number;
  thumbnail: string;
  fullImage: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

function Projects({ openModal }: ProjectsProps) {
  const projects: Project[] = [
    {
      id: 1,
      thumbnail: '/RETEX/RETEX_S1ODOMO.png',
      fullImage: '/RETEX/RETEX_S1ODOMO.png',
      title: 'Odomo',
      shortDescription: 'Le premier projet effectué durant mes études, 2023.',
      fullDescription: "Projet de première année visant à développer une interface de gestion de données météorologiques telles que la pluviométrie, la température et les heures. Projet développé en Java."
    },
    {
      id: 2,
      thumbnail: '/RETEX/RETEX_S2IHM.png',
      fullImage: '/RETEX/RETEX_S2IHM.png',
      title: 'UniDeckBuildDuel',
      shortDescription: "Développement d'une application Windows Form.",
      fullDescription: "Développement d'une application Windows Form. Consiste en un jeu tour par tour où le joueur doit construire un deck de cartes pour affronter un adversaire. Les cartes coûtent certaines ressources et ont des effets différents."
    },
    {
      id: 3,
      thumbnail: '/RETEX/RETEX_S2PIXELWAR.png',
      fullImage: '/RETEX/RETEX_S2PIXELWAR.png',
      title: 'Pixel War',
      shortDescription: "Recréeation du célèbre r/place PixelWar à l'aide d'une API.",
      fullDescription: "Recréation du célèbre r/place PixelWar en utilisant une API web."
    },
    {
      id: 4,
      thumbnail: '/RETEX/RETEX_S2CLIMASTAT.png',
      fullImage: '/RETEX/RETEX_S2CLIMASTAT.png',
      title: 'ClimaStat',
      shortDescription: "Développer une application d'analyse de données climatiques en utilisant Visual Studio.",
      fullDescription: "Dans ce projet en équipe, nous avons du créer une application d'analyse de données climatiques en utilisant Visual Studio. Nous avions 10 jours pour la développer."
    },
    {
      id: 5,
      thumbnail: '/RETEX/RETEX_S3ROBOCUP.png',
      fullImage: '/RETEX/RETEX_S3ROBOCUP.png',
      title: 'RoboCup',
      shortDescription: "Création d'une application Web.",
      fullDescription: "Développement d'une application web en Symfony permettant de gérer des compétions de football robotique. Cette application permet de gérer les équipes, les matchs, les scores, les classements, l'authentification et les rencontres."
    }
  ];

  return (
    <section id="projets" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.thumbnail}
                alt={project.title}
                onClick={() => openModal(project.fullImage, project.title, project.fullDescription)}
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
