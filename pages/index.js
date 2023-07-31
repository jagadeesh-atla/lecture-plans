import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { courses as items } from "../data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../styles/index.module.css";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handeleOnSearch = (string, result) => {
    console.log(string);
    setSearch(string);
  };
  
  const handleOnSelect = (item) => {
    const code = item.name.slice(0, 6).trim();
    setSearch(code);
    router.push(`/${code}`);
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
    );
  };

  useEffect(() => {
    document.title = "Lecture Plans | Course Code and Name";
  }, []);

  return (
    <div className={styles.grid}>
      <div>
        <h1 className={styles.h1}>Lecture Plans</h1>
      </div>
      <div style={{ width: "400px" }}>
        <div>
      <button  style={{marginLeft: "45%", marginBottom: "2%"}} onClick={()=>{
          const code = search.toUpperCase();
          router.push(`/${code}`);
        }}>Search</button>
        </div>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handeleOnSearch}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          placeholder="Course Code or Name"
        />
        
      </div>
    </div>
  );
}
