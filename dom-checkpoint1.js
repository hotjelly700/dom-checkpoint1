// Select total price element
let totalEl = document.querySelector(".total");

// Function to update total price
function updateTotal() {
  let total = 0;
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    let priceText = card.querySelector(".unit-price").textContent;
    let qtyText = card.querySelector(".quantity").textContent;

    let price = Number(priceText.replace("$", "").trim()); // remove $ and convert
    let qty = Number(qtyText);

    total += price * qty;
  });
  totalEl.textContent = total + " $";
}

// Select all plus buttons
let plusBtns = document.querySelectorAll(".fa-plus-circle");
plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let qtyEl = btn.parentElement.querySelector(".quantity");
    qtyEl.textContent = Number(qtyEl.textContent) + 1;
    updateTotal();
  });
});

// Select all minus buttons
let minusBtns = document.querySelectorAll(".fa-minus-circle");
minusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let qtyEl = btn.parentElement.querySelector(".quantity");
    let qty = Number(qtyEl.textContent);
    if (qty > 0) {
      qtyEl.textContent = qty - 1;
      updateTotal();
    }
  });
});

// Select all delete buttons
let deleteBtns = document.querySelectorAll(".fa-trash-alt");
deleteBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Select all heart buttons
let heartBtns = document.querySelectorAll(".fa-heart");
heartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("red");
  });
});

// Initial total
updateTotal();
