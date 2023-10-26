import cors from 'cors'
import express from 'express'

import { NotFoundRoutesHandler } from './src/middlewares/notFound'
import { ExceptionsHandler } from './src/middlewares/exeptions'
import { BadRequestException } from '~/utils/errors'
import axios from 'axios'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/getCountry/:country', async (req, res) => {

try {
    const countryName = req.params.country;

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



app.all('*', NotFoundRoutesHandler)
app.use(ExceptionsHandler)

app.listen("4000", () => console.log(`🚀 Server ready at http://localhost:4000`))