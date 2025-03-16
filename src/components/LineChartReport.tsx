import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartReport: React.FC<{ activity: { name: string; productivity: number[] }; view: [number, number] }> = ({ activity, view }) => {
  const data = [
    { day: 'Lunes', value: activity.productivity[0] },
    { day: 'Martes', value: activity.productivity[1] },
    { day: 'Miércoles', value: activity.productivity[2] },
    { day: 'Jueves', value: activity.productivity[3] },
    { day: 'Viernes', value: activity.productivity[4] },
  ];

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{activity.name} - Productividad Semanal</h3>
      <ResponsiveContainer width={view[0]} height={view[1]}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartReport;
