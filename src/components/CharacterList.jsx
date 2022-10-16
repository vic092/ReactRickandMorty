import { useState, useEffect } from "react";
import Character from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page {page}</p>
      <button
        className="btn btn-success btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </header>
  );
}

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${Page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    }
    fetchData();
  }, [Page]);

  return (
    <div className="container ">
      <NavPage page={Page} setPage={setPage}></NavPage>

      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((c) => {
            return (
              <div className="col-md-4" key={c.id}>
                <Character c={c}></Character>
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={Page} setPage={setPage}></NavPage>
    </div>
  );
}
