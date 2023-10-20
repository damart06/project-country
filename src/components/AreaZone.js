import React, { useState } from 'react';
import APIAcces from './APIAccess';
import axios from 'axios';

const AreaZone = () => {
    // const [valeur, setValeur] = useState(''); // État pour stocker la valeur de la zone de texte
      
    //     // Fonction pour gérer les changements dans la zone de texte
    //     const handleChange = (e) => {
    //       setValeur(e.target.value);
    //     };
    // return (
    //     <div>
    //     <label htmlFor="txt">Zone de texte :</label>
    //     <input
    //         type="text"
    //         id="txt"
    //         value={valeur}
    //         onChange={handleChange}
    //     />
        
    //     {/* <p>Contenu de la zone de texte : rechercher({valeur})</p> */}
    //     </div>
    // );

   

// Le nom du pays que vous souhaitez rechercher
const nomPays = 'France';

// Effectuez une requête GET vers votre API Express
    axios.get(`http://localhost:3000/pays/${nomPays}`)
  .then((response) => {
    const data = response.data;
    console.log('Données du pays:', data);
  })
  .catch((error) => {
    console.error('Une erreur s\'est produite :', error);
  });
};

export default AreaZone;

