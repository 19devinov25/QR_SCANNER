import React from 'react';

function filterResults(results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }

    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

const ResultContainerTable = ({ data, clientID }) => {
  const results = filterResults(data);

  return (
    <table className={'Qrcode-result-table'}>
      <thead>
        <tr>
          <td>Sno.</td>
          <td>Device Id</td>
          <td>Client ID</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result, i) => {
          console.log(result);
          return (
            <tr key={i}>
              <td>{i}</td>
              <td>{result.decodedText}</td>
              <td>{clientID}</td> // Display the clientID value
            </tr>
          );
        })}
         
      </tbody>
    </table>
  );
};

const ResultContainerPlugin = ({ results, clientID }) => {
  const filteredResults = filterResults(results);
  return (
    <div className='Result-container'>
      <div className='Result-header'>Scanned results ({filteredResults.length})</div>
      <div className='Result-section'>
        <ResultContainerTable data={filteredResults} clientID={clientID} />
      </div>
    </div>
  );
};

export default ResultContainerPlugin;