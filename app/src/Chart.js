import { useEffect, useState } from "react";
import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

export const Chart = () => {
    const [points, setPoints] = useState([])
    useEffect(() => {
    axios.get('http://localhost:8080/cpu-utilization?startTime=2024-03-22T08%3A00%3A00&endTime=2024-03-22T10%3A00%3A00')
      .then(resp => {
        setPoints(resp.data.points)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        console.log('done')
      })
  },[])
    return (
        <LineChart width={600} height={200} data={points}>
            <Line type="monotone" dataKey="value" stroke="#ee99cc" />
            <XAxis dataKey="dateTime" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    )
}
