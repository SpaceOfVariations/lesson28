import headerTemplate from './footer.hbs';

var headerContainer = document.getElementById('footer-hbs');

if (headerContainer) {
  headerContainer.innerHTML = headerTemplate({});
}
