const readMoreSection = document.querySelector('.read-more-less');

function readMoreLessHandler(event) {
  var { target } = event;

  if (target.classList.contains('read-more-less__cta')) {
    var parent = target.parentNode;
    parent.querySelector('.read-more-less__extended').classList.toggle('hide');
    parent.querySelector('.read-more-less__cta.hide').classList.toggle('hide');
    target.classList.add('hide');
  }
}

if (readMoreSection) {
  readMoreSection.addEventListener('click', readMoreLessHandler);
}
