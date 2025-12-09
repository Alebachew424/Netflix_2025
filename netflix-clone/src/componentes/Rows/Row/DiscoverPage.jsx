

import React, { useState } from "react";
import axios from "axios";

const DiscoverPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault(); // prevent page refresh

    if (!query.trim()) return;

    try {
      const apiKey = "68b484776f606d47ad386f8948c3733f";

      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: apiKey,
            query: query
          }
        }
      );

      console.log("TMDB Result:", response.data.results);
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Movies</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            marginLeft: "10px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </form>

      <h2>Search Results</h2>

      {/* Movie Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px"
        }}
      >
        {results.length > 0 ? (
          results.map((movie) => (
            <div
              key={movie.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />

              <h3>{movie.title}</h3>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {movie.overview?.substring(0, 100)}...
              </p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;
