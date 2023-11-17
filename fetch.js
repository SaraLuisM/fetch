fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => makeList(json))

function makeList(json) {
  const ul = document.createElement('ul');

  for (let element of json) {
    let li = document.createElement('li');
    li.innerHTML = element.url;
    ul.appendChild(li);

    const result = document.querySelector('.result');
    result.appendChild(ul);
  }
}



// function displayImages() {
//   fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(data => {
//       result.innerHTML = `<img src="${data.url}"`
//     })
//     console.log(data);

// }

// displayImages();
