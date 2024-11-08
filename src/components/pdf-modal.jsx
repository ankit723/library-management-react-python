import React, {useEffect} from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFModal = ({ pdfUrl, onClose }) => {
  // Plugin to add layout features like toolbar, sidebar, and pagination
  const defaultLayout = defaultLayoutPlugin();

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose(); // Close modal
    }
  };

  // Adds event listener for Escape key press when modal is mounted
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
        onClick={(e) => {
            if (e.target === e.currentTarget) onClose(); // Close on overlay click
        }}
    >
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] overflow-hidden">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={pdfUrl}
            plugins={[defaultLayout]}
            theme={{
              theme: 'light', // Optional: Set PDF viewer theme to light
            }}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PDFModal;
