interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'IDE',
      skills: [
        { name: 'VSCode', level: 4 },
        { name: 'Netbeans', level: 4 },
        { name: 'JetBrins IDEs', level: 3 }
      ]
    },
    {
      title: 'Front-end',
      skills: [
        { name: 'HTML/CSS', level: 4 },
        { name: 'JavaScript', level: 4 },
        { name: 'React', level: 1 }
      ]
    },
    {
      title: 'Back-end',
      skills: [
        { name: 'PHP', level: 3 },
        { name: 'SQL', level: 4 }
      ]
    },
    {
      title: 'Langages',
      skills: [
        { name: 'JAVA', level: 4 },
        { name: 'Python', level: 4 },
        { name: 'C#', level: 4 },
        { name: 'C', level: 3 }
      ]
    }
  ];

  const SkillRating = ({ level }: { level: number }) => (
    <div className="skill-rating">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`skill-dot ${dot <= level ? 'filled' : ''}`}
        ></div>
      ))}
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span>{skill.name}</span>
                    <SkillRating level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
