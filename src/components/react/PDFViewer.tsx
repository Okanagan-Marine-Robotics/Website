import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "../../reactpdf.worker";

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | undefined>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages!) {
      setPageNumber(pageNumber + 1);
    }
  };

  // Function to update scale based on window width
  const updateScale = () => {
    const newScale = Math.min(window.innerWidth / 1000, 1); // Adjust the denominator and max scale (1.5) as needed
    setScale(newScale);
  };

  // useEffect to add event listener on window resize
  useEffect(() => {
    updateScale(); // Set initial scale
    window.addEventListener("resize", updateScale);

    return () => {
      window.removeEventListener("resize", updateScale); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-center max-w-fit rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] ">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              className="rounded-lg"
              scale={scale}
            />
          </Document>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber === 1}
          className={pageNumber === 1 ? "invisible" : ""}
        >
          <FaChevronLeft size={20} />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: numPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index + 1 === pageNumber ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <button
          onClick={goToNextPage}
          disabled={pageNumber === numPages}
          className={pageNumber === numPages ? "invisible" : ""}
        >
          {/* Right arrow icon */}
          <FaChevronRight size={20} />
        </button>
      </div>
    </>
  );
};

export default PDFViewer;
