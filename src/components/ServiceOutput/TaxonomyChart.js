import React from "react";
import {Pie} from "react-chartjs-2";

function TaxonomieChart({ frequencies}) {

    const data = {
        labels: [
//todo
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

export default TaxonomieChart;
