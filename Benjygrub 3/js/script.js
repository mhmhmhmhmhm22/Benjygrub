// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
    // --- Private Dining Form Submission ---
    const diningForm = document.getElementById('diningForm');
    if (diningForm) {
      diningForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;
  
        // Basic validation
        if (name === '' || email === '' || date === '' || guests === '') {
          alert('Please fill out all fields.');
          return;
        }
  
        // Simulate submission and display a confirmation message
        const messageDiv = document.getElementById('diningMessage');
        messageDiv.textContent = `Thank you ${name}, your booking request for ${guests} guest(s) on ${date} has been submitted.`;
        diningForm.reset();
      });
    }
    
    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get form values
        const contactName = document.getElementById('contactName').value;
        const contactEmail = document.getElementById('contactEmail').value;
        const message = document.getElementById('message').value;
  
        // Basic validation
        if (contactName === '' || contactEmail === '' || message === '') {
          alert('Please fill out all fields.');
          return;
        }
  
        // Simulate submission and display a confirmation message
        const responseDiv = document.getElementById('contactResponse');
        responseDiv.textContent = `Thank you ${contactName}, your message has been sent. We will get back to you soon!`;
        contactForm.reset();
      });
    }
    
  });
 // Customer reviews list
const reviews = [
  "🌟 'Absolutely loved the international flavors! Best sandwiches in town!' - Emily R.",
  "🌟 'The Tokyo Katsu Sando was out of this world. Highly recommend!' - James M.",
  "🌟 'A perfect mix of flavors from around the world. Great service too!' - Sophia L.",
  "🌟 'The Cuban Medianoche sandwich was a game-changer! So delicious!' - Daniel T.",
  "🌟 'Fresh ingredients, amazing taste. I keep coming back for more!' - Olivia W."
];

let index = 0;

// Function to cycle through reviews
function changeReview() {
  index = (index + 1) % reviews.length; // Move to next review
  document.getElementById("review-text").textContent = reviews[index];

  // Optional: Smooth fade effect
  document.getElementById("review-text").style.opacity = "0";
  setTimeout(() => {
      document.getElementById("review-text").style.opacity = "1";
  }, 300);
}

// Change review every 5 seconds
setInterval(changeReview, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input[type='number']");
  const orderSummary = document.getElementById("order-summary");
  const totalPriceEl = document.getElementById("total-price");
  const discountedPriceEl = document.getElementById("discounted-price");

  function updateOrder() {
      let total = 0;
      orderSummary.innerHTML = "";

      inputs.forEach(input => {
          const quantity = parseInt(input.value);
          const itemName = input.dataset.item;
          const itemPrice = parseFloat(input.dataset.price);

          if (quantity > 0) {
              const itemTotal = (itemPrice * quantity).toFixed(2);
              total += itemPrice * quantity;

              // Add item to order summary
              let listItem = document.createElement("li");
              listItem.textContent = `${quantity}x ${itemName} - £${itemTotal}`;
              orderSummary.appendChild(listItem);
          }
      });
      let discountedTotal = (total * 0.8).toFixed(2); // 20% off  

      // Update total price in GBP
      totalPriceEl.textContent = total.toFixed(2);
      discountedPriceEl.textContent = discountedTotal;
  }

  // Listen for input changes
  inputs.forEach(input => {
      input.addEventListener("input", updateOrder);
  });
});

function submitOrder() {
  const orderSummary = document.getElementById("order-summary");
  const totalPrice = document.getElementById("total-price").textContent;
  const discountedPrice = document.getElementById("discounted-price").textContent;

  let orderItems = [];
  document.querySelectorAll("#order-summary li").forEach(item => {
      orderItems.push(item.textContent);
  });

  if (orderItems.length === 0) {
      alert("Please select at least one item before submitting your order.");
      return;
  }

  // Display order confirmation
  alert(`✅ Thank you for your order!\n\nYour Order:\n${orderItems.join("\n")}\nTotal Price: £${discountedPrice}`);

  // Reset order after submitting
  document.querySelectorAll("input[type='number']").forEach(input => {
      input.value = "0";
  });
  document.getElementById("order-summary").innerHTML = "";
  document.getElementById("total-price").textContent = "0.00";
  document.getElementById("discounted-price").textContent = "0.00";
}