'use client' // S'assure que le code est exécuté en mode strict

import {useRef} from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Exporting from "highcharts/modules/exporting";

const HighChartComponent = ({ options }) => {
    // Crée une référence pour le composant Highcharts
    const chartComponentRef = useRef(null);

    // Active le module d'exportation pour Highcharts
    Exporting(Highcharts);

    // Renvoie le composant Highcharts avec les options passées en paramètre
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
        />
    );
};

// Exporte le composant HighChartComponent
export default HighChartComponent;
