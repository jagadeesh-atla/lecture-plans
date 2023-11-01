import Link from "next/link";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { timetable } from "../data/index";
import ErrorPage from "next/error";

export default function Result({ item }) {
  const [isMobile, setIsMobile] = useState(false);

  if (!item) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    document.title = item.code + " | " + item.name;
    const mo = document.innerWidth <= 768;
    setIsMobile(mo);
  }, [item]);

  return (
    <div>
      <div>
        <h1>
          {item.code} | {item.name} |{" "}
          {item.semester == "MS" ? "Monsoon" : "Winter"} Semester
        </h1>
        <h3>
          {item.department} | {item.type} | {item.credits}
        </h3>
        <p>Instructor: {item.instructor}</p>
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
          {isMobile ? (
            <a href={item.link} download={item.code + ".pdf"}>
              <button>Download</button>
            </a>
          ) : (
            <>
              <a href={item.link} download={item.code + ".pdf"}>
                <button>Download</button>
              </a>
              <iframe
                src={item.link}
                width="100%"
                height="600"
                title="PDF Viewer"
              ></iframe>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const _id = id.toUpperCase();

  const items = timetable.filter((thing) => thing.code === _id);
  const item = items.length === 0 ? null : items[0];

  return {
    props: {
      item,
    },
  };
}
