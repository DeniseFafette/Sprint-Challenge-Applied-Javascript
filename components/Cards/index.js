// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articlesArray = ['bootstrap','javascript','jquery','node.js','technology',];

articlesArray.forEach((article) => {

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  
  // handle success
  .then(response => {

    const card = document.querySelector('.card')
    card.appendChild(
        articleCard(response.data))
    console.log(response);
  })

  // handle error
  .catch(error => console.log(error))
})

function articleCard(data) {
    const newCard = document.createElement('div');
        newHeadline = document.createElement('div');
        newHeadline.textContent = data.bootstrap.headline;
        newHeadline.textContent = data.javascript.headline;
        newHeadline.textContent = data.jquery.headline;
        newHeadline.textContent = data.node.headline;
        newHeadline.textContent = data.technology.headline;
        newHeadline.classList.add('headline');
        newCard.appendChild(newHeadline);

        newAuthor = document.createElement('div');
        newAuthor.classList.add('author');
        newCard.appendChild(newAuthor);

        newImgContainer = document.createElement('div');
        newImgContainer.classList.add('img-container');
        newAuthor.appendChild(newImgContainer);

        newImg = document.createElement('img');
        newImg.src = data.bootstrap.authorPhoto;
        newImg.src = data.javascript.authorPhoto;
        newImg.src = data.jquery.authorPhoto;
        newImg.src = data.node.authorPhoto;
        newImg.src = data.technology.authorPhoto;
        newImg.classList.add('img');
        newAuthor.appendChild(newImg);

        newName = document.createElement('span');
        newName.src = data.bootstrap.authorName;
        newName.src = data.javascript.authorName;
        newName.src = data.jquery.authorName;
        newName.src = data.node.authorName;
        newName.src = data.technology.authorName;
        newName.classList.add('name');
        newAuthor.appendChild(Newname);

    return newTabs;
}


