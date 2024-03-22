import * as React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
    {name: 'Page A', uv: 250, pv: 1000},
    {name: 'Page B', uv: 500, pv: 500},
    {name: 'Page C', uv: 250, pv: 1000},
];

export const Chart = () => {
    return (
        <LineChart width={600} height={200} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#0099dd" />
            <Line type="monotone" dataKey="pv" stroke="#dd9900" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    )
}
