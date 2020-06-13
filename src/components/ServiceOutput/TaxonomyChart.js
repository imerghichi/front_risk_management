import React from "react";
import {Bar, Pie} from "react-chartjs-2";
import {Card} from "primereact/card";

function TaxonomieChart({ frequencies}) {
    const mock = [2,3,6,7, 4,10,4,11,9,8,3, 2,9];

    const data = {
        labels: [
            'Requirement',
            'Design',
            'Code et tests unitaires',
            'Test et integration',
            'Spécialités d\'ingénieurie',

            'Processus de développement',
            'Systeme de développement',
            'Processus de gestion',
            'Méthodes de gestion',
            'Environnement de travail',

            'Ressources',
            'Contrat',
            'Interface de programme'

        ],
        datasets: [{
            data:mock,
            backgroundColor: [
                '#FF6384',
                '#FF6384',
                '#FF6384',
                '#FF6384',
                '#FF6384',

                '#36A2EB',
                '#36A2EB',
                '#36A2EB',
                '#36A2EB',
                '#36A2EB',

                '#07d800',
                '#07d800',
                '#07d800',

            ],
            hoverBackgroundColor: [

            ]
        }]
    };

    return (
            <div>
                <h2>Taxonomie</h2>
                <Bar data={data} legend={null} />
                <div>

                </div>
        </div>
        );
}

export default TaxonomieChart;
