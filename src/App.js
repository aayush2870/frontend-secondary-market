import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./App.css";
import graphData from "./tokenData.json"; // Import your JSON data
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [selectedToken, setSelectedToken] = useState(null); // Track the selected token
  const [priceData, setPriceData] = useState([]); // Store token-specific price data

  const cardData = [
    { token: "1", chain: "data", provider: "data", balance: "data.03", liquidity: "$data.02B", volume: "$4,data,404,776", logo: "🔵" },
    { token: "2", chain: "data", provider: "Metis", balance: "3,960.20", liquidity: "$40.27B", volume: "$42,355,689,642", logo: "🟢" },
    { token: "3", chain: "data", provider: "Metis", balance: "2,010.50", liquidity: "$12.56B", volume: "$2,556,789,123", logo: "🟡" },
    { token: "4", chain: "data", provider: "Metis", balance: "0.76", liquidity: "$810.50B", volume: "$9,760,234,567", logo: "🟠" },
    { token: "5", chain: "data", provider: "Metis", balance: "4.52", liquidity: "$160.32B", volume: "$12,345,678,901", logo: "🔷" },
    { token: "6", chain: "data", provider: "Metis", balance: "203.43", liquidity: "$50.67B", volume: "$1,456,678,999", logo: "🟤" },
    { token: "7", chain: "data", provider: "Metis", balance: "10,000", liquidity: "$8.02B", volume: "$256,678,433", logo: "🟣" },
    { token: "8", chain: "data", provider: "Metis", balance: "2,456", liquidity: "$15.43B", volume: "$1,345,555,333", logo: "🟩" },
    { token: "9", chain: "data", provider: "Metis", balance: "654.21", liquidity: "$6.89B", volume: "$543,123,678", logo: "🔺" },
  ];

  // Function to fetch price data for a selected token
  const fetchPriceData = (token) => {
    const data = graphData[token] || [];
    setPriceData(data);
  };

  // Fetch price data whenever a token is selected
  useEffect(() => {
    if (selectedToken) {
      fetchPriceData(selectedToken);
    }
  }, [selectedToken]);

  // Chart.js data
  const chartData = {
    labels: priceData.map((data) => data.date), // Dates for the x-axis
    datasets: [
      {
        label: `${selectedToken} Price`,
        data: priceData.map((data) => data.price), // Prices for the y-axis
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // Function to handle token selection
  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  // Function to go back to the dashboard
  const handleBack = () => {
    setSelectedToken(null);
  };

  // Find selected token details
  const tokenDetails = selectedToken
    ? cardData.find((item) => item.token === selectedToken)
    : null;

  return (
    <div className="app">
      {selectedToken ? (
        <div className="detail-page">
          <button className="back-button" onClick={handleBack}>Back</button>
          {tokenDetails ? (
            <div className="detail-container">
              <div className="graph-section">
                <h2>{tokenDetails.token} Price Chart</h2>
                <div className="graph-placeholder">
                  <Line data={chartData} />
                </div>
              </div>
              <div className="info-section">
                <div className="buy-sell-container">
                  <h2>Trade {tokenDetails.token}</h2>
                  <div className="trade-box">
                    <div className="trade">
                      <h3>Buy</h3>
                      <input type="number" placeholder="Amount" />
                      <button>Buy</button>
                    </div>
                    <div className="trade">
                      <h3>Sell</h3>
                      <input type="number" placeholder="Amount" />
                      <button>Sell</button>
                    </div>
                  </div>
                </div>
                <div className="small-cards">
                  <div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div>
                  <div className="small-card">
                    <p>Provider</p>
                    <h3>{tokenDetails.provider}</h3>
                  </div>
                  <div className="small-card">
                    <p>Liquidity</p>
                    <h3>{tokenDetails.liquidity}</h3>
                  </div>
                  <div className="small-card">
                    <p>Volume (24h)</p>
                    <h3>{tokenDetails.volume}</h3>
                  </div>
                  <div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div>
                  <div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div>
                  <div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div>
                  <div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div><div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div>
                  <div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div>
                  <div className="small-card">
                    <p>Chain</p>
                    <h3>{tokenDetails.chain}</h3>
                  </div>
                 
                </div>
              </div>
            </div>
          ) : (
            <p>Token details not found.</p>
          )}
        </div>
      ) : (
        <div className="dashboard">
          <div className="left-panel">
            <ul className="sections">
              <li>Secondary Market</li>
            </ul>
          </div>
          <div className="main-content">
            <h1>Secondary Market</h1>
            <div className="card-container">
              {cardData.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => handleTokenSelect(item.token)} // Select token when card is clicked
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-header">
                    <div className="token-logo">{item.logo}</div>
                    <div>
                      <h2>{item.token}</h2>
                      <p>{item.balance} {item.token}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;




