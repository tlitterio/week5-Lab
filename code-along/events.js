// GEt a reference to the "Click Me" button
let clickMeButton = document.querySelector(`.click-me`)

//Write an even listener for clickme button
clickMeButton.addEventListener(`click`, async function(event){
  // alert(`hi! the butto was clicked!`)
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)
  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`

})

// Get a reference to the link that says add a movie
let addMovieLink = document.querySelector(`.add-movie`)

//event listener for add movie link
addMovieLink.addEventListener(`click`, async function(event){
  //prevent link default bahvior
  event.preventDefault()

  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)
})

//get refernce of zoom-image button
let zoomIMageButton = document.querySelector(`.zoom-image`)

//create event listener for zoom image
zoomIMageButton.addEventListener(`click`, async function(event){
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  image.classList.toggle(`border-pink-500`)

  //make the image fukll screen
  image.classList.toggle(`w-96`)
  image.classList.toggle(`w-full`)

})

//get ref to change-image button
let changeImageButton = document.querySelector(`.change-image`)

//event listener for change image
changeImageButton.addEventListener(`click`, async function(event){
  //get ref to image
  let image = document.querySelector(`img`)
  image.setAttribute(`src`,`../images/grogu2.jpg`)
})

//get reference to say hi button
let sayHiButton=document.querySelector(`.say-hi`)

//event listener for say hi
sayHiButton.addEventListener(`click`, async function(event){
  event.preventDefault()
  //get refernce to first name input
  let firstNameInput = document.querySelector(`#first-name`)

  //get the value of the field that was eneterd
  let firstName = firstNameInput.value
  if (firstName.length >0){
    
  }
  else {sentence = `Enter a name`}
  greetElement.innerHTML = sentence
})