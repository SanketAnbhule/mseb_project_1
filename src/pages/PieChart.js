import React, { useState, useEffect } from 'react';
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar,Doughnut,Line} from 'react-chartjs-2';
import axios from 'axios';
import './bar.css';
import { useApi } from './ApiContext';

const PieChart = () => {
  const [sourceData, setSourceData] = useState([]);
  const baseUrl = useApi();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/data`);
        setSourceData( response.data);
        console.log(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [baseUrl]);

  return (
    <div className="Aqwe" style={{backgroundColor:"black"}}>
      <div className='dataCard revenueCard'>
       
      
      <Bar


        data={{
          labels: sourceData.map((data) => data.formType),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.count),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
        
        }}
      />
      
      </div>
     
    </div>
  
  );
};

export default PieChart;
