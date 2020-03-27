module.exports = (arg1, arg2, options) => {
  // CHECK ON OPTIONS AND THIS CONTEXTS TO SEE WHAT PROPERTIES ARE AVAILABLE
  // console.log(options, this);
  if (arg1 === arg2) {
    return `<a href=${options.data.root.links.productDetails}>${arg1}</a>`;
  }

  return '';
};
