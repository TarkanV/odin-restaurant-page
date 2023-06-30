import tool from "./element-tool";

const createElement = tool.createElement;

function loadMenu() {
  const content = createElement("div", document.body, "tab");
  content.id = "menu";
  
  // Define the menu data
  const menuData = {
    Appetizers: [
      {
        name: "Caprese Salad",
        description:
          "Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze.",
        price: "$9.99",
      },
      {
        name: "Crispy Calamari",
        description:
          "Lightly battered calamari rings served with tangy marinara sauce.",
        price: "$12.99",
      },
      {
        name: "Bruschetta",
        description:
          "Grilled bread topped with diced tomatoes, fresh basil, garlic, and extra virgin olive oil.",
        price: "$8.99",
      },
    ],
    "Main Courses": [
      {
        name: "Grilled Filet Mignon",
        description:
          "Tender filet mignon cooked to perfection, served with roasted vegetables and garlic mashed potatoes.",
        price: "$29.99",
      },
      {
        name: "Lobster Linguine",
        description:
          "Succulent lobster meat tossed with linguine in a creamy garlic sauce.",
        price: "$26.99",
      },
      {
        name: "Vegetarian Risotto",
        description:
          "Arborio rice cooked with seasonal vegetables, parmesan cheese, and a hint of truffle oil.",
        price: "$18.99",
      },
    ],
    Desserts: [
      {
        name: "Chocolate Lava Cake",
        description:
          "Decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.",
        price: "$8.99",
      },
      {
        name: "Tiramisu",
        description:
          "Classic Italian dessert made with layers of espresso-soaked ladyfingers and creamy mascarpone cheese.",
        price: "$7.99",
      },
      {
        name: "Crème Brûlée",
        description: "Smooth vanilla custard with a caramelized sugar crust.",
        price: "$6.99",
      },
    ],
  };


  // Create the menu elements
  for (const category in menuData) {
    // Create the category heading element
    const categoryHeading = document.createElement("h3");
    categoryHeading.textContent = category;

    // Create the item list element
    const itemList = document.createElement("ul");

    // Create the item elements
    for (const item of menuData[category]) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${item.name}</strong><br>
        <em>${item.description}</em><br>
        <span>${item.price}</span>
      `;

      itemList.appendChild(listItem);
    }

    // Append the category heading and item list to the menu container
    content.appendChild(categoryHeading);
    content.appendChild(itemList);
  }

  return content;
}

export default loadMenu;
