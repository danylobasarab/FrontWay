import { deleteOrder, editOrder, getOrders, postOrder } from "./api.js";

const CLOSE_CLASS_NAME = "close";
const OPEN_CLASS_NAME = "open";

const listContainer = document.getElementById("orders_list");
const countPrice = document.getElementById("count_price");
const mainPage = document.getElementById("main_page");
const editPage = document.getElementById("edit_page");
const createPage = document.getElementById("create_page");

const purchase_form = document.getElementById("purchaseForm");
const edit_form = document.getElementById("editForm");
const search_button = document.getElementById("search_btn");
const cancel_button = document.getElementById("cancel_search_btn");
const sort_button = document.getElementById("sort_objects");

class JewelryManager {
  items = [];
  currentId = null;

  async init() {
    this.items = await getOrders();

    this.renderItems();
  }

  addItem(item) {
    this.items.push(item);
  }

  countPrice(items) {
    return items.reduce((acc, val) => acc + Number(val.price), 0);
  }

  openEditForm(id) {
    toggleEdit();
    this.currentId = id;
    const { fullName, description, type, date, price } = this.items.find(
      (ob) => ob.id === this.currentId
    );

    const listObjectId = this.items.findIndex(
      (obj) => obj.id === this.currentId
    );

    edit_form.querySelector('[name="fullName"]').value = fullName;
    edit_form.querySelector('[name="description"]').value = description;
    edit_form.querySelector('[name="type"]').value = type;
    edit_form.querySelector('[name="date"]').value = date;
    edit_form.querySelector('[name="price"]').value = price;
  }

  async removeItem(id) {
    try {
      await deleteOrder(id);
      this.items = this.items.filter((item) => item.id !== id);
      this.renderItems();
    } catch (e) {
      console.log(e);
    }
  }

  async submitPurchase(target) {
    const form = new FormData(target);
    const newOrder = {
      ...Object.fromEntries(form.entries()),
      id: new Date().valueOf(),
    };

    try {
      await postOrder(newOrder);
      this.addItem(newOrder);
      target.reset();
      this.renderItems();
    } catch (e) {
      console.log(e);
    }
  }

  async submitEdit(target) {
    const form = new FormData(target);
    const updatedOrder = {
      ...Object.fromEntries(form.entries()),
      id: this.currentId,
    };

    const listObjectId = this.items.findIndex(
      (obj) => obj.id === this.currentId
    );

    try {
      await editOrder(this.currentId, updatedOrder);
      this.items[listObjectId] = updatedOrder;

      target.reset();
      this.renderItems();
      this.currentId = null;
      toggleEdit();
    } catch (e) {
      console.log(e);
    }
  }

  renderSortedItems() {
    const sortedItems = [...this.items].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
    this.renderItems(sortedItems);
  }

  renderFilteredItems() {
    const filteredItems = [...this.items].filter((item) =>
      item.fullName.includes(input_search.value)
    );
    this.renderItems(filteredItems);
  }

  renderItems(items = this.items) {
    insertToDOM(listContainer, cardsTemplate(items));
    insertToDOM(countPrice, this.countPrice(items));
  }
}

const jewelryManager = new JewelryManager();
jewelryManager.init();

purchase_form.addEventListener("submit", (e) => {
  e.preventDefault();
  jewelryManager.submitPurchase(e.target);
});

edit_form.addEventListener("submit", (e) => {
  e.preventDefault();
  jewelryManager.submitEdit(e.target);
});

purchase_form.querySelectorAll("input,textarea").forEach((item) =>
  item.addEventListener("invalid", (e) => {
    alert("Invalid form");
  })
);

edit_form.querySelectorAll("input,textarea").forEach((item) =>
  item.addEventListener("invalid", (e) => {
    alert("Invalid form");
  })
);

sort_button.addEventListener("change", (e) => {
  e.target.checked
    ? jewelryManager.renderSortedItems()
    : jewelryManager.renderItems();
});

search_button.addEventListener("click", () => {
  jewelryManager.renderFilteredItems(input_search.value);
});

cancel_button.addEventListener("click", () => {
  input_search.value = "";
  jewelryManager.renderItems();
});

function cardsTemplate(items) {
  return `  
${items
  .map(
    ({ fullName, description, type, date, price, id }) => `
  <li id="item-${id}" class="item"> 
    <div class="card">
    <h4 class="card-type">Name: ${fullName}</h4>
    <h4 class="card-price">Destination: ${description}</h4>
    <h4 class="card-brand">Brand: ${type}</h4>
    <h4 class="card-production-date">Date: ${date}</h4>
    <h4 class="card-production-date">Price: ${price}$</h4>
      <div class="block_btn"> 
        <button id="edit_btn${id}" type="button" class="btn-primary btn_card" onclick="jewelryManager.openEditForm(${id})">
          Edit
        </button>
        <button type="button" id="cancel_search_btn" class="btn_card_cansel" onclick="jewelryManager.removeItem(${id})">Delete</button></div>
      </div>
    </div>
  </li>`
  )
  .join("")}
`;
}

function insertToDOM(element, content) {
  element.innerHTML = content;
}

window.setActive = function setActive(type) {
  switch (type) {
    case "create": {
      createPage.classList.add(OPEN_CLASS_NAME);
      mainPage.classList.add(CLOSE_CLASS_NAME);
      editPage.classList.remove(OPEN_CLASS_NAME);
      break;
    }
    default: {
      mainPage.classList.remove(CLOSE_CLASS_NAME);
      createPage.classList.remove(OPEN_CLASS_NAME);
      editPage.classList.remove(OPEN_CLASS_NAME);
      break;
    }
  }
};

window.jewelryManager = jewelryManager;

function toggleEdit() {
  mainPage.classList.toggle(CLOSE_CLASS_NAME);
  editPage.classList.toggle(OPEN_CLASS_NAME);
}
