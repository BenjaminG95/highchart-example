import React from 'react';
import HighChartComponent from './components/HighChartComponent'; // Importe le composant HighChartComponent

const Home = () => {
    const chartData = {
        values: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 8, 6, 5, 15],
        dates: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
    }

    // Configuration des options du graphique Highcharts
    const chartOptions = {
        chart: { // Doc : https://api.highcharts.com/class-reference/Highcharts.Chart
            // Vous pouvez le décommenter ces options pour activer le zoom et le déplacement dans le graphique

            // zoomType: 'xy', // Permet le zoom sur les axes X et Y pour une meilleure analyse des données.
            // panning: true, // Active le déplacement dans le graphique pour explorer les données
            // panKey: 'shift', // Définit la touche "shift" comme clé pour activer le déplacement.
        },
        title: { // Doc : https://api.highcharts.com/class-reference/Highcharts.Title
            text: 'Exemple de graphique Highcharts', // Définit le titre du graphique
        },
        series: [ // Doc : https://api.highcharts.com/class-reference/Highcharts.Series
            {
                type: 'line', // Spécifie le type de graphique comme étant un graphique linéaire
                data: chartData.values, // Les données de la série affichée dans le graphique
                color: '#ef06ff', // Couleur des lignes du graphique
            },
        ],
        xAxis: { // Doc : https://api.highcharts.com/class-reference/Highcharts.Axis
            categories: chartData.dates, // Catégories sur l'axe des abscisses (X)
        },
        yAxis: {
            title: {
                text: 'Valeurs', // Titre de l'axe des ordonnées (Y)
            },
        },
        legend: { // Doc : https://api.highcharts.com/class-reference/Highcharts.Legend
            layout: 'vertical', // Disposition de la légende du graphique
            align: 'right', // Alignement de la légende à droite
            verticalAlign: 'middle', // Alignement vertical de la légende au milieu
        },
        plotOptions: { // Doc : https://api.highcharts.com/highcharts/plotOptions
            series: { // Doc : https://api.highcharts.com/highcharts/plotOptions.series
                // pointStart: 2010, // Point de départ des données sur l'axe des abscisses. Si définit, les catégories sont ignorées. Testez!
            },
        },
        exporting: {  // Doc : https://api.highcharts.com/highcharts/exporting
            enabled: true, // Active l'option d'exportation pour permettre aux utilisateurs de télécharger le graphique
        },
        credits: {
            enabled: false, // Désactive le crédit pour l'utilisation de Highcharts (hihcharts.com à droite du graphique)
        },
        // TODO add tooltip and more examples.
    };

    return (
        <div className="container"> {/* Conteneur pour le composant HighChart */}
            <HighChartComponent
                options={chartOptions}/> {/* Rendu du composant HighChart avec les options configurées */}
        </div>
    );
};

export default Home; // Exporte le composant Home pour l'utiliser dans l'application
