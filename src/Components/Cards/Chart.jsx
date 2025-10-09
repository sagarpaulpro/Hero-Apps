import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, } from 'recharts';


const Chart = ({ rateing }) => {
     const data = [...(rateing || [])].reverse();
    return (
        <ComposedChart
            layout="vertical" width={500} height={400} data={data} 
             margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
            >

            <XAxis type="number" tickLine={false} axisLine={false}/>
            <YAxis dataKey="name" type="category" scale="point" tickLine={false} axisLine={false} padding={{bottom: 20}}/>
            <Bar dataKey="count" barSize={30} fill="#FF8811" />
        </ComposedChart>
    );
};

export default Chart;
