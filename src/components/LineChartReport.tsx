import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const LineChartReport: React.FC<{ activities: { name: string; weeklyTotal?: number[] }[]; view: [number, number] }> = ({ activities, view }) => {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie"];

  console.log("LineChartReport - Activities:", activities); // Debug

  // Transformamos los datos para que cada día tenga todas las actividades
  const chartData = days.map((day, index) => {
    const dayData: any = { day };
    activities.forEach((activity) => {
      dayData[activity.name] = (activity.weeklyTotal?.[index] ?? 0); // Aseguramos que siempre tenga un número
    });
    return dayData;
  });

  return (
    <ResponsiveContainer width={view[0]} height={view[1]}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        {activities.map((activity, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={activity.name}
            stroke={`hsl(${index * 60}, 70%, 50%)`}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartReport;
