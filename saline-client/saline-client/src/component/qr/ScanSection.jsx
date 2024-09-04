import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin';
import ResultContainerPlugin from './ResultContainerPlugin';

const ScanSection = ({ showScanDetails, handleScanClick, decodedResults, onNewScanResult}) => {
  return (
    <section className="App-section">
      <div className="App-section-title">Scan here</div>
      <div className="scan-container">
        {showScanDetails ? (
          <>
            <Html5QrcodePlugin
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={onNewScanResult}
            />
            <ResultContainerPlugin results={decodedResults} />
             
          </>
        ) : (
          <button onClick={handleScanClick} className="scan-button">
            Scan
          </button>
        )}
      </div>
    </section>
  );
};

export default ScanSection;