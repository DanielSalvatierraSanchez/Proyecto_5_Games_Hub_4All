import './footer.css';
import { dataFooter } from "../../../utils/dataFooter.js";

// crear elemenmtos del footer
export const Footer = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  const titleFooter = document.createElement('h3');
  titleFooter.classList = 'title-footer';
  titleFooter.textContent = dataFooter.footer;
  const ulFooter = document.createElement('ul');
  ulFooter.classList = 'ul-footer';
  
  // bucle para crear elementos obtenidos del array
  for (const rrss of dataFooter.rrss) {
    const li = document.createElement('li');
    li.classList = rrss.classLink
    const a = document.createElement('a');
    a.href = rrss.href;
    a.target = rrss.target;
    const img = document.createElement('img');
    img.classList = rrss.classImg;
    img.src = rrss.src;
    ulFooter.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
  };

  document.body.append(footer);
  footer.append(titleFooter, ulFooter);
};