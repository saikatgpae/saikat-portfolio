function menuChange(e) {
    e.classList.toggle("change");


    //changing the background of body class
    let body = document.querySelector('.body');
    body.classList.toggle('bodyTrans');

    //Change the background colour of header
    let header = document.querySelector('.header');
    header.classList.toggle('headertrans');

    //hide the header logo
    let headerLogo = document.querySelector('.header-logo');
    headerLogo.classList.toggle('inVisible');

    //Hide body content
    let bodyContent = document.querySelector('.body-content');
    bodyContent.classList.toggle('display-none');

    // Unhide the menu option .onclick div
    let click = document.querySelector('.onclick');
    click.classList.toggle('clicked');

    
  }