import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const COLORS = ['#5AA454','#A10A28'];

const Report: React.FC<{ activity: any; view: [number, number]; total: number }> = ({ activity, view, total }) => {
  const [data, setData] = useState([{ name: 'Productivity', value: 0 }, { name: 'Inproductivity', value: 0 }]);

  useEffect(() => {
    setData([
      { name: activity.name, value: total },
      { name: 'Inproductivity', value: 5 - total } // Asumimos que el total debe ser 5 (ajustar según necesidades)
    ]);
  }, [total, activity]);

  // Calcular el porcentaje
  const productivityPercentage = (data[0].value / 5) * 100;

  return (
    <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <h3>{activity.name}</h3>
      <ResponsiveContainer width={view[0]} height={view[1]}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            innerRadius={40}  // Ajustamos para crear el gráfico de anillo
            fill="#8884d8"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            <Label
              value={`${Math.round(productivityPercentage)}%`}  // Mostrar porcentaje en el centro
              position="center"
              fontSize={18}
              fill="#333"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Report;
