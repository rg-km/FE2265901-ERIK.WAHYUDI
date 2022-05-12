import React, { useState } from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  // TODO: answer here
  React.useEffect(() => {
    // TODO: answer here
    getQuote()
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        console.log("Quote Data", data)
        setQuote(data)
      })
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a href="/">Random Quote</a>
      </nav>
      <body className="container p-3">
        <div className="d-flex flex-column justify-content-center align-items-center bg-warning">
          {loading && <div>Loading...</div>}
          <figure>
            <blockquote>
              <p data-testid="quote">{quote.content}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              {quote.author}
            </figcaption>
          </figure>
          <button className="btn btn-primary" onClick={() => getQuote()}>
            Get another quote
          </button>
        </div>
      </body>
    </>
  );
}