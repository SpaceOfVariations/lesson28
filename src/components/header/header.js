/* eslint-disable no-param-reassign */

import headerTemplate from './header.hbs';

var headerContainer = document.getElementById('header-hbs');

var navigationLinks = [{
  label: 'Home',
  url: 'index.html',
  active: true,
}, {
  label: 'Features',
  url: '#',
},
{
  label: 'Options',
  url: '#',
},
{
  label: 'Products',
  url: 'products',
},
];

navigationLinks = navigationLinks.map((navigationItem) => {
  if (document.location.pathname.includes(navigationItem.url)) {
    navigationItem.active = true;
  } else {
    navigationItem.active = false;
  }

  return navigationItem;
});

if (headerContainer) {
  headerContainer.innerHTML = headerTemplate({ navigationLinks });
}
