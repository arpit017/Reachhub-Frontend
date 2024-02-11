import React from 'react';
import { useSelector } from 'react-redux'; // Corrected import
import Navbar from './Navbar';
import { Line } from 'react-chartjs-2';

import { Charts } from './Charts';

export const History = () => {
  const history = useSelector((state) => state.history);
console.log(history)
  return (
    <div style={{ backgroundImage: "url('https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=600')", color: "white", height: "100vh" }}>
      <Navbar />
      <h2>Here is your Rating for 30 days</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
        padding: "20px"
      }}>
        {
          history.length > 0 && history.map((ele, index) => (
            <div key={index}>
              <h2>{ele[3]}</h2> {/* Ensure ele[3] exists and is the correct data you intend to show */}
           
            </div>
          ))
        }
      </div>
      <Charts/>
    </div>
  );
};


