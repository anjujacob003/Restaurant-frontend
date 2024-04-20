
let menus =  document.querySelector("nav");
let menuBtn =  document.querySelector(".menu-btn");
let closeBTN =  document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBTN.addEventListener("click",function(){
    menus.classList.remove("active");
})


//---------Swiper JS Code----//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      // When window width is <= 768px
      768: {
          slidesPerView: 2,
      },
      // When window width is <= 968px
      968: {
          slidesPerView: 3,
      },
  },
});

  

    //Dynamic Images

    const SectionCenter = document.querySelector('.menus_items_container');
    const filterBtns = document.querySelectorAll('.btn-cat');

    filterBtns.forEach(function(btn){
      btn.addEventListener("click",function(e){
        const Category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
          if(menuItem.Category == Category){
            return menuItem;
          }
        });
        if(Category == "all"){
          displayMenusItem(menu);
        }
        else{
          displayMenusItem(menuCategory);
        }
      })
    });

const menu = [
  {
    id: 1,
    title: "Chapati",
    Category: "Dinner",
    price: 15,
    img: "./imgs/food_lover_01.jpeg"
  },
  {
    id: 2,
    title: "Porotta",
    Category: "Dinner",
    price: 20,
    img: "./imgs/food_lover_02.jpeg"
  },
  {
    id: 3,
    title: "Chicken Biriyani",
    Category: "Lunch",
    price: 200,
    img: "./imgs/food_lover_03.jpg"
  },
  {
    id: 4,
    title: "Chocolate Milkshake",
    Category: "Drinks",
    price: 120,
    img: "./imgs/food_lover_04.jpeg"
  },
  {
    id: 5,
    title: "Roasted sweet potato rounds",
    Category: "Starter",
    price: 120,
    img: "./imgs/food_lover_09.jpeg"
  },
  {
    id:6,
    title: "Beef Curry",
    Category: "Dinner",
    price: 150,
    img: "./imgs/food_lover_06.jpeg"
  },
  {
    id: 7,
    title: "Tapioca and Fish curry",
    Category: "Lunch",
    price: 250,
    img: "./imgs/food_lover_07.jpeg"
  },
  {
    id: 8,
    title: "Avocado Mango and chilli Prawn cups",
    Category: "Starter",
    price: 180,
    img: "./imgs/food_lover_08.jpg"
  },
  {
    id: 9,
    title: "Meals with Fish",
    Category: "Lunch",
    price: 200,
    img: "./imgs/food_lover_05.jpeg"
  },
  
]

window.addEventListener("DOMContentLoaded", function(){
  displayMenusItem(menu);
});

function displayMenusItem(menuItem){
  let displayMenusItem = menuItem.map(function(item){
    return `<div class="img_cards">
      <img src="${item.img}" alt="" />
      <p class="price">Just on Rs${item.price}</p>
      <p>${item.title}</p>
    </div>`;
  });
  displayMenusItem = displayMenusItem.join("");
  SectionCenter.innerHTML = displayMenusItem;
}

 