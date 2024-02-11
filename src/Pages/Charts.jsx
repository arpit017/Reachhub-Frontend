


import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell } from "recharts";

export const Charts = () => {
  const history = useSelector((state) => state.history);

  // Transform history data into Recharts-compatible format
  const pieChartData = history.map(entry => ({
    date: `${entry[0]}-${entry[1]}-${entry[2]}`,
    rating: entry[3]
  }));

  return (
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=600')", color: "white", height: "100vh" }}>
      <h2>Rating Distribution</h2>
      <PieChart width={600} height={600} >
        <Pie
          data={pieChartData}
          dataKey="rating"
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill="#8884d8"
          label
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
