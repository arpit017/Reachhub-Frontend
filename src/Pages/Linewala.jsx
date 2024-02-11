import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export const Linewala = () => {
  const history = useSelector((state) => state.history);

  // Transform history data into Recharts-compatible format
  const lineChartData = history.map((entry, index) => ({
    date: `${entry[0]}-${entry[1]}-${entry[2]}`,
    rating: entry[3],
    index: index // Added an index to ensure unique keys
  }));

  return (
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=600')", height: "100vh" }}>
      <h2 style={{marginBottom:"100px"}}>Rating History</h2>
      <LineChart width={800} height={400} data={lineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="rating" stroke="white" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};
