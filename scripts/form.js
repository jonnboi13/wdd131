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

const features = [
    "Durability",
    "Ease of Use",
    "Performance",
    "Design",
    // Add more features as needed
];

// Select the fieldset element
let fieldsetElement = document.getElementById('usefulFeatures');

// Loop over the features array
features.forEach((feature, index) => {
    // Create a new div element
    let div = document.createElement('div');

    // Create a new input element
    let input = document.createElement('input');

    // Set the attributes of the input
    input.type = 'checkbox';
    input.id = 'feature' + (index + 1);
    input.name = 'feature';

    // Create a label for the input
    let label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = feature;

    // Append the input and label to the div
    div.appendChild(input);
    div.appendChild(label);

    // Append the div to the fieldset
    fieldsetElement.appendChild(div);
});

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