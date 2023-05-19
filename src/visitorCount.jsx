import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3AYOUR_VIEW_ID&metrics=ga%3Ausers&start-date=30daysAgo&end-date=yesterday',
          
          {
            headers: {
              Authorization: 'Bearer YOUR_ACCESS_TOKEN'
            }
          }
        );

        const count = response.data.totalsForAllResults['ga:users'];
        setVisitorCount(count);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Visitor Count:</h2>
      <p>{visitorCount}</p>
    </div>
  );
};

export default VisitorCount;
