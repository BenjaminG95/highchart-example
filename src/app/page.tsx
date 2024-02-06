import React from 'react';
import HighChartComponent from './components/HighChartComponent'; // Importe le composant HighChartComponent

const Home = () => {
    // Configuration des options du graphique Highcharts
    const chartOptions = {
        chart: {
            // Vous pouvez le décommenter ces options pour activer le zoom et le déplacement dans le graphique

            // zoomType: 'xy', // Permet le zoom sur les axes X et Y pour une meilleure analyse des données.
            // panning: true, // Active le déplacement dans le graphique pour explorer les données
            // panKey: 'shift', // Définit la touche "shift" comme clé pour activer le déplacement.
        },
        title: {
            text: 'Exemple de graphique Highcharts', // Définit le titre du graphique
        },
        series: [
            {
                type: 'line', // Spécifie le type de graphique comme étant un graphique linéaire
                data: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 8, 6, 5, 15], // Les données de la série affichée dans le graphique
                color: '#ef06ff', // Couleur des lignes du graphique
            },
        ],
        xAxis: {
            // categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021], // Catégories sur l'axe des abscisses (X)
        },
        yAxis: {
            title: {
                text: 'Valeurs', // Titre de l'axe des ordonnées (Y)
            },
        },
        legend: {
            layout: 'vertical', // Disposition de la légende du graphique
            align: 'right', // Alignement de la légende à droite
            verticalAlign: 'middle', // Alignement vertical de la légende au milieu
        },
        plotOptions: {
            series: {
                // pointStart: 2010, // Point de départ des données sur l'axe des abscisses. Si définit, les catégories sont ignorées. Testez!
            },
        },
        exporting: {
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
