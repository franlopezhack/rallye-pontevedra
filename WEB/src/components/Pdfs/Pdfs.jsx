import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1)
  }

  function changePage(offSet){
      setPageNumber(prevPageNumer => prevPageNumer + offSet) 
  }

  function changePageBack(){
      changePage(-1)
  }

  function changePageNext(){
    changePageBack(+1)
}

  return (
    <div>
      <Document file="../../assets/Pdfs/regulamento-1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page height='600' pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div>
      {pageNumber > 1 && 
      <button onClick={changePageBack}>Previuos Page</button>}
      {pageNumber < numPages && 
      <button className='btn btn-danger' onClick={changePageNext}>Next Page</button>}
      </div>
    </div>
  );
}

export default MyApp