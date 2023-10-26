
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Importez ici vos gestionnaires d'erreurs, middlewares, etc.

app.use(express.json());
app.use(cors());

// Votre route /getCountry/:country
app.get('/getCountry/:country', async (req, res) => {
  try {
    const countryName = "France";

    if (typeof countryName !== 'string') {
      return res.status(400).json({
        error: 'Country must be a string',
      });
    }

    const response = await axios.get(`https://restcountries.com/v3/name/${countryName}`);
    const countryData = response.data;

    res.status(200).json(countryData);
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
});

describe('Test de la route /getCountry/:country', () => {
  it('devrait renvoyer les données du pays', async () => {
    const response = await request(app).get('/getCountry/France');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(response.data);
  });

  it('devrait renvoyer une erreur 400 si le pays n\'est pas une chaîne', async () => {
    const response = await request(app).get('/getCountry/dede'); // Un exemple de pays non valide

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Country must be a string' });
  });
});
