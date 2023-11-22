const app = document.getElementById("app");
const loading = document.getElementById("loading");

loading.style.color = 'black';

async function getImages(number = 12) {
  loading.textContent = 'Loading...';
  app.textContent = '';
  try {
    const randomNumber = Math.floor(Math.random() * 200)

    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await response.json()
    const dataSlice = data.slice(randomNumber, randomNumber + number)

    setTimeout(() => {
      printList(dataSlice)
    }, 1000);

  } catch (error) {
    console.error(error)
  } finally {
    setTimeout(() => {
      loading.textContent = ''
    }, 900)
  }
}


function printList(data = []) {
  let list = '';
  data.map((element) => {
    list += cart(element.id, element.title)
  })
  app.innerHTML = `<ul>${list}</ul>`
}


function cart(id, title) {
  return (
    `<li class='card'>
      <img src="https://picsum.photos/id/${id}/200/300" alt="${title}" >
      <div class='title'>${title}</div>
    </li>`
  )
}




// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => makeList(json))

// function makeList(json) {
//   const ul = document.createElement('ul');

//   for (let element of json) {
//     let li = document.createElement('li');
//     li.innerHTML = `<img src="${element.url}"/>`;
//     ul.appendChild(li);

//     const result = document.querySelector('.result');
//     result.appendChild(ul);
//   }
// }
