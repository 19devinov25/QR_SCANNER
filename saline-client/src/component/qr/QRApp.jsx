
import React, { useState } from 'react';
import './QRApp.css';
import ScanSection from './ScanSection';
import AddDeviceContainer from './AddDeviceContainer';
import Navbar from '../device/Navbar';
import { useNavigate } from 'react-router-dom';
const QRApp = () => {

  const [decodedResults, setDecodedResults] = useState([]);
  const [showScanDetails, setShowScanDetails] = useState(false);
  const [showDeviceDetails, setShowDeviceDetails] = useState(false);
  const [clientID, setClientID] = useState('');
  const [deviceID, setDeviceID] = useState('');
  const [decodedText, setDecodedText] = useState(''); 
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const onNewScanResult = (decodedText, decodedResults) => {
    const extractedNumber = decodedText.replace(/\D/g, '');
    console.log("App [result]", extractedNumber);
    setDecodedText(extractedNumber);
    setDecodedResults(prev => [...prev, decodedResults]);
    setDeviceID(decodedText);
    handleAddDevice();

    };

  const handleScanClick = () => {
    setShowScanDetails(true);
    setShowDeviceDetails(false);
    
  };

  const handleAddDeviceClick = () => {
    setShowScanDetails(false);
    setShowDeviceDetails(true);
    
  };

  const handleAddDevice = (e) => {

    e.preventDefault();
    // Perform any necessary validation or API calls
    // Set the result using setResult
    const addedDeviceResult = `Client ID: ${clientID}, Device ID: ${deviceID}`;
    setResult(addedDeviceResult);
    const storedClientId = sessionStorage.getItem('clientid');
    setClientID(storedClientId)
    // Make a POST request to update the client and device IDs
    fetch('https://salineserver.onrender.com/update-client-device', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clientID, deviceID }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error updating client and device IDs:', error);
      });
      navigate('/device');
  };

  const getClientDevice = () => {
    // Make a GET request to fetch the client and device IDs
    fetch('https://salineserver.onrender.com/get-client-device')
      .then((response) => response.json())
      .then((data) => {
        setClientID(data.clientID);
        setDeviceID(data.deviceID);
      })
      .catch((error) => {
        console.error('Error fetching client and device IDs:', error);
      });
  };

  // Fetch the client and device IDs when the component mounts
  React.useEffect(() => {
    getClientDevice();
  }, []);

  return (<>
    <Navbar />
    <div className="QRApp">
   
      <ScanSection
        showScanDetails={showScanDetails}
        handleScanClick={handleScanClick}
        decodedResults={decodedResults}
        onNewScanResult={onNewScanResult}
        navigate={navigate} 
      />
      <AddDeviceContainer
        showDeviceDetails={showDeviceDetails}
        handleAddDeviceClick={handleAddDeviceClick}
        handleAddDevice={handleAddDevice}
        clientID={clientID}
        setClientID={setClientID}
        deviceID={deviceID}
        setDeviceID={setDeviceID}
        result={result}
      />
    </div>
    </>
  );
};

export default QRApp;
