/* eslint-disable */


//MOBILE POP MENU

function close(){
  location.reload();
}



function menuChange(e) {
  // document.getElementById('nav1').classList.toggle('change')
  e.classList.toggle('change');
  // e.preventDefault();
 
  // const main = document.querySelector('.main');
  // main.classList.toggle('fixed');

  // Changing the background of body class
  const body = document.querySelector('.body');
  body.classList.toggle('bodyTrans');

  // Change the background colour of header
  const header = document.querySelector('.header');
  header.classList.toggle('headertrans');

  // Hide the header logo
  const headerLogo = document.querySelector('.header-logo');
  headerLogo.classList.toggle('invisible');

  // Hide body content
  const bodyContent = document.querySelector('.body-content');
  bodyContent.classList.toggle('display-none');

  // Unhide the menu option .onclick div
  const click = document.querySelector('.onclick');
  click.classList.toggle('clicked');
}

menuChange();
// DIFFERENT POP UP WINDOWS FOR MOBILE AND DESKTOP VERSION

const mq = window.matchMedia('(max-width: 768px)');
function seeProject() {
  if (mq.matches) {
    // fix the pop up window
    const body = document.querySelector('#p1');
    body.classList.add('fixed', 'project_span');

    // Add the project connten para
    const project1 = document.querySelector('.project1-para');
    project1.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident illum ab explicabo quasi officiis quas doloribus vero perferendis, repellat error temporibus eum minima recusandae corrupti, pariatur quibusdam voluptates tempora odio, dicta deleniti quos molestias! Corporis, libero voluptates. Amet, ea.';

    // Hide the See Prject button & Show the live, source button
    document.querySelector('.see-project-button').style.display = 'none';
    document.querySelector('.see-live-button').style.display = 'block';
    document.querySelector('.see-source-button').style.display = 'block';

    // show the image 2 and block image 1
    document.querySelector('#pr1Image').style.display = 'none';
    document.querySelector('#prImage1').style.display = 'block';

    // show the cross sighn
    document.querySelector('.cross').style.display = 'block';
  } else {
    // fix the pop up window
    const body = document.querySelector('#p1');
    body.classList.add('fixed', 'project_span_desktop');

    // Add the project connten para
    const project1 = document.querySelector('.project1-para');
    project1.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi provident illum ab explicabo quasi officiis quas doloribus vero perferendis, repellat error temporibus eum minima recusandae corrupti, pariatur quibusdam voluptates tempora odio, dicta deleniti quos molestias! Corporis, libero voluptates. Amet, ea.';
    // show the cross sighn
    document.querySelector('.cross').style.display = 'block';

    // change the .project-info display to flex
    const prjInfo = document.querySelector('.project-info');
    prjInfo.classList.add('project-info-desktop');

    // Hide the See Prject button & Show the live, source button
    document.querySelector('.see-project-button').style.display = 'none';
    document.querySelector('.see-live-button').style.display = 'block';
    document.querySelector('.see-source-button').style.display = 'block';

    // Show the other buttons
    document.querySelector('#grb1', '#grb2', '#grb3', '#grb4').style.display = 'block';

    // show the image 2 and block image 1
    document.querySelector('#pr1Image').style.display = 'none';
    document.querySelector('#prImage1').style.display = 'block';

    const projectInfo = document.querySelector('.project-info');
    projectInfo.classList.remove('project-info');
  }
}

//
// Email validation
//

function validateEmail(email) {
  const email1 = document.getElementById('email').value;
  if (email1 == email1.toLowerCase()) {
    // alert('email is valid');
    document.forms.email.focus();
    return true;
  }

  document.querySelector('.error-msg-before').classList.add('error-msg-after');
  return false;
}

/* eslint-enable */