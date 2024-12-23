import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
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
//e
import "./App.css";

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
    { token: "USDC", chain: "data", provider: "data", balance: "data.03", liquidity: "$data.02B", volume: "$4,data,404,776", logo: "🔵" },
    { token: "USDT", chain: "data", provider: "Metis", balance: "3,960.20", liquidity: "$40.27B", volume: "$42,355,689,642", logo: "🟢" },
    { token: "DAI", chain: "data", provider: "Metis", balance: "2,010.50", liquidity: "$12.56B", volume: "$2,556,789,123", logo: "🟡" },
    { token: "BTC", chain: "data", provider: "Metis", balance: "0.76", liquidity: "$810.50B", volume: "$9,760,234,567", logo: "🟠" },
    { token: "ETH", chain: "data", provider: "Metis", balance: "4.52", liquidity: "$160.32B", volume: "$12,345,678,901", logo: "🔷" },
    { token: "BNB", chain: "data", provider: "Metis", balance: "203.43", liquidity: "$50.67B", volume: "$1,456,678,999", logo: "🟤" },
    { token: "MATIC", chain: "data", provider: "Metis", balance: "10,000", liquidity: "$8.02B", volume: "$256,678,433", logo: "🟣" },
    { token: "SOL", chain: "data", provider: "Metis", balance: "2,456", liquidity: "$15.43B", volume: "$1,345,555,333", logo: "🟩" },
    { token: "AVAX", chain: "data", provider: "Metis", balance: "654.21", liquidity: "$6.89B", volume: "$543,123,678", logo: "🔺" },
  ];

  // Function to fetch price data for a selected token (dummy example)
  const fetchPriceData = async (token) => {
    // Simulated price data based on token (replace with real API call)
    const data = [
      { date: "2024-12-01", price:  2 }, // Random prices for illustration
      { date: "2024-12-02", price:  4  },
      { date: "2024-12-03", price:  500},
      { date: "2024-12-04", price:  100 + 50 },
      { date: "2024-12-05", price:  10 + 50 },
    ];
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



// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./App.css";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function App() {
//   const [selectedToken, setSelectedToken] = useState(null); // Track the selected token
//   const [priceData, setPriceData] = useState([]); // Store token-specific price data

//   const cardData = [
//     { token: "USDC", chain: "Ethereum", provider: "Metis", balance: "534.03", liquidity: "$3.02B", volume: "$4,560,404,776", logo: "🔵" },
//     { token: "USDT", chain: "Solana", provider: "Metis", balance: "3,960.20", liquidity: "$40.27B", volume: "$42,355,689,642", logo: "🟢" },
//     { token: "DAI", chain: "Polygon", provider: "Metis", balance: "2,010.50", liquidity: "$12.56B", volume: "$2,556,789,123", logo: "🟡" },
//     { token: "BTC", chain: "Bitcoin", provider: "Metis", balance: "0.76", liquidity: "$810.50B", volume: "$9,760,234,567", logo: "🟠" },
//     { token: "ETH", chain: "Ethereum", provider: "Metis", balance: "4.52", liquidity: "$160.32B", volume: "$12,345,678,901", logo: "🔷" },
//     { token: "BNB", chain: "Binance", provider: "Metis", balance: "203.43", liquidity: "$50.67B", volume: "$1,456,678,999", logo: "🟤" },
//     { token: "MATIC", chain: "Polygon", provider: "Metis", balance: "10,000", liquidity: "$8.02B", volume: "$256,678,433", logo: "🟣" },
//     { token: "SOL", chain: "Solana", provider: "Metis", balance: "2,456", liquidity: "$15.43B", volume: "$1,345,555,333", logo: "🟩" },
//     { token: "AVAX", chain: "Avalanche", provider: "Metis", balance: "654.21", liquidity: "$6.89B", volume: "$543,123,678", logo: "🔺" },
//   ];

//   // Dummy price data for demonstration purposes
//   const priceDataMap = {
//     USDC: [
//       { date: "2024-12-01", price: 1.01 },
//       { date: "2024-12-02", price: 1.02 },
//       { date: "2024-12-03", price: 1.03 },
      
//     ],
//     USDT: [
//       { date: "2024-12-01", price: 1.00 },
//       { date: "2024-12-02", price: 1.01 },
//       { date: "2024-12-03", price: 1.02 },
//     ],
//     DAI: [
//       { date: "2024-12-01", price: 1.00 },
//       { date: "2024-12-02", price: 1.01 },
//       { date: "2024-12-03", price: 1.03 },
//     ],
//     BTC: [
//       { date: "2024-12-01", price: 55000 },
//       { date: "2024-12-02", price: 56000 },
//       { date: "2024-12-03", price: 57000 },
//     ],
//     ETH: [
//       { date: "2024-12-01", price: 1800 },
//       { date: "2024-12-02", price: 1850 },
//       { date: "2024-12-03", price: 1900 },
//     ],
//     BNB: [
//       { date: "2024-12-01", price: 300 },
//       { date: "2024-12-02", price: 310 },
//       { date: "2024-12-03", price: 320 },
//     ],
//     MATIC: [
//       { date: "2024-12-01", price: 1.20 },
//       { date: "2024-12-02", price: 1.25 },
//       { date: "2024-12-03", price: 1.30 },
//     ],
//     SOL: [
//       { date: "2024-12-01", price: 20 },
//       { date: "2024-12-02", price: 21 },
//       { date: "2024-12-03", price: 22 },
//     ],
//     AVAX: [
//       { date: "2024-12-01", price: 14 },
//       { date: "2024-12-02", price: 15 },
//       { date: "2024-12-03", price: 16 },
//     ],
//   };

//   // Fetch price data for a selected token
//   const fetchPriceData = (token) => {
//     setPriceData(priceDataMap[token] || []);
//   };

//   // Fetch price data whenever a token is selected
//   useEffect(() => {
//     if (selectedToken) {
//       fetchPriceData(selectedToken);
//     }
//   }, [selectedToken]);

//   // Chart.js data
//   const chartData = {
//     labels: priceData.map((data) => data.date), // Dates for the x-axis
//     datasets: [
//       {
//         label: `${selectedToken} Price`,
//         data: priceData.map((data) => data.price), // Prices for the y-axis
//         fill: false,
//         borderColor: "rgba(75, 192, 192, 1)",
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="app">
//       {selectedToken ? (
//         <div className="detail-page">
//           <button className="back-button" onClick={() => setSelectedToken(null)}>Back</button>
//           <div className="detail-container">
//             <h2>{selectedToken} Price Chart</h2>
//             <Line data={chartData} />
//             <div className="info-section">
//               <h3>Token Details</h3>
//               <p>Chain: {cardData.find((item) => item.token === selectedToken)?.chain}</p>
//               <p>Provider: {cardData.find((item) => item.token === selectedToken)?.provider}</p>
//               <p>Liquidity: {cardData.find((item) => item.token === selectedToken)?.liquidity}</p>
//               <p>Volume: {cardData.find((item) => item.token === selectedToken)?.volume}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="dashboard">
//           <h1>Secondary Market</h1>
//           <div className="card-container">
//             {cardData.map((item, index) => (
//               <div
//                 key={index}
//                 className="card"
//                 onClick={() => setSelectedToken(item.token)}
//               >
//                 <div className="card-header">
//                   <div className="token-logo">{item.logo}</div>
//                   <div>
//                     <h2>{item.token}</h2>
//                     <p>{item.balance} {item.token}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;  

 