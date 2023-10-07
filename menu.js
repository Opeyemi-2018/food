let menu = [
  {
    image: "images/food-20.jpeg",
    name: "Seafood pasta with shrimps tomato",
    price: "$4",
  },

  {
    image: "images/food-7.jpg",
    name: "Spicy-salad with fried egg",
    price: "$2",
  },
  {
    image: "images/food-13.jpg",
    name: "Eba with afang soup",
    price: "$5",
  },

  {
    image: "images/food-8.jpg",
    name: "Jollof-rice with chicken wings",
    price: "$7",
  },
  {
    image: "images/food-10.jpg",
    name: "Roasted chicken leg with america potato",
    price: "$6",
  },

  {
    image: "images/food-11.jpg",
    name: "West africa jollof rice with chicken",
    price: "$4",
  },

  {
    image: "images/food-14.jpg",
    name: "Semo with okro soup",
    price: "$8",
  },

  {
    image: "images/food-16.jpg",
    name: "Eba with egusi soup",
    price: "$6",
  },
  {
    image: "images/food-18.jpg",
    name: "Amala with egusi",
    price: "$7",
  },
];

let menuGrid = document.querySelector(".menu-grid");

menu.forEach((menuList) => {
  menuGrid.innerHTML += `
  <article class="menu-item">
          <img src="${menuList.image}" alt="" />
          <div class="food-details">
            <h2>${menuList.name}</h2>
            <span class="price">${menuList.price}</span>
          </div>
          <button>Order</button>
        </article>`;
});
// function getFoodApi() {
//   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
//     .then((res) => res.json())
//     .then((data) => {
//       data.meals.forEach((menuList) => {
//         console.log(menuList);
//         menuGrid.innerHTML += `
//         <div class="menu-con">
//         <div class="food-img-con">
//           <img src=${menuList.strMealThumb} />
//         </div>
//         <div class="food-name-price">
//           <div class="name">${menuList.strMeal}</div>
//           <div class="price">$${menuList.idMeal}</div>
//         </div>
//         <div class="order-btn">
//           <button class="order-button">Order</button>
//         </div>
//       </div>
//         `;
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getFoodApi();

//JS for search
// let searchBtn = document.getElementById("search-btn");
// let input = document.getElementById("search");
// searchBtn.addEventListener("click", () => {
//   let searchText = input.value;
//   let filterSearch = meals.filter((menuList) => {
//     return menuList.strMeal
//       .toLocaleLowerCase()
//       .includes(searchText.toLocaleLowerCase());
//   });
//   input.value = "";

//   menuGrid.innerHTML = "";
//   filterSearch.forEach((menuList) => {
//     menuGrid.innerHTML += `
//     <div class="menu-con">
//           <div class="food-img-con">
//             <img src="images/food-1.jpg" alt="" />
//           </div>
//           <div class="food-name-price">
//             <div class="name">Jollof-Rice</div>
//             <div class="price">$2</div>
//           </div>
//           <div class="order-btn">
//             <button class="order-button">Order</button>
//           </div>
//         </div>
//    `;
//   });
// });

//JS for order button
let orderButton = document.querySelectorAll(".order-button");
orderButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("yes");
  });
});

// window.addEventListener("DOMContentLoaded", () => {
//   displayMenuItem(menu);
// });

// function displayMenuItem(menuList) {
//   let displayMenuList = menuList.map((list) => {
//     return `
//     <div class="menu-con">
//           <div class="food-img-con">
//             <img src=${list.image} />
//           </div>
//           <div class="food-name-price">
//             <div class="name">${list.name}</div>
//             <div class="price">${list.price}</div>
//           </div>
//           <div class="add-and-order-btn">
//             <div class="add-btn">
//               <button>
//                 <span id="decreament">-</span>
//                 <span id="count">0</span>
//                 <span id="increament">+</span>

//                 </button>
//             </div>
//             <div class="order-btn">
//               <button class="order-button">Order</button>
//             </div>
//           </div>
//         </div>`;
//   });
//   displayMenuList = displayMenuList.join("");
//   menuGrid.innerHTML = displayMenuList;
// }

// let orderButton = document.querySelectorAll(".order-button");
// console.log(orderButton);

// orderButton.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("yes");
//   });
// });
