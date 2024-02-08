import React from 'react';
import HighChartComponent,   from './components/HighChartComponent'; // Importe le composant HighChartComponent
import {toHighChartsOptions} from './transformers/toHighChartOptions'; // Importe la fonction toHighchartsOptions
const Home = () => {
    const chartOptions = toHighChartsOptions(); // Récupère les options pour le graphique HighChart

    return (
        <div className="container"> {/* Conteneur pour le composant HighChart */}
            <HighChartComponent
                options={chartOptions}/> {/* Rendu du composant HighChart avec les options configurées */}
        </div>
    );
};

export default Home; // Exporte le composant Home pour l'utiliser dans l'application
