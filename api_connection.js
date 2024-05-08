const axios = require('axios');

// Hacer una solicitud GET a la API Random User Generator
axios.get('https://randomuser.me/api/')
  .then(response => {
    // Manejar la respuesta de la API
    console.log(response.data); // Imprimir los datos en la consola
  })
  .catch(error => {
    // Manejar errores
    console.error('Error al hacer la solicitud:', error);
  });
