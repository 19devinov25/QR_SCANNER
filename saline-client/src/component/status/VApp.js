import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import watericon from './assert/water_level.png';
import thermometericon from './assert/thermometer.png';
import IncrementDecrementButton from "./counter";
import BatteryGauge from 'react-battery-gauge';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Navbar from "../device/Navbar"

const Variable = () => {
  const [variables, setVariables] = useState({
    DPM: 23,
    CONSUMEDCAPACITY: 43,
    BATTERY: 78,
    deviceId: 1,
    REMAININGCAPACITY: 32,
    TEMPERATURE: 23,
    HUMIDITY: 54
  });
  // const [storedDeviceId,setstoredDeviceId] =

  useEffect(() => {
    const storedDeviceId = sessionStorage.getItem("deivceid");
    console.log('Stored Device ID:', storedDeviceId);
  
    const fetchVariables = async () => {
      try {
        if (storedDeviceId) {
          const response = await fetch(`https://salineserver.onrender.com/devices/${storedDeviceId}/variables`);
          console.log('Response Status:', response.status, response.statusText);
  
          if (response.ok) {
            const data = await response.json();
            console.log('Fetched Data:', data);
            setVariables(data);
          } else {
            console.error("Failed to fetch variables");
          }
        }
      } catch (error) {
        console.error("Error fetching variables:", error);
      }
    };
  
    fetchVariables();
    const interval = setInterval(fetchVariables, 10000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  


  return (
    <>
      <Navbar />
      <h1 style={{ fontSize: 40, color: "#000", textAlign: "center" }}>DEVICE: {sessionStorage.getItem("deivceid")}</h1>
        <div className="row" direction={"row"} sx={{ flexWrap: "wrap" }}>
        <div class="moni" >Monitoring</div>

        <div className="row1" >

          {/* <TextField id="standard-required" label="Room Temperature" defaultValue="Hello World" variant="standard"InputProps={{readOnly: true,}}/>
        <TextField id="standard-required" label="Humidity" defaultValue="Hello World" variant="standard"InputProps={{readOnly: true,}}/>
        <TextField id="standard-required" label="Drips Per Minute" defaultValue="Hello World" variant="standard"InputProps={{readOnly: true,}}/> */}
          
          <Col>
            {<div className="consumedvol box tab_space">
              <div className="icon"><img src={watericon}></img></div>
              <div className="consumedvalue digit">{variables.CONSUMEDCAPACITY}</div>
              <div className="consumedlabel lbel">
                Consumed Volume
              </div>
            </div>}
          </Col>

          <Col>
            {<div className="remainvol box">
              <div className="icon"><img src={watericon}></img></div>
              <div className="remainvalue digit">{variables.REMAININGCAPACITY}</div>
              <div className="remainlabel lbel">
                Remaining Volume
              </div>
            </div>}
          </Col>
          <Col>
            {<div className="dpm box" >
              <div className="icon"><img src={watericon}></img></div>
              <div className="dvalue digit">{variables.DPM}</div>
              <div className="dpmlabel lbel">
                DPM
              </div>
            </div>}
          </Col>
          <Col>
            {<div className="remainvol box">
              <div className="icon"><img src={thermometericon}></img></div>
              <div className="remainvalue digit">{variables.TEMPERATURE}</div>
              <div className="remainlabel lbel">
              Room Temperature
              </div>
            </div>}
          </Col>
          <Col>
            {<div className="dpm box" >
              <div className="icon"><img src={thermometericon}></img></div>
              <div className="dvalue digit">{variables.HUMIDITY}</div>
              <div className="dpmlabel lbel">
              Humidity
              </div>
            </div>}
          </Col>

          <div className="batteryicon" style={{margin:"1rem"}}><BatteryGauge value={variables.BATTERY} animated={true} size={100} /></div>

        </div>

        <div class="moni">Controlling</div>
        <div className="row2">
          {/* <Container> */}
           <IncrementDecrementButton count={32} label={"Capacity in (ML)"} />
            <IncrementDecrementButton count={55} label={"Drips per minute"} />
            <IncrementDecrementButton count={72} label={"Capacity to Infuse"} />
          {/* </Container> */}
        </div>
      </div>

    </>

  );
};

export default Variable;
