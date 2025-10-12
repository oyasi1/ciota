 import { useState } from 'react';


const Merged5 = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  // PDF file in public folder
  const pdfUrl = '/ilovepdf_merged 4.pdf';
  const fileName = 'Service Quality, Willingness-to-Repurchase, and the Mediating Functions of Satisfaction and Value-for-Money: Study of Domestic Airlines in Nigeria.pdf';

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Optimized download approach
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        setIsDownloading(false);
      })
      .catch(() => {
        // Fallback to original method if fetch fails
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownloading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-2xl overflow-hidden">
        <div className="p-6 sm:p-8">
          
          {/* Content */}
          <div className="mt-4 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Service Quality, Willingness-to-Repurchase, and the Mediating Functions of Satisfaction and Value-for-Money: Study of Domestic Airlines in Nigeria.
            </h2>
            <h4>Vol. 1, No. 1, June 2024</h4>

            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Authors: A. O. Adeniran, M. S. Stephens, and I. Njoku.
            </p>
            <br />
            <h4> Introduction: Nigeria’s airline market is a market with a population of 200 million, shared by 23 domestic
airlines (NCAA, 2022) such as Aero Contractors, Air Peace, Allied Air, Arik Air, Azman Air,
Dana Air, First Nation, Green Africa, Ibom Air, Kabo Air, Max Air, Overland Airways,
United Air among others.....
</h4>
          </div>
          
          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`w-full flex justify-center items-center px-4 py-3 rounded-md text-white font-medium transition-colors ${
                isDownloading 
                  ? 'bg-blue-500 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              }`}
              aria-label={isDownloading ? 'Downloading PDF' : 'Download PDF'}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </>
              )}
            </button>
            
            <button 
              onClick={() => setShowPreview(!showPreview)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              aria-label={showPreview ? 'Hide PDF preview' : 'Show PDF preview'}
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>

            {showPreview && (
              <div className="mt-4 border rounded-md overflow-hidden">
                <iframe 
                  src={`${pdfUrl}#view=fitH`}
                  className="w-full h-96"
                  title="PDF Preview"
                  loading="lazy"
                />
              </div>
            )}
          </div>
          
          {/* File info */}
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>File size: 382 KB • PDF format</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merged5;