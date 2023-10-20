import React from 'react';
import Navigations from '../components/Navigations';
import Logo from '../components/Logo';
import Countries from '../components/Countries';
import AreaZone from '../components/AreaZone';

const Home = () => {
    return (
        <div>
             <Logo/>
             
            <Navigations />
          <Countries/>
           <AreaZone/>
        </div>
    );
};

export default Home;