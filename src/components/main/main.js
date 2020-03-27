
import mainTemplate from './main.hbs';

const mainContainer = document.getElementById('main-hbs');

const profile = {
  username: 'Andrei',
};

const links = ['google', 'twitter'];

if (mainContainer) {
  mainContainer.innerHTML = mainTemplate({ profile, links });
}
