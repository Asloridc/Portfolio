import { useState } from 'react';

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
  tags: string[];
}

function Projects({ openModal }: ProjectsProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      thumbnail: '/RETEX/RETEX_S1ODOMO.png',
      fullImage: '/RETEX/RETEX_S1ODOMO.png',
      title: 'Odomo',
      shortDescription: 'Le premier projet effectué durant mes études, 2023.',
      fullDescription: "Odomo est mon premier projet académique réalisé en première année d'études supérieures. Ce projet consistait à développer une interface de gestion et d'analyse de données météorologiques permettant de collecter, stocker et visualiser différents types de données climatiques : pluviométrie, températures (minimales, maximales et moyennes), et relevés horaires. Développé entièrement en Java avec une approche orientée objet, ce projet m'a permis de découvrir les fondamentaux de la programmation structurée, la gestion des fichiers de données, et la création d'interfaces graphiques. Ce projet m'a enseigné l'importance de la rigueur dans la conception logicielle et m'a donné mes premières expériences en débogage et tests unitaires.",
      tags: ['Java']
    },
    {
      id: 2,
      thumbnail: '/RETEX/RETEX_S2IHM.png',
      fullImage: '/RETEX/RETEX_S2IHM.png',
      title: 'UniDeckBuildDuel',
      shortDescription: "Développement d'une application Windows Form.",
      fullDescription: "UniDeckBuildDuel est un jeu de cartes stratégique développé sous forme d'application Windows Forms en C#. Ce projet de deuxième semestre représente un jeu de deck-building tour par tour où deux joueurs s'affrontent en construisant intelligemment leur deck de cartes. Le système de jeu repose sur une économie de ressources : chaque carte possède un coût en ressources spécifiques et offre des effets variés. L'architecture du code suit le pattern MVC pour séparer la logique métier de l'interface graphique. Ce projet m'a permis de maîtriser la programmation événementielle, la gestion d'états complexes, et de découvrir les principes de game design et d'équilibrage de jeu.",
      tags: ['C#', 'Windows Forms', 'Desktop']
    },
    {
      id: 3,
      thumbnail: '/RETEX/RETEX_S2PIXELWAR.png',
      fullImage: '/RETEX/RETEX_S2PIXELWAR.png',
      title: 'Pixel War',
      shortDescription: "Recréeation du célèbre r/place PixelWar à l'aide d'une API.",
      fullDescription: "Pixel War est une recréation du célèbre événement r/place de Reddit, développée en JavaScript avec l'utilisation d'une API REST. Ce projet web interactif permet à plusieurs utilisateurs de placer des pixels colorés sur une toile partagée géante, créant ainsi une œuvre d'art collective en temps réel. L'application utilise des appels API pour synchroniser l'état de la toile entre tous les utilisateurs connectés, avec un rafraîchissement automatique. J'ai implémenté un système de cooldown pour limiter la fréquence de placement des pixels, un système de zoom et de navigation sur la toile, ainsi qu'un historique des modifications. Ce projet m'a fait découvrir la programmation asynchrone, la gestion d'événements en temps réel et les défis liés à la synchronisation d'états dans une application multi-utilisateurs.",
      tags: ['JavaScript', 'API', 'Web']
    },
    {
      id: 4,
      thumbnail: '/RETEX/RETEX_S2CLIMASTAT.png',
      fullImage: '/RETEX/RETEX_S2CLIMASTAT.png',
      title: 'ClimaStat',
      shortDescription: "Développer une application d'analyse de données climatiques en utilisant Visual Studio.",
      fullDescription: "ClimaStat est un projet d'équipe intensif réalisé en 10 jours dans le cadre d'un module d'analyse de données. Cette application desktop développée en C# avec Visual Studio permet d'importer, traiter et analyser de vastes ensembles de données climatiques. L'application offre des fonctionnalités avancées comme l'import de fichiers CSV volumineux et la génération de visualisations graphiques (courbes de tendances, diagrammes, cartes thermiques). L'interface intuitive permet de filtrer les données par période, région géographique, et type de mesure. Ce projet m'a enseigné l'importance du travail d'équipe sous pression, la gestion de versions avec Git, et les techniques d'optimisation pour traiter de grandes quantités de données.",
      tags: ['C#', 'Visual Studio', 'Desktop', 'Python', 'SQL', 'PEP']
    },
    {
      id: 5,
      thumbnail: '/RETEX/RETEX_S3ROBOCUP.png',
      fullImage: '/RETEX/RETEX_S3ROBOCUP.png',
      title: 'RoboCup',
      shortDescription: "Création d'une application Web.",
      fullDescription: "RoboCup est une application web complète développée avec Symfony (PHP) pour gérer l'ensemble des aspects organisationnels d'une compétition de football robotique. Cette plateforme offre un système de gestion des équipes participantes avec inscription en ligne et gestion des profils des robots. L'application permet de créer et planifier automatiquement des calendriers de matchs selon différents formats de compétition. Le système de scoring en temps réel permet aux arbitres de saisir les résultats via une interface dédiée, avec calcul automatique des classements. J'ai implémenté un système d'authentification robuste avec différents niveaux d'accès (administrateurs, équipes, spectateurs). La base de données SQL relationnelle gère les relations complexes entre équipes, matchs, et statistiques. L'interface responsive permet de consulter les résultats depuis n'importe quel appareil. Le projet inclut un tableau de bord administrateur avec statistiques. Ce projet m'a permis de maîtriser le pattern MVC, l'ORM Doctrine, le moteur de templates Twig, et les bonnes pratiques de développement web avec Symfony.",
      tags: ['PHP', 'Symfony', 'Web', 'MySQL']
    },
    {
      id: 6,
      thumbnail: '/Images/ProjetTsukuba/optimization_training_history.png',
      fullImage: '/Images/ProjetTsukuba/optimization_training_history.png',
      title: 'IA de classification des émotions transmises par la musique',
      shortDescription: "Développement d'une application de gestion de ville intelligente.",
      fullDescription: "Développement d'une application de gestion de ville intelligente en utilisant le framework Symfony. L'application permet de gérer les infrastructures urbaines, les services publics, la mobilité, l'énergie et l'environnement.",
      tags: ['Python', 'IA', 'Machine Learning']
    },
    {
      id: 7,
      thumbnail: '/Images/ProjetQrCode/carteChaleur.png',
      fullImage: '/Images/ProjetQrCode/qrcodecreation.png',
      title: 'Application Web QRCode',
      shortDescription: "Projet de recherche universitaire pour une expérience au sein de l'IUT",
      fullDescription: "Projet réalisé lors d'une expérience menée par un enseignant chercheur de mon IUT. Le but était de récupérer des feed-back des enseignants en scannant des QR codes disposés dans la salle où l'éxperience avait lieu. L'application web est divisée en 3 parties. Une partie professeur, où chaque professeur à son propore QRCode de connexion à scanner afin de donner leur feed-back. Une partie administrateur, où les personnes en charge de l'expérience peuvent voir les statistiques des feed-back en temps réel. Et une partie développeur où l'on peut trouver la documentation de l'API REST utilisée pour l'application.",
      tags: ['Express', 'React', 'TypeScript', 'PostgreSQL', 'Docker','Virtualisation', 'API', 'Web']
    },
    {
      id: 8,
      thumbnail: '/Images/Bezie/teaser_1.png',
      fullImage: '/Images/Bezie/teaser_2.png',
      title: 'Visualisation de graphes',
      shortDescription: "Application de visualisation de graphes avec edge bundling et algorithme de Prim.",
      fullDescription: "Application Java de visualisation de graphes utilisant l'edge bundling pour améliorer la lisibilité des diagrammes nœud-lien. Implémentation de l'algorithme de Prim pour extraire un arbre couvrant de poids minimal, puis routage des arêtes le long de cet arbre pour créer des faisceaux visuels cohérents. Le projet inclut une classe Graph complète, un système de chargement depuis fichiers, et a été testé sur des graphes réels comme celui des migrations américaines (1090 sommets, 5635 arêtes). Développé avec tests unitaires, analyse de complexité et diagrammes UML selon les bonnes pratiques orientées objet.",
      tags: ['Java', 'Graphes', 'Algorithmie', 'NetBeans', 'UML', 'Tests Unitaires']
    }
  ];

  // Extraire tous les tags uniques
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filtrer les projets en fonction des tags sélectionnés
  const filteredProjects = selectedTags.length === 0 
    ? projects 
    : projects.filter(project => 
        selectedTags.every(tag => project.tags.includes(tag))
      );

  // Gérer le clic sur un tag
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section id="projets" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Mes Projets</h2>
        
        {/* Filtres par technologie */}
        <div className="tags-filter">
          <div className="tags-filter-label">Filtrer par technologie :</div>
          <div className="tags-container">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <button className="clear-filters" onClick={() => setSelectedTags([])}>
              Effacer les filtres
            </button>
          )}
        </div>

        {/* Grille de projets */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  onClick={() => openModal(project.fullImage, project.title, project.fullDescription)}
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <p>Aucun projet ne correspond aux filtres sélectionnés.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
