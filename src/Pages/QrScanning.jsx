import React, { useState, useEffect } from 'react';
import QrScanner from 'react-qr-scanner';

const QRScannerComponent = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    setResult(data);
  };

  useEffect(() => {
    if (result && typeof result === 'object') {
      console.log('Scanned result:', result);
    }
  }, [result]);

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrScanner
        onScan={handleScan}
        onError={handleError}
        style={{ width: '100%' }}
        facingMode= 'rear'
        />
      {result && <p>Scanned result: {result.text}</p>}
    </div>
  );
};

export default QRScannerComponent;
