const axios = require('axios');

// Función para hacer la solicitud a la API Random User Generator
function fetchData() {
  return axios.get('https://randomuser.me/api/');
}

module.exports = fetchData; // Exporta la función para que esté disponible para otros archivos
