let allProducts = [];
const root = document.querySelector("#root");

// create the header
function createHeader() {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "Shoe Store"; // Store name

  // Style the header
  header.style.marginLeft = "30px";
  header.style.width = "100%";
  header.style.position = "relative";

  // Style the h1
  h1.style.fontSize = "48px";
  h1.style.color = "#2D3E50";
  h1.style.fontWeight = "bold";
  h1.style.fontFamily = "'Poppins', sans-serif";
  h1.style.textTransform = "uppercase";
  h1.style.letterSpacing = "4px";
  h1.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.1)";

  // Style  the h2
  const h2 = document.createElement("h2");
  h2.textContent = "The Best Footwear for Every Occasion"; // Subtitle
  h2.style.fontSize = "22px";
  h2.style.color = "#2D3E50";
  h2.style.fontWeight = "300";
  h2.style.fontFamily = "'Poppins', sans-serif";
  h2.style.marginTop = "10px";
  h2.style.textTransform = "capitalize";
  h2.style.letterSpacing = "2px";

  h1.appendChild(h2);
  header.appendChild(h1);
  root.appendChild(header);
}

// Function to style the root and body
function applyGlobalStyles() {
  document.body.style.margin = 0;
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.backgroundColor = "#f4f4f4";

  root.style.display = "flex";
  root.style.flexWrap = "wrap";
  root.style.gap = "20px";
  root.style.justifyContent = "center";
  // root.style.padding = "20px";
}

// Create the search bar
function createSearchBar(products) {
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.textAlign = "center";
  // container.style.margin = "20px 0";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search for a product by name...";
  searchInput.style.padding = "10px";
  searchInput.style.width = "60%";
  searchInput.style.fontSize = "16px";
  searchInput.style.marginRight = "10px";
  searchInput.style.borderRadius = "10px";
  // Search Button
  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.style.padding = "10px 20px";
  searchButton.style.fontSize = "16px";
  searchButton.style.backgroundColor = "#ff6f61";
  searchButton.style.color = "#fff";
  searchButton.style.border = "none";
  searchButton.style.borderRadius = "5px";
  searchButton.style.cursor = "pointer";
  searchButton.style.marginRight = "10px";

  // Add search functionality
  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredProducts = products.filter(
      (product) => product.title.toLowerCase() === searchTerm
    );

    if (filteredProducts.length > 0) {
      renderCards(filteredProducts);
    } else {
      alert("No product found with the given name.");
    }
  });

  container.appendChild(searchInput);
  container.appendChild(searchButton);

  root.appendChild(container);
}

//  Function for filter Product.
function filterProcucts(products) {
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.textAlign = "center";
  container.style.margin = "20px 0";

  const allProductsButton = createFilterButton("All Products", () => {
    renderCards(allProducts); // Restore all products
  });

  const category1Button = createFilterButton("Nike", () => {
    const filtered = products.filter((product) => product.title === "Nike");
    renderCards(filtered);
  });

  const category2Button = createFilterButton("Adidas", () => {
    const filtered = products.filter((product) => product.title === "Adidas");
    renderCards(filtered);
  });

  const category3Button = createFilterButton("Puma", () => {
    const filtered = products.filter((product) => product.title === "Puma");
    renderCards(filtered);
  });

  const sortDropdown = document.createElement("select");
  sortDropdown.style.padding = "10px";
  sortDropdown.style.fontSize = "16px";
  sortDropdown.style.marginLeft = "10px";
  sortDropdown.style.borderRadius = "5px";
  sortDropdown.style.color = "#2D3E50";
  sortDropdown.style.borderColor = "#2D3E50";
  sortDropdown.style.fontWeight = "bold";

  // Add options to the dropdown
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "Sort by Price";
  defaultOption.value = "";
  sortDropdown.appendChild(defaultOption);

  const lowToHighOption = document.createElement("option");
  lowToHighOption.textContent = "Low to High";
  lowToHighOption.value = "lowToHigh";
  sortDropdown.appendChild(lowToHighOption);

  const highToLowOption = document.createElement("option");
  highToLowOption.textContent = "High to Low";
  highToLowOption.value = "highToLow";
  sortDropdown.appendChild(highToLowOption);

  // Add sorting functionality
  sortDropdown.addEventListener("change", () => {
    const selectedValue = sortDropdown.value;

    if (selectedValue === "lowToHigh") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      console.log(sortedProducts);
      renderCards(sortedProducts);
    } else if (selectedValue === "highToLow") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      renderCards(sortedProducts);
    }
  });

  const sortAlphaDropdown = document.createElement("select");
  sortAlphaDropdown.style.padding = "10px";
  sortAlphaDropdown.style.fontSize = "16px";
  sortAlphaDropdown.style.marginLeft = "10px";
  sortAlphaDropdown.style.borderRadius = "5px";
  sortAlphaDropdown.style.color = "#2D3E50";
  sortAlphaDropdown.style.borderColor = "#2D3E50";
  sortAlphaDropdown.style.fontWeight = "bold";

  const defaultOptionAlpha = document.createElement("option");
  defaultOptionAlpha.textContent = "Sort by Alphabet";
  defaultOptionAlpha.value = "";
  sortAlphaDropdown.appendChild(defaultOptionAlpha);

  const aToZOption = document.createElement("option");
  aToZOption.textContent = "A-Z";
  aToZOption.value = "aToZ";
  sortAlphaDropdown.appendChild(aToZOption);

  const zToAOption = document.createElement("option");
  zToAOption.textContent = "Z-A";
  zToAOption.value = "zToA";
  sortAlphaDropdown.appendChild(zToAOption);

  sortAlphaDropdown.addEventListener("change", () => {
    const selectedValue = sortAlphaDropdown.value;

    if (selectedValue === "aToZ") {
      const sortedProducts = [...products].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      renderCards(sortedProducts);
    } else if (selectedValue === "zToA") {
      const sortedProducts = [...products].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      renderCards(sortedProducts);
    }
  });

  container.appendChild(allProductsButton);
  container.appendChild(category1Button);
  container.appendChild(category2Button);
  container.appendChild(category3Button);
  container.appendChild(sortDropdown);
  container.appendChild(sortAlphaDropdown);

  root.appendChild(container);
}
// Helper function to create filter buttons
function createFilterButton(label, onClick) {
  const button = document.createElement("button");
  button.textContent = label;
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.backgroundColor = "#2D3E50";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.margin = "0 5px";
  button.style.transition = "background-color 0.3s";

  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#1A2739";
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#2D3E50";
  });

  button.addEventListener("click", onClick);

  return button;
}
// Function to create a card
function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";

  // Style the card
  card.style.backgroundColor = "#fff";
  card.style.borderRadius = "8px";
  card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  card.style.overflow = "hidden";
  card.style.width = "18%";
  card.style.minWidth = "250px";
  card.style.transition = "transform 0.2s";

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-20px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

  // Create and style elements
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  img.style.width = "100%";
  img.style.height = "200px";
  img.style.objectFit = "cover";

  // img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    openImageModal(item.image);
  });

  const title = document.createElement("h2");
  title.textContent =`${item.title}` ;
  title.style.fontWeight = "bold";
  title.style.fontFamily = "'Poppins', sans-serif";
  title.style.textTransform = "uppercase";
  title.style.letterSpacing = "4px";
  title.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.1)";
  title.style.fontSize = "18px";
  title.style.margin = "15px";
  title.style.color = "#333";

  const price = document.createElement("div");
  price.textContent = ` $ ${item.price}`;
  price.style.fontWeight = "bold";
  price.style.fontSize = "16px";
  price.style.margin = "15px";
  price.style.color = "#ff6f61";

  const quantity = document.createElement("div");
  quantity.style.fontWeight = "bold";
  quantity.style.fontSize = "14px";
  quantity.style.margin = "15px";
  quantity.style.color = item.quantity > 0 ? "#28a745" : "#dc3545";
  quantity.textContent =
    item.quantity > 0 ? `Qty: ${item.quantity}` : "Out of Stock";

  const addToCartButton = createAddToCartButton();
  const { descriptionToggle, description } = createDescriptionToggle(
    item.description
  );

  // Append elements to card
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(quantity);
  card.appendChild(addToCartButton);
  card.appendChild(descriptionToggle);
  card.appendChild(description);

  return card;
}

function openImageModal(imageSrc) {
  // Create the modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.style.position = "fixed";
  modalOverlay.style.top = "0";
  modalOverlay.style.left = "0";
  modalOverlay.style.width = "100%";
  modalOverlay.style.height = "100%";
  modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modalOverlay.style.display = "flex";
  modalOverlay.style.justifyContent = "center";
  modalOverlay.style.alignItems = "center";

  // Create the modal image
  const modalImage = document.createElement("img");
  modalImage.src = imageSrc;
  modalImage.style.maxWidth = "90%";
  modalImage.style.maxHeight = "90%";
  modalImage.style.borderRadius = "10px";

  // Add close functionality to the modal
  modalOverlay.addEventListener("click", () => {
    document.body.removeChild(modalOverlay);
  });

  // Append the image to the overlay and the overlay to the body
  modalOverlay.appendChild(modalImage);
  document.body.appendChild(modalOverlay);
}

// Function to create "Add to Cart" button
function createAddToCartButton() {
  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.style.backgroundColor = "#ff6f61";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.padding = "10px 20px";
  button.style.margin = "10px 15px";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.fontSize = "14px";
  button.style.transition = "background-color 0.3s";

  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#e55a4e";
  });
  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#ff6f61";
  });

  return button;
}

// Function to create description toggle
function createDescriptionToggle(descriptionText) {
  const descriptionToggle = document.createElement("button");
  descriptionToggle.textContent = "DES ▼";
  descriptionToggle.style.backgroundColor = "#f4f4f4";
  descriptionToggle.style.color = "#ff6f61";
  descriptionToggle.style.border = "none";
  descriptionToggle.style.padding = "5px 10px";
  descriptionToggle.style.margin = "15px";
  descriptionToggle.style.borderRadius = "5px";
  descriptionToggle.style.cursor = "pointer";
  descriptionToggle.style.fontSize = "14px";

  const description = document.createElement("div");
  description.textContent = descriptionText;
  description.style.display = "none";
  description.style.margin = "0 15px 15px";
  description.style.color = "#666";
  description.style.fontSize = "14px";

  descriptionToggle.addEventListener("click", () => {
    if (description.style.display === "none") {
      description.style.display = "block";
      descriptionToggle.textContent = "DES ▲";
    } else {
      description.style.display = "none";
      descriptionToggle.textContent = "DES ▼";
    }
  });

  return { descriptionToggle, description };
}

// Function to render cards

function renderCards(products) {
  // Clear existing cards
  root.innerHTML = "";
  createHeader();
  applyGlobalStyles();
  createSearchBar(allProducts); // Pass all products for search functionality
  filterProcucts(allProducts); // Pass all products for filtering

  products.forEach((item) => {
    const card = createCard(item);
    root.appendChild(card);
  });
}

function fetchData() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      allProducts = data.products; // Store all products in a global variable
      renderCards(allProducts); // Render all products initially
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function init() {
  fetchData();
}

init();
