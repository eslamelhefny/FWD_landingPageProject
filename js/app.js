/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbar__list = document.getElementById("navbar__list");
const sectionList = Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sectionList.forEach(element => {
  let creatNewListItem = document.createElement("li");
  creatNewListItem.innerHTML = `<li><a href = "#${element.id}" data-nav = "${element.id}" class = "menu__link">${element.dataset.nav}</a></li>`;
  navbar__list.appendChild(creatNewListItem);
  // console.log(element); 

});

// Add class 'active' to section when near top of viewport
window.onscroll = function(){
  sectionList.forEach(element => {
    if(element.getBoundingClientRect().top >= -400 && element.getBoundingClientRect().top <= 150 )
    {
      element.classList.add("your-active-class");
    }
    else{
      element.classList.remove("your-active-class");
  
    }
  });
};

// Scroll to anchor ID using scrollTO event
navbar__list.addEventListener("click" , (eo) => { 
  eo.preventDefault();
  if(eo.target.dataset.nav){
    document.getElementById(`${eo.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
    setTimeout(() => { 
      location.hash = `${eo.target.dataset.nav}`;
     },500)
  }
 })

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active