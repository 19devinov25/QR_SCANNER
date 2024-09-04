import "./DApp.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import OutlinedCard from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack } from "@mui/system";
// import { useClientId } from "../../userid";

function DApp(props) {
  const [clientid,setClientId] = useState()
  const [clientDevices, setClientDevices] = useState([]);
  const navigate = useNavigate();
  const handleCardClick = (deviceID) => {
    console.log("hee");
    navigate(`/Device-Status/${deviceID}`); // Navigate to Device-Status/:deviceID route
  };
  useEffect(() => {
    // Fetch data from Flask API
    const storedClientId = sessionStorage.getItem('clientid'); // Retrieve clientid from session storage
    if (storedClientId) {
      setClientId(storedClientId);
    }
    fetch("https://salineserver.onrender.com/client/" + storedClientId + "/devices")
      .then((response) => response.json())
      .then((data) => {
        setClientDevices(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          {/* Loop through the clientDevices array and render the OutlinedCard component */}
          {clientDevices &&
            clientDevices.map((device) => (
              <OutlinedCard
                key={device.device_id}
                deviceid={device.device_id}
                devicename={device.device_name}
                onClick={() => handleCardClick(device.device_id)}
              />
            ))}
        </Stack>
      </div>
    </>
  );
}

export default DApp;
