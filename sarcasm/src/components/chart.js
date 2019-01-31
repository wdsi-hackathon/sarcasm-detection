import React from 'react';
import { Pie } from 'react-chartjs-2';



const result = (props) => {
    console.log(props)
    const firstObject = {
        criminal: props.dashboardLowyers ? props.dashboardLowyers.criminal : '',
        legalrights: props.dashboardLowyers ? props.dashboardLowyers.legalrights : '',
        familystatus: props.dashboardLowyers ? props.dashboardLowyers.familystatus : '',
        commercial: props.dashboardLowyers ? props.dashboardLowyers.commercial : '',
        labour: props.dashboardLowyers ? props.dashboardLowyers.labour : '',
    }
    let label = Object.keys(firstObject)
    let num = Object.values(firstObject)

    const data = {
        labels:
            label
        ,
        datasets: [{
            data: num,
            backgroundColor: [
                '#a99c8b',
                '#a3b8a2'
            ],
            hoverBackgroundColor: [
                '#84796a',
                '#879986'
            ]
        }]
    };

    return (<div>
            <h2>The Result</h2>
            <div>
                <Pie data={data} />
            </div>

</div>
  
    );
}
export default result;