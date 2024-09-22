// JavaScript for automatic smooth scrolling with left and right cycle and pause on hover

const scrollContainer = document.getElementById('recipeScrollContainer');
let scrollInterval;
let scrollDirection = 1; // 1 for right, -1 for left

// Clone the first few elements for seamless scrolling
function cloneItems() {
    const items = scrollContainer.children;
    const firstItem = items[0].cloneNode(true);
    const lastItem = items[items.length - 1].cloneNode(true);
    scrollContainer.appendChild(firstItem);
    scrollContainer.insertBefore(lastItem, items[0]);
}

// Function to start automatic scrolling
function startAutoScroll() {
    scrollInterval = setInterval(() => {
        // Scroll in the current direction
        scrollContainer.scrollLeft += scrollDirection;

        // Check for reaching the right end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            // Reset to the first item (skip cloned one)
            scrollContainer.scrollLeft = scrollContainer.scrollLeft - scrollContainer.clientWidth;
        }

        // Check for reaching the left end
        if (scrollContainer.scrollLeft <= 0) {
            // Reset to the last cloned item (skip cloned one)
            scrollContainer.scrollLeft = scrollContainer.scrollLeft + scrollContainer.clientWidth;
        }
    }, 10); // Adjust the speed of scrolling here
}

// Function to stop scrolling on hover
function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Start by cloning items and then auto-scroll when page loads
cloneItems();
startAutoScroll();

// Pause scrolling when hovering over the container
scrollContainer.addEventListener('mouseover', stopAutoScroll);

// Resume scrolling when leaving the container
scrollContainer.addEventListener('mouseleave', startAutoScroll);
