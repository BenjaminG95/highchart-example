'use client' // S'assure que le code est exécuté en mode strict

import {useEffect, useRef} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ExportingModule from "highcharts/modules/exporting";

const HighChartComponent = ({ options }) => {
    // Crée une référence pour le composant Highcharts
    const chartComponentRef = useRef(null);

    // use effect pour activer le module d'exportation sur le graphique seulement une fois (car les dépendances ne changent pas)
    useEffect(() => {
        // Active le module d'exportation pour Highcharts
        ExportingModule(Highcharts);
    }, []) // Les dépendances sont vides pour que le module ne soit activé qu'une seule fois

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
