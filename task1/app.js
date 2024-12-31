let root = document.querySelector("#root");

const header = document.createElement("header");
const h1 = document.createElement("h1");

h1.textContent = "Shoe Store"; // name

// Style the header
// header.style.textAlign = 'center';
header.style.marginLeft = "30px";
header.style.width = "100%";
header.style.position = "relative";

//style the h1 of header
h1.style.fontSize = "48px";
h1.style.color = "#2D3E50";
h1.style.fontWeight = "bold";
h1.style.fontFamily = "'Poppins', sans-serif";
h1.style.textTransform = "uppercase";
h1.style.letterSpacing = "4px";
h1.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 0.1)";

const h2 = document.createElement("h2");
h2.textContent = "The Best Footwear for Every Occasion"; // Subtitle of the store
h2.style.fontSize = "22px"; // Smaller font size for the subtitle
h2.style.color = "#2D3E50"; // Bright color for the subtitle
h2.style.fontWeight = "300"; // Lighter weight for the subtitle
h2.style.fontFamily = "'Poppins', sans-serif"; // Same font family for consistency
h2.style.marginTop = "10px"; // Add space above the subtitle
h2.style.textTransform = "capitalize"; // Capitalize the first letter of each word
h2.style.letterSpacing = "2px"; // Add slight spacing between the letters for the subtitle

h1.appendChild(h2);
// Append the h1 to the header
header.appendChild(h1);

// Append the header to the root container before cards
root.appendChild(header);

//style for body
document.body.style.margin = 0;
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f4f4";

// Style the root container
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "20px";
root.style.justifyContent = "center";
root.style.padding = "20px";

//fetch data form json file
fetch("data.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    data.products.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      // Style the card
      card.style.backgroundColor = "#fff";
      card.style.borderRadius = "8px";
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      card.style.overflow = "hidden";
      card.style.width = "23%"; // Four cards in a row
      card.style.minWidth = "250px"; // Minimum size for smaller screens
      card.style.transition = "transform 0.2s";

      // Add hover for the card
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-20px)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });

      // add image to card
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      img.style.width = "100%";
      img.style.height = "200px";
      img.style.objectFit = "cover";

      //add title to card
      const title = document.createElement("h2");
      title.textContent = item.title;
      title.style.fontSize = "18px";
      title.style.margin = "15px";
      title.style.color = "#333";

      //add description

      const descriptionToggle = document.createElement("button");
      descriptionToggle.textContent = "DES ▼";
      descriptionToggle.style.backgroundColor = "#f4f4f4";
      descriptionToggle.style.color = "#333";
      descriptionToggle.style.border = "none";
      descriptionToggle.style.padding = "5px 10px";
      descriptionToggle.style.margin = "0 15px 15px";
      descriptionToggle.style.borderRadius = "5px";
      descriptionToggle.style.cursor = "pointer";
      descriptionToggle.style.fontSize = "14px";

      // Create the description div
      const description = document.createElement("div");
      description.textContent = item.description;
      description.style.display = "none"; // hidden
      description.style.margin = "0 15px 15px 15px";
      description.style.color = "#666";
      description.style.fontSize = "14px";

      // Toggle description visibility on click
      descriptionToggle.addEventListener("click", () => {
        if (description.style.display === "none") {
          description.style.display = "block"; // Show description
          descriptionToggle.textContent = "DES ▲"; // Change button text
        } else {
          description.style.display = "none"; // Hide description
          descriptionToggle.textContent = "DES ▼"; // Change button text
        }
      });

      // add price to card
      const price = document.createElement("div");
      price.textContent = item.price;
      price.style.fontWeight = "bold";
      price.style.fontSize = "16px";
      price.style.margin = "15px";
      price.style.color = "#ff6f61";

      //add quantity to card
      const quantity = document.createElement('div');
      quantity.style.fontWeight = 'bold';
      quantity.style.fontSize = '14px';
      quantity.style.margin = '15px';
      quantity.style.color = item.quantity > 0 ? '#28a745' : '#dc3545'; // Green for in stock, red for out of stock
      quantity.textContent =
        item.quantity > 0 ? `Qty: ${item.quantity}` : 'Out of Stock';

      // Create the "Add to Cart" button
      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.style.backgroundColor = "#ff6f61"; // Button color (same as price)
      addToCartButton.style.color = "#fff"; // Text color
      addToCartButton.style.border = "none";
      addToCartButton.style.padding = "10px 20px";
      addToCartButton.style.margin = "10px 15px";
      addToCartButton.style.borderRadius = "5px";
      addToCartButton.style.cursor = "pointer";
      addToCartButton.style.fontSize = "14px";
      addToCartButton.style.transition = "background-color 0.3s";

      // Hover for the button
      addToCartButton.addEventListener("mouseenter", () => {
        addToCartButton.style.backgroundColor = "#e55a4e";
      });
      addToCartButton.addEventListener("mouseleave", () => {
        addToCartButton.style.backgroundColor = "#ff6f61";
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(quantity);
      card.appendChild(addToCartButton);
      card.appendChild(descriptionToggle);
      card.appendChild(description);

      // Append the card to the root container
      root.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
