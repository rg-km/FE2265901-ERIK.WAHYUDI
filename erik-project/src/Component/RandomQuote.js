import React, { useState, useEffect } from "react";
export default function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content))
      .finally(() => setLoading(false));
  }, []);
  return <p>{loading ? "loading..." : quote}</p>;
}
