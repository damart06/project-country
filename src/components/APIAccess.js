const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;





// Middleware pour analyser le corps des requêtes JSON
 app.use(express.json());

// Route pour récupérer les données d'un pays par son nom
app.get('/pays/:nomPays', async (req, res) => {
  const nomPays = req.params.nomPays;

  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${nomPays}`);
    const pays = response.data;
    res.json(pays);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur s\'est produite' });
  }
});

app.listen(port, () => {
  console.log(`Le serveur Express est en cours d'exécution sur le port ${port}`);
});
