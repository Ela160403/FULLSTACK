// Sample data (replace with actual data)
let busNumber: string = "123";
let arrivalTime: string = "12:00 PM";
let occupancyRate: number = 10; // Initial occupancy rate in percentage
console.log("Script loaded.");

// Update bus details on the webpage
function updateBusDetails() {
  const busNumberElement = document.getElementById("bus_number")!;
  const arrivalTimeElement = document.getElementById("bus_timing")!;
  const occupancyRateElement = document.getElementById("occupancy_rate")!;

  // Update bus details
  busNumberElement.textContent = busNumber;
  arrivalTimeElement.textContent = arrivalTime;
  occupancyRateElement.textContent = occupancyRate + "%";

  // Dynamically apply color based on occupancy rate
  if (occupancyRate < 50) {
    occupancyRateElement.style.color = "green";
  } else if (occupancyRate < 90) {
    occupancyRateElement.style.color = "blue";
  } else {
    occupancyRateElement.style.color = "red";
  }
}

// Function to book tickets
function bookTickets() {
  const ticketCountInput = <HTMLInputElement>(
    document.getElementById("ticketCount")
  );
  const ticketCount = parseInt(ticketCountInput.value) || 0; // Parse input value as integer or default to 0

  // Update occupancy rate based on booked tickets
  const newOccupancyRate = Math.min(100, occupancyRate + ticketCount * 2); // Assuming each ticket adds 4% occupancy
  occupancyRate = newOccupancyRate;

  // Update bus details on the webpage
  updateBusDetails();

  // Check if occupancy rate is almost full
  if (occupancyRate == 100) {
    // Change button color to red
    const bookButton = document.getElementById("bookButton")!;
    bookButton.style.backgroundColor = "red";

    // Prompt the user that the bus is almost full
    alert(
      "The bus is almost full! Consider alternative transportation options."
    );
  }
}

// Initialize bus details on page load
window.onload = function () {
  updateBusDetails();

  // Add event listener to book button
  const bookButton = document.getElementById("bookButton")!;
  bookButton.addEventListener("click", bookTickets);
};
