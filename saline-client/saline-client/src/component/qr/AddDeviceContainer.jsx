import React from 'react';

const AddDeviceContainer = ({ showDeviceDetails, handleAddDeviceClick, handleAddDevice, deviceID, setDeviceID, result }) => {
  return (
    <section className="App-section">
      <div className="App-section-title">Add Device</div>
      <div className="add-device-container">
        {showDeviceDetails ? (
          <form onSubmit={handleAddDevice}>
            
            <label>
              Device ID:
              <input
                type="text"
                value={deviceID}
                onChange={(e) => setDeviceID(e.target.value)}
              />
            </label>
            <button type="submit" className="add-device-button">
              Add Device
            </button>
          </form>
        ) : (
          <button onClick={handleAddDeviceClick} className="add-device-button">
            Add Device
          </button>
        )}
        {result && <p>{result}</p>}
      </div>
    </section>
  );
};

export default AddDeviceContainer;