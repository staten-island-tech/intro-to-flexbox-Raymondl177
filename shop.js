const landmarks = [
  {
    name: "White house",
    price: 67000000000,
    inStock: true,
    continent: "North America",
    img: "images/white-house.jpg",
  },
  {
    name: "Eiffel Tower",
    price: 2500000000,
    inStock: true,
    continent: "Europe",
    img: "images/eiffel-tower.webp",
  },
  {
    name: "Great Wall of China",
    price: 50000000000,
    inStock: true,
    continent: "Asia",
    img: "images/great-wall-of-china.webp",
  },
  {
    name: "Taj Mahal",
    price: 10000000000,
    inStock: true,
    continent: "Asia",
    img: "images/taj-mahal.jpg",
  },
  {
    name: "Statue of Liberty",
    price: 3000000000,
    inStock: true,
    continent: "North America",
    img: "images/statue-of-liberty.jpg",
  },
  {
    name: "Colosseum",
    price: 1200000000,
    inStock: true,
    continent: "Europe",
    img: "images/colosseum.webp",
  },
  {
    name: "Machu Picchu",
    price: 6000000000,
    inStock: true,
    continent: "South America",
    img: "images/machu-picchu.jpg",
  },
  {
    name: "Sydney Opera House",
    price: 2000000000,
    inStock: true,
    continent: "Australia",
    img: "images/sydney-opera-house.jpg",
  },
  {
    name: "Big Ben",
    price: 5000000000,
    inStock: true,
    continent: "Europe",
    img: "images/big-ben.jpg",
  },
  {
    name: "Pyramids of Giza",
    price: 30000000000,
    inStock: true,
    continent: "Africa",
    img: "images/pyramids-of-giza.jpg",
  },
  {
    name: "Washington Monument",
    price: 3000000000,
    inStock: true,
    continent: "North America",
    img: "images/washington-monument.jpg",
  },
  {
    name: "Leaning Tower of Pisa",
    price: 1000000000,
    inStock: true,
    continent: "Europe",
    img: "images/leaning-tower-of-pisa.jpg",
  },
  {
    name: "Parthenon",
    price: 1000000000,
    inStock: true,
    continent: "Europe",
    img: "images/parthenon.jpg",
  },
  {
    name: "Mount Fuji",
    price: 500000000,
    inStock: true,
    continent: "Asia",
    img: "images/mount-fuji.jpg",
  },
  {
    name: "Burj Khalifa",
    price: 1500000000,
    inStock: true,
    continent: "Asia",
    img: "images/burj-khalifa.jpg",
  },
  {
    name: "Christ the Redeemer",
    price: 800000000,
    inStock: true,
    continent: "South America",
    img: "images/christ-the-redeemer.jpg",
  },
  {
    name: "Stonehenge",
    price: 300000000,
    inStock: true,
    continent: "Europe",
    img: "images/stonehenge.jpg",
  },
  {
    name: "Colossus of Rhodes",
    price: 2000000000,
    inStock: true,
    continent: "Europe",
    img: "images/colossus-of-rhodes.webp",
  },
  {
    name: "Moai Statues",
    price: 750000000,
    inStock: true,
    continent: "South America",
    img: "images/moai-statues.jpg",
  },
  {
    name: "Moon",
    price: 1000000000000,
    inStock: true,
    continent: "Space",
    img: "images/moon.jpg",
  },
];

/* landmarks.forEach((landmark) => console.log(landmark.continent)) */

//create inject function
function inject(landmark) {
  //query the container
  //using adjacent html push card into container
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img class="card-image" src=${landmark.img} alt=${landmark.name}/>
      <h1 class="card-title"> ${landmark.name}</h1>
      <p class="card-continent">${landmark.continent}</p>
      <p class="card-price"> $${landmark.price}</p>
      <button class="cart-button">Add to Cart</button>
    </div>`
  );
}

landmarks.forEach((landmark) => inject(landmark));
//loop through items

function addToCart() {
  const buttons = document.querySelectorAll(".cart-button");
  const btnArray = Array.from(buttons);
  btnArray.forEach((button) =>
    button.addEventListener("click", function (event) {
      console.log(event.target.closest(".card").querySelector(".card-title").textContent);
      button.textContent = "Added!";
      setTimeout(() => {
        button.textContent = "Add to Cart";
      }, 1000);
    })
  );
}
addToCart();
