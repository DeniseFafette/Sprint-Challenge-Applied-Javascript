// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const newsHeader = document.querySelector('.header-container');

data.forEach(item => {
    newsHeader.appendChild(Header(item.title,item.date,item.temp,));
});

function createHeader(title,date,temp) {
    const headerDiv = document.createElement('div');
    const headerTitle = document.createElement('h1');
    const headerDate = document.createElement('span');
    const headerTemp = document.createElement('span');

    headerTitle.textContent = title;
    headerDate.textContent = date;
    headerTemp.textContent = temp;

    headerDiv.classList.add('header');
    headerTitle.classList.add('title');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    return headerDiv;
}

console.log(createHeader);
