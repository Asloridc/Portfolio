interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header>
      <nav>
        <div>
          <a href="#accueil">Accueil</a>
          <a href="#APropos">A Propos</a>
          <a href="#projets">Projets</a>
          <a href="#skills">Compétences</a>
          <a href="#contact">Contact</a>
        </div>
        <label className="theme-switch">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  );
}

export default Header;
