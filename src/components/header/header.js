/* eslint-disable no-param-reassign */

import headerTemplate from './header.hbs';

const headerContainer = document.getElementById( 'header-hbs' );

let navigationLinks = [{
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
}, {
	label: 'Contact Us',
	url: 'contactus',
}
];

navigationLinks = navigationLinks.map( ( navigationItem ) => {
	if ( document.location.pathname.includes( navigationItem.url ) ) {
		navigationItem.active = true;
	} else {
		navigationItem.active = false;
	}

	return navigationItem;
} );

if ( headerContainer ) {
	headerContainer.innerHTML = headerTemplate( { navigationLinks } );
}
