const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];


// Select the select element
let selectElement = document.getElementById('product');

// Loop over the products array
products.forEach(product => {
    // Create a new option element
    let option = document.createElement('option');

    // Set the value attribute to the product's id
    option.value = product.id;

    // Set the text content to the product's name
    option.textContent = product.name;

    // Append the option to the select element
    selectElement.appendChild(option);
});