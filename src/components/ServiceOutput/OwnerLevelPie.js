import React from "react";
import {Pie} from "react-chartjs-2";

function OwnerLevelPie({ frequencies}) {

    const mock = [2,3,6,7, 4,10,4,11,9,8,3, 2,9];

    const data = {
        labels: [
            'Niveau Entreprise',
            'Niveau SBU',
            'Niveau Programme',
            'Niveau Projet',
            'Niveau Process'
        ],
        datasets: [{
            data: frequencies,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#a7ffa3',
                '#F1A3FF'

            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#07d800',
                '#eeff00'
            ]
        }]
    };

    return (
        <Pie data={data}/>

    );
}

export default OwnerLevelPie;
