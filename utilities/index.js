function buildVehicleHTML(vehicle) {
  return `
    <section class="vehicle-detail">
      <img src="${vehicle.inv_image}" alt="Image of ${vehicle.inv_make} ${vehicle.inv_model}">
      <div class="vehicle-info">
      
        <h2>${vehicle.inv_year} ${vehicle.inv_make} ${vehicle.inv_model}</h2>

        <p><strong>Price:</strong> $${vehicle.inv_price.toLocaleString()}</p>
        <p><strong>Mileage:</strong> ${vehicle.inv_miles.toLocaleString()} miles</p>
        <p>${vehicle.inv_description}</p>
      </div>
    </section>
  `;
}

module.exports = { buildVehicleHTML };