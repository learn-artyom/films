import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.svg" />
      </div>
      <nav className="header-nav">
        <a href="/" className="header-nav__link header-nav__link--active">Поиск фильмов</a>
        <a href="/" className="header-nav__link">Мои фильмы <span className="header-nav__counter-link">2</span></a>
        <a href="/" className="header-nav__link header-nav__link-login">Войти</a>
      </nav>
    </header>
  );
}

export default Header;