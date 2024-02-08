'use client'; // S'assure que le code est exécuté en mode strict

import {useRef} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ExportingModule from "highcharts/modules/exporting";

const HighChartComponent = ({ options }) => {
    // Crée une référence pour le composant Highcharts
    const chartComponentRef = useRef(null);

    // Utilise le module d'exportation Highcharts
    // Si Highcharts est un objet, utilise le module d'exportation Highcharts
    // ça permet de l'initialiser une seule fois et de ne pas avoir d'erreur au reload de la page
    if (typeof Highcharts === 'object') {
        ExportingModule(Highcharts)
    }

    // Renvoie le composant Highcharts avec les options passées en paramètre
    return (<HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
    />);
};

// Exporte le composant HighChartComponent
export default HighChartComponent;
