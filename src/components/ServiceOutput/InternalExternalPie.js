import {Button} from "react-bootstrap";

import React from "react";
import {Pie} from "react-chartjs-2";

function InternalExternalPie({frequencies}) {

    const mock = [2,3];

    const data = {
        labels: [
            'Externe',
            'Interne'
        ],
        datasets: [{
            data: mock,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <Pie data={data}/>
    );
}

export default InternalExternalPie;
