import contactUsFormTemplate from './contactus-form.hbs';

const contactUsFormContainer = document.getElementById('conact-form-hbs');

const scope = {
  title: 'Contact US TEMPLATE',
};

if (contactUsFormContainer) {
  contactUsFormContainer.innerHTML = contactUsFormTemplate({ scope });
}
