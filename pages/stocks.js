import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';

import Navbar from '../components/Navbar';

const intervalOptions = ['1minute', '5minute', '1day'];

function StockDataApp() {
  const [historicalData, setHistoricalData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isNewDataFetching, setIsNewDataFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stockCode, setStockCode] = useState('');
  const [intervalValue, setIntervalValue] = useState('1minute');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [stopInfiniteFetch, setStopInfiniteFetch] = useState(false);
  const [dataFetched, setDataFetched] = useState(false); // New state variable

  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 24); // Subtract 24 hours from the current date

  const maxFromDate = currentDate.toISOString().split('T')[0]; // Maximum allowed "From Date"

  // Calculate the maximum allowed "To Date" (3 years from "From Date")
  const maxToDate = new Date(fromDate);
  maxToDate.setFullYear(maxToDate.getFullYear() + 3);
  maxToDate.setDate(maxToDate.getDate() - 1); // Subtract 1 day to ensure it's within 3 years

  // Calculate the maximum allowed "To Date" (3 years from "From Date")
let maxToDateStr = '';
if (fromDate && new Date(fromDate) instanceof Date && !isNaN(new Date(fromDate))) {
  const maxToDate = new Date(fromDate);
  maxToDate.setFullYear(maxToDate.getFullYear() + 3);
  maxToDate.setDate(maxToDate.getDate() - 1); // Subtract 1 day to ensure it's within 3 years
  maxToDateStr = maxToDate.toISOString().split('T')[0];
}


  const fetchData = async () => {
    setIsLoading(true);
    setStopInfiniteFetch(false);

    const initialFetchDelay = 60000; // 60 seconds
    const fetchInterval = 35000; // 35 seconds

    try {
      await new Promise((resolve) => setTimeout(resolve, initialFetchDelay));

      const fetchAndCheckForNewData = async () => {
        const timestamp = new Date().getTime();

        try {
          const dataResponse = await axios.get(
            `https://openrock-python-app-afdcc52d3738.herokuapp.com/api/getAllHistoricalData?stockCode=${stockCode}&page=${currentPage}&timestamp=${timestamp}&interval=${intervalValue}`
          );

          const newData = dataResponse.data;
          if (newData !== historicalData) {
            setHistoricalData(newData);
            setIsLoading(false);
            setIsNewDataFetching(false);
            setStopInfiniteFetch(true);
            setDataFetched(true); // Data has been fetched
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const intervalId = setInterval(fetchAndCheckForNewData, fetchInterval);

      // Perform the initial fetch when the component mounts
      await fetchAndCheckForNewData();

      return () => clearInterval(intervalId);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setIsNewDataFetching(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setIsLoading(true);
    setFormSubmitted(true);
    setIsNewDataFetching(true);

    try {
      const response = await axios.post('https://openrock-python-app-afdcc52d3738.herokuapp.com/api/saveData', {
        stockCode,
        interval: intervalValue,
        fromDate,
        toDate,
      });

      console.log(response.data);

      setTimeout(() => {
        setIsNewDataFetching(false);
        setIsLoading(false);
        fetchData();
      }, 75000);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setFormSubmitted(false);
      setIsNewDataFetching(false);
    }
  };

  useEffect(() => {
    setHistoricalData('');
    setFormSubmitted(false);
    setDataFetched(false); // Reset data fetched state
  }, [stockCode, intervalValue, fromDate, toDate]);

  useEffect(() => {
    if (formSubmitted) {
      setIsLoading(true);
      fetchData();
    }
  }, [formSubmitted, currentPage, stockCode, intervalValue, fromDate, toDate]);

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

  const handleDownloadAllData = async () => {
    try {
      const response = await axios.get(
        `https://openrock-python-app-afdcc52d3738.herokuapp.com/api/getAllHistoricalData?stockCode=${stockCode}`
      );

      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${stockCode}_historical_data.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading data:', error);
    }
  };

  const handlePagination = async (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && !isLoading && !stopInfiniteFetch) {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    }
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);

    // If "To Date" is greater than the selected "From Date," reset it to the selected "From Date"
    if (toDate && new Date(toDate) > new Date(e.target.value)) {
      setToDate(e.target.value);
    }
  };

  return (
    <div className="bg-gradient-to-r from-black-800 to-black text-black min-h-screen">
      <div className="pb-20 px-10">
        <Navbar />
        <Head>
        <title>OpenRock - Realtime NSE Stocks Data</title>
          <meta name="description" content="Your website tagline or description" />
        </Head>
      </div>

      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-8 flex bg-gradient-text justify-center pb-3">
          Stock Data Input
        </h2>
        <form onSubmit={handleSubmit} className="mb-8 flex flex-wrap gap-4">
        <div className="flex items-center">
  <label className="mr-4 text-black">Stock Code (Ex: AXISBANK, BHARTIARTL):</label>
  <input
    type="text"
    value={stockCode}
    onChange={(e) => setStockCode(e.target.value)}
    className="border rounded px-2 py-1 text-black"
  />
</div>

       
          <div className="flex items-center">
            <label className="mr-4 text-black">Interval:</label>
            <select
              value={intervalValue}
              onChange={(e) => setIntervalValue(e.target.value)}
              className="border rounded px-2 py-1 text-black"
            >
              {intervalOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <label className="mr-4 text-black">From Date:</label>
            <input
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
              max={maxFromDate} // Set max date to 24 hours before today
              className="border rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-4 text-black">To Date:</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              max={maxToDateStr} // Set max date to 3 years from "From Date"
              className="border rounded px-2 py-1 text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-black px-6 py-2 rounded-full hover:bg-purple-900 transition duration-300 ease-in-out"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        <div className="flex justify-center mt-4">
          {dataFetched && ( // Show the "Download All Data" button only when data has been fetched
            <button
              onClick={handleDownloadAllData}
              className="bg-green-500 text-black px-6 py-2 rounded-full ml-2 hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Download All Data
            </button>
          )}
        </div>

        {historicalData && (
          <div className="table-container w-full overflow-x-auto">
            {isLoading || isNewDataFetching ? (
              <p className="text-gray-400">
                {isLoading ? 'Loading...' : 'Fetching new data...'}
              </p>
            ) : (
              renderTable()
            )}
          </div>
        )}

        <b> · It might take few minutes to load.</b> <br/>

        <b> · Please use on a PC for a smoother experience.</b>

        <div className="text-left mt-4 text-gray-500">
          The Product is in the beta stage, so you might experience some bugs. If found any, Please refresh and try again.
        </div>
      </div>
    </div>
  );
}

export default StockDataApp;
