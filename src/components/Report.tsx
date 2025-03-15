import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#A10A28', '#5AA454'];

const Report: React.FC<{ activity: any; view: [number, number]; total: number }> = ({ activity, view, total }) => {
  const [data, setData] = useState([{ name: 'Productivity', value: 0 }, { name: 'Inproductivity', value: 0 }]);

  useEffect(() => {
    setData([
      { name: activity.name, value: total },
      { name: 'Inproductivity', value: 5 - total } // Asumimos que el total debe ser 5 (ajustar según necesidades)
    ]);
  }, [total, activity]);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{activity.name}</h3>
      <ResponsiveContainer width={view[0]} height={view[1]}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Report;
