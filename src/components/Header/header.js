import './header.css';

export const Header = () => {
  const header = document.createElement('header');
  const titleHeader = document.createElement('h1');
  const reloadPage = document.createElement('a');
  
  header.id = 'header';
  titleHeader.classList = 'title-header';
  titleHeader.textContent = 'GAMES HUB 4ALL';
  reloadPage.href = "";
  
  document.body.append(header)
  header.append(reloadPage);
  reloadPage.append(titleHeader);
};