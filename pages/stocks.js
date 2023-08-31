import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';




function StockDataApp() {
  const [historicalData, setHistoricalData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isNewDataFetching, setIsNewDataFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stockCode, setStockCode] = useState('');
  const [intervalValue, setIntervalValue] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setIsLoading(true);
    setFormSubmitted(true);
    setIsNewDataFetching(true);

    try {
      // Simulated response
      const response = await axios.post('http://localhost:3001/api/saveData', {
        stockCode,
        interval: intervalValue,
        fromDate,
        toDate,
      });

      console.log(response.data);

      setTimeout(() => {
        setIsNewDataFetching(false);
        setIsLoading(false);
      }, 55000);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setFormSubmitted(false);
      setIsNewDataFetching(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next') {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      setIsLoading(true);
      fetchData();
    }
  }, [formSubmitted, currentPage, stockCode, intervalValue, fromDate, toDate]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const timestamp = new Date().getTime();

      // Delay for 1 minute (60000 milliseconds) before making the API call
      await new Promise((resolve) => setTimeout(resolve, 60000));

      const dataResponse = await axios.get(
        `http://localhost:3001/api/getHistoricalData?stockCode=${stockCode}&page=${currentPage}&timestamp=${timestamp}&interval=${intervalValue}`
      );
      setHistoricalData(dataResponse.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setIsNewDataFetching(false);
    }
  };

  const renderTable = () => {
    const rows = historicalData.split('\n');
    const headers = rows[0].split(',');

    return (
      <table className="table w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-gray-300">
              {row.split(',').map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="bg-gradient-to-r from-black-800 to-black text-white min-h-screen">
      <div className='pb-20 px-10'>
            <Navbar />
            </div>
          



      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-8 flex bg-gradient-text justify-center pb-3">Stock Data Input</h2>
        <form onSubmit={handleSubmit} className="mb-8 flex flex-wrap gap-4">
          <div className="flex items-center">
            <label className="mr-4 text-white">Stock Code:</label>
            <input
              type="text"
              value={stockCode}
              onChange={(e) => setStockCode(e.target.value)}
              className="border rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-4 text-white">Interval:</label>
            <input
              type="text"
              value={intervalValue}
              onChange={(e) => setIntervalValue(e.target.value)}
              className="border rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-4 text-white">From Date:</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-4 text-white">To Date:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border rounded px-2 py-1 text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-900 transition duration-300 ease-in-out"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        {historicalData && (
          <div className="table-container w-full overflow-x-auto">
            {isLoading || isNewDataFetching ? (
              <p className="text-gray-400">{isLoading ? 'Loading...' : 'Fetching new data...'}</p>
            ) : (
              renderTable()
            )}
          </div>
        )}

        {historicalData && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePagination('prev')}
              className={`${
                currentPage === 1 || isLoading ? 'hidden' : 'block'
              } bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-600 transition duration-300 ease-in-out`}
            >
              Previous
            </button>
            <span className="text-gray-400">Page {currentPage}</span>
            <button
              onClick={() => handlePagination('next')}
              className={`${
                isLoading ? 'hidden' : 'block'
              } bg-blue-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-blue-600 transition duration-300 ease-in-out`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockDataApp;
