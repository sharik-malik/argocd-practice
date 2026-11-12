const products = [
  {id:1,name:"Sweet oranges",category:"Fruit",price:120,unit:"1 kg",emoji:"🍊"},
  {id:2,name:"Creamy avocado",category:"Fruit",price:90,unit:"2 pcs",emoji:"🥑"},
  {id:3,name:"Fresh strawberries",category:"Fruit",price:160,unit:"250 g",emoji:"🍓"},
  {id:4,name:"Green spinach",category:"Vegetables",price:45,unit:"1 bunch",emoji:"🥬"},
  {id:5,name:"Red tomatoes",category:"Vegetables",price:35,unit:"500 g",emoji:"🍅"},
  {id:6,name:"Crunchy carrots",category:"Vegetables",price:50,unit:"500 g",emoji:"🥕"},
  {id:7,name:"Rolled oats",category:"Pantry",price:140,unit:"500 g",emoji:"🥣"},
  {id:8,name:"Golden honey",category:"Pantry",price:220,unit:"250 g",emoji:"🍯"}
];
let selectedCategory="All";
let cart=0;
const grid=document.querySelector("#productGrid");
const count=document.querySelector("#cartCount");
const search=document.querySelector("#searchInput");
const toast=document.querySelector("#toast");

function render(){
  const term=search.value.toLowerCase();
  const visible=products.filter(p=>(selectedCategory==="All"||p.category===selectedCategory)&&p.name.toLowerCase().includes(term));
  grid.innerHTML=visible.map(p=>`
    <article class="product-card">
      <div class="product-art">${p.emoji}</div>
      <div class="product-info">
        <div class="product-category">${p.category} · ${p.unit}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-bottom"><span class="price">₹${p.price}</span>
          <button class="add-button" aria-label="Add ${p.name} to cart" data-id="${p.id}">+</button>
        </div>
      </div>
    </article>`).join("") || "<p>No products found. Try another search.</p>";
}
document.querySelector("#filters").addEventListener("click",e=>{
  const button=e.target.closest("[data-category]");
  if(!button)return;
  selectedCategory=button.dataset.category;
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===button));
  render();
});
search.addEventListener("input",render);
grid.addEventListener("click",e=>{
  const button=e.target.closest("[data-id]");
  if(!button)return;
  cart++;count.textContent=cart;
  toast.textContent="Added to your basket!";
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1300);
});
document.querySelector("#cartButton").addEventListener("click",()=>{
  toast.textContent=`Your basket has ${cart} item${cart===1?"":"s"}.`;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1600);
});
render();
