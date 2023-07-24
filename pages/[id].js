import Link from "next/link";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { timetable } from "../data/index";

// import styles from "../styles/result.module.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js";

import ErrorPage from "next/error";

const PDFViewer = ({ pdfLink, setIsLoaded }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoaded(true);
  };

  return (
    <div>
      <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess} noData>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default function Result({ item }) {
  const [pdfLink, setPdfLink] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!item) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    document.title = item.code + " | " + item.name;
    const pdf = `/api/${item.link.split("cat/")[1].split("/")[0]}-${item.code}`;
    setPdfLink(pdf);
  }, [item]);

  return (
    <div>
      <div>
        <h1>
          {item.code} | {item.name}
        </h1>
        <h3>
          {item.department} | {item.type} | {item.credits}
        </h3>
        <h4>Time Table</h4>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {item.timetable.map((thing, idx) => (
              <tr key={idx}>
                <td>{thing[0] ?? " "}</td>
                <td>{thing[1] ?? " "}</td>
                <td>{thing[2] ?? " "}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <Link href="/">
            <button>Home</button>
          </Link>
          {isLoaded && (
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.rel = "noopener noreferrer";
                link.href = pdfLink;
                link.download = item.code + ".pdf";
                link.click();
              }}
            >
              Download
            </button>
          )}
        </div>
        {pdfLink && (
          <div>
            <PDFViewer pdfLink={pdfLink} setIsLoaded={setIsLoaded} />
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const items = timetable.filter((thing) => thing.code === id);
  const item = items.length === 0 ? null : items[0];

  return {
    props: {
      item,
    },
  };
}
