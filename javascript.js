
let nav1 = document.querySelector('#bar1','#bar2','#bar3');

nav1.addEventListener('click', (event)=>{
  // alert('clicked');
  // event.preventDefault();
  event.stopPropagation();
  
  document.querySelector('.main').classList.toggle('fixed');


  document.querySelector('#nav1').classList.toggle('change');
  
  // Changing the background of body class
  document.querySelector('.body').classList.toggle('bodyTrans');
  
  // Change the background colour of header
  document.querySelector('.header').classList.toggle('headertrans');
  
  // Hide the header logo
  document.querySelector('.header-logo').classList.toggle('inVisible');
  // Hide body content
  document.querySelector('.body-content').classList.toggle('display-none');
  // Unhide the menu option .onclick div
  document.querySelector('.onclick').classList.toggle('clicked');
  
})




document.querySelectorAll('.menu-item').forEach(n=>n.addEventListener('click', ()=>{
  document.querySelector('.main').classList.remove('fixed');
  document.querySelector('#nav1').classList.remove('change');
  document.querySelector('.body').classList.remove('bodyTrans');
  document.querySelector('.header').classList.remove('headertrans');
  document.querySelector('.header-logo').classList.remove('inVisible');
  document.querySelector('.body-content').classList.remove('display-none');
  document.querySelector('.onclick').classList.remove('clicked');
  
}));





/* eslint-disable 


let nav1 = document.querySelector('.nav1');

function menuChange() {
  
  
  

  
  
  

  
  
  

  
  
  

  
  
  

  
  
  
}

nav1.addEventListener('click', menuChange);
eslint-enable */