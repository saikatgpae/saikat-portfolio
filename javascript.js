/* eslint-disable */

function menuChange(e) {
  e.classList.toggle('change');

  // Changing the background of body class
  const body = document.querySelector('.body');
  body.classList.toggle('bodyTrans');

  // Change the background colour of header
  const header = document.querySelector('.header');
  header.classList.toggle('headertrans');

  // Hide the header logo
  const headerLogo = document.querySelector('.header-logo');
  headerLogo.classList.toggle('inVisible');

  // Hide body content
  const bodyContent = document.querySelector('.body-content');
  bodyContent.classList.toggle('display-none');

  // Unhide the menu option .onclick div
  const click = document.querySelector('.onclick');
  click.classList.toggle('clicked');
}

/* eslint-enable */