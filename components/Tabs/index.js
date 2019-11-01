// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsArray = ['javascript', 'bootstrap', 'technology', 'jquery', 'node.js',];

topicsArray.forEach((topic) => {

axios.get(`https://lambda-times-backend.herokuapp.com/${topics}`)
  
  // handle success
  .then(response => {

    const tab = document.querySelector('.tab')
    tab.appendChild(
      newTabs(response.data)
    )
    console.log(response);
  })

  // handle error
  .catch(error => console.log(error))
})

function newTabs(data) {
    const newTab = document.createElement('div');
    newTab.textContent = data.topic;
    newTab.classList.add('tab');
    newTab.appendChild();

    return newTabs;
}
