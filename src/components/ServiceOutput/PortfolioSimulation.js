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
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
        }]
    };

    return (
        <Bar data={data}/>
    );
}

export default OwnerLevelPie;
