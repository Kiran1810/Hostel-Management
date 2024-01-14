import React, { useState, useCallback } from 'react';
import QrScanner from 'react-qr-scanner';

const QRScannerComponent = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrScanner
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
        facingMode="environment" // Specify "environment" for the back camera
      />
      {result && <p>Scanned result: {result}</p>}
    </div>
  );
};

export default QRScannerComponent;
