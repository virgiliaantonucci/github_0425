/* //testing the API

// your code here
const baseUrl = 'https://api.openbrewerydb.org/breweries'

/* const cakeDetails = document.querySelector('.cake-details')

const cakeList = document.getElementById('cake-list')
const cakeName = document.getElementById('cake-name')
const cakeImage = document.getElementById('cake-image')
const cakeDescription = document.getElementById('cake-description')

const descriptionForm = document.getElementById('description-form')
const reviewForm = document.getElementById('review-form')
const reviewList = document.getElementById('review-list')

// fetch(`${baseUrl}/cakes/1`)
//   .then(res => res.json())
//   .then(cake => renderCake(cake))

// fetch(`${baseUrl}/cakes`)
//   .then(res => res.json())
//   .then(cakes => {
//     renderMenu(cakes)
// })
*/

/* function getCakes() {
fetch(`${baseUrl}`)
    .then(resp => resp.json())
    .then(cakes => console.log(cakes))
}

getCakes() */


/* let request = new Request('https://api.openbrewerydb.org/breweries', {
    headers: new Headers({
        'Content-Type': 'text/json' 
    }),
    method: 'GET'
}); */

/* fetch('https://api.openbrewerydb.org/breweries').then((response) => {
    resp => resp.json()
    console.log(response);
    return response.text;
    
}); */

fetch(`https://api.openbrewerydb.org/breweries`)
    .then(resp => resp.json())
    .then(breweries => console.log(breweries))

    