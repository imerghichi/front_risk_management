import React from "react";
import {Pie} from "react-chartjs-2";

function OwnerLevelPie({ frequencies}) {

    const data = {
        labels: [
            '0-10',
            '10-20',
            '20-30',
            '30-40',
            '40-50',
            '50-60',
            '60-70',
            '70-80',
            '80-90',
            '90-10'
        ],
        datasets: [{
            data:{frequencies},
            backgroundColor: [

            ],
            hoverBackgroundColor: [

            ]
        }]
    };

    return (
        <Bar data={data}/>
    );
}

export default OwnerLevelPie;
