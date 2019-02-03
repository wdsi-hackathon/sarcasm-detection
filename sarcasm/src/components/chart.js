import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = (props) => {
    let label = ['Not-Sarcastic', 'Sarcastic']
    // console.log(props.dashboard)
    const data = {
        labels:
            label
        ,
        datasets: [{
            data: [props.probability_0, props.probability_1],
            backgroundColor: [
                '#ffffff',
                'crimson'
            ],
            hoverBackgroundColor: [
                '#9c9898',
                'rgb(197, 83, 106)'
            ]
        }]
    };
    return (
        <div>
            
            <Pie data={data} />
        </div>
    );
}

export default Chart;
