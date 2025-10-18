const landmarks = [
  {
    name: "White house",
    price: 67000000000,
    continent: "North America",
    filter: "All",
    img: "images/white-house.jpg",
  },
  {
    name: "Eiffel Tower",
    price: 25000000000,
    continent: "Europe",
    filter: "All",
    img: "images/eiffel-tower.webp",
  },
  {
    name: "Great Wall of China",
    price: 50000000000,
    continent: "Asia",
    filter: "All",
    img: "images/great-wall-of-china.webp",
  },
  {
    name: "Taj Mahal",
    price: 10000000000,
    continent: "Asia",
    filter: "All",
    img: "images/taj-mahal.jpg",
  },
  {
    name: "Statue of Liberty",
    price: 3000000000,
    continent: "North America",
    filter: "All",
    img: "images/statue-of-liberty.jpg",
  },
  {
    name: "Colosseum",
    price: 1200000000,
    continent: "Europe",
    filter: "All",
    img: "images/colosseum.webp",
  },
  {
    name: "Machu Picchu",
    price: 6000000000,
    continent: "South America",
    filter: "All",
    img: "images/machu-picchu.jpg",
  },
  {
    name: "Sydney Opera House",
    price: 2000000000,
    continent: "Australia",
    filter: "All",
    img: "images/sydney-opera-house.jpg",
  },
  {
    name: "Big Ben",
    price: 5000000000,
    continent: "Europe",
    filter: "All",
    img: "images/big-ben.jpg",
  },
  {
    name: "Pyramids of Giza",
    price: 30000000000,
    continent: "Africa",
    filter: "All",
    img: "images/pyramids-of-giza.jpg",
  },
  {
    name: "Washington Monument",
    price: 3000000000,
    continent: "North America",
    filter: "All",
    img: "images/washington-monument.jpg",
  },
  {
    name: "Leaning Tower of Pisa",
    price: 1000000000,
    continent: "Europe",
    filter: "All",
    img: "images/leaning-tower-of-pisa.jpg",
  },
  {
    name: "Parthenon",
    price: 1000000000,
    continent: "Europe",
    filter: "All",
    img: "images/parthenon.jpg",
  },
  {
    name: "Mount Fuji",
    price: 500000000,
    continent: "Asia",
    filter: "All",
    img: "images/mount-fuji.jpg",
  },
  {
    name: "Burj Khalifa",
    price: 1500000000,
    continent: "Asia",
    filter: "All",
    img: "images/burj-khalifa.jpg",
  },
  {
    name: "Christ the Redeemer",
    price: 800000000,
    continent: "South America",
    filter: "All",
    img: "images/christ-the-redeemer.jpg",
  },
  {
    name: "Stonehenge",
    price: 300000000,
    continent: "Europe",
    filter: "All",
    img: "images/stonehenge.jpg",
  },
  {
    name: "Colossus of Rhodes",
    price: 2000000000,
    continent: "Europe",
    filter: "All",
    img: "images/colossus-of-rhodes.webp",
  },
  {
    name: "Moai Statues",
    price: 750000000,
    continent: "South America",
    filter: "All",
    img: "images/moai-statues.jpg",
  },
  {
    name: "Moon",
    price: 1000000000000,
    continent: "Space",
    filter: "All",
    img: "images/moon.jpg",
  },
];

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
      <p class="card-price" data-price="${landmark.price}"> $${landmark.price}</p>
      <button class="cart-button">Add to Cart</button>
    </div>`
  );
}

landmarks.forEach((landmark) => inject(landmark));
//loop through items

let subtotal = 0;
function addToCart() {
  const buttons = document.querySelectorAll(".cart-button");
  const btnArray = Array.from(buttons);
  const cartContainer = document.querySelector(".cart-container");
  const subtotalElement = document.querySelector(".subtotal");
  btnArray.forEach((button) =>
    button.addEventListener("click", function (event) {
      const itemPrice = event.target
        .closest(".card")
        .querySelector(".card-price").dataset.price;
      subtotal += parseInt(itemPrice);
      subtotalElement.textContent = `$${subtotal.toLocaleString()}`;
      button.textContent = "Added!";
      setTimeout(() => {
        button.textContent = "Add to Cart";
      }, 1500);
      cartContainer.style.display = "flex";
    })
  );
}
addToCart();

function cartItems() {
  const cartButtons = document.querySelectorAll(".cart-button");
  const cartItemsContainer = document.querySelector(".cart-items");
  cartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const itemName = event.target
        .closest(".card")
        .querySelector(".card-title").textContent;
      const itemPrice = event.target
        .closest(".card")
        .querySelector(".card-price").textContent;
      cartItemsContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="cart-items">
          <span class="product-name">${itemName}</span>
          <span class="product-price">${itemPrice}</span>
        </div>`
      );
    });
  });
}
cartItems();

let count = 0;
function itemCountUpdate() {
  const cartButtons = document.querySelectorAll(".cart-button");
  const itemCount = document.querySelector(".item-count");
  cartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      count++;
      if (itemCount) itemCount.textContent = `${count} items`;
    });
  });
}
itemCountUpdate();

function cartButton() {
  const cartButtons = document.querySelectorAll(".cart-icon");
  const cartContainer = document.querySelector(".cart-container");
  const target = document.getElementById("bottom");
  cartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      cartContainer.style.display = "flex";
      if (target) {
        target.scrollIntoView({ behavior: "auto" });
      }
    });
  });
}
cartButton();

function filterContinent() {
  const filterButtons = document.querySelectorAll(".nav-filter");
  const container = document.querySelector(".container");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const selectedContinent = button.textContent.trim();
      container.innerHTML = "";
      const filteredLandmarks = landmarks.filter(
        (landmark) =>
          landmark.continent === selectedContinent ||
          landmark.filter === selectedContinent
      );
      filteredLandmarks.forEach((landmark) => inject(landmark));
      addToCart();
      cartItems();
      itemCountUpdate();
    });
  });
}
filterContinent();

function searchLandmarks() {
  const searchInput = document.querySelector(".search-bar");
  const container = document.querySelector(".container");
  const searchButton = document.querySelector(".search-button");
  function doSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    container.innerHTML = "";
    const filteredLandmarks = landmarks.filter((landmark) =>
      landmark.name.toLowerCase().includes(searchTerm)
    );
    if (filteredLandmarks.length === 0) {
      container.innerHTML = "<p class='no-results'>No landmarks found.</p>";
      return;
    }
    filteredLandmarks.forEach((landmark) => inject(landmark));
    addToCart();
    cartItems();
    itemCountUpdate();
  }
  searchButton.addEventListener("click", doSearch);
  searchInput.addEventListener("input", doSearch);
}
searchLandmarks();
