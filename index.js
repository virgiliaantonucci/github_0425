const breweryDetails = document.querySelector('.brewery-details');
const breweryList = document.getElementById('brewery-list');
const breweryName = document.getElementById('brewery-name');
const breweryImgine = document.getElementById('brewery-image');
const breweryDescription = document.getElementById('brewery_type');
const descriptionForm = document.getElementById('description-form');
const reviewForm = document.getElementById('review-form');
const reviewList = document.getElementById('review-list');


fetch('https://api.sampleapis.com/beers/stouts')
    .then(resp => resp.json())
     .then(brewery => {
         renderAllBreweries(brewery);
     });

     function renderAllBreweries(brewery) {
         breweryList.innerHTML = '';
         brewery.forEach(brewery => {
             const li = document.createElement('li');
             li.innerText = brewery.name;
             breweryList.appendChild(li);
         })
     }







// fetch(`https://api.openbrewerydb.org/breweries`)
//      .then(resp => resp.json())
//      .then(brewery => {
//          renderOneBrewery(brewery[2]);
//      })

//      function renderOneBrewery(brewery) {
//         breweryName.innerText = brewery.name;


// }
//  fetch(`https://api.openbrewerydb.org/breweries`)
//      .then(resp => resp.json())
//      .then(breweries =>  {
//          renderBreweries(breweries);
//          console.log(breweries);
//      });

//      function renderBreweries(brewery) {
//          breweryList.innerHTML = '';
//          brewery.forEach(brewery => {
//              const li = document.createElement('li');
//              li.innerText = brewery.name;
//              breweryList.appendChild(li);

            
                
            
//          })    
//  };
//      reviewForm.addEventListener('submit', (e) => handleReviewForm(e));

//      function handleReviewForm(e) {
//          e.preventDefault();

//          const li = document.createElement('li');
//          li.innerText = reviewForm.review.value;
//          reviewList.appendChild(li);

//          reviewForm.reset();
//      }
    
//      descriptionForm.addEventListener('submit', (e) => handleDescriptionForm(e));

//      function handleDescriptionForm(e) {
//          e.preventDefault();
//          const li = document.createElement('li');
//          li.innerText = descriptionForm.description.value;
//          breweryDescription.appendChild(li);

//          descriptionForm.reset();
//      }
     