// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim()) onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
//       <input
//         type="text"
//         placeholder="Search movies..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         style={{ flex: 1, padding: "10px", borderRadius: "5px" }}
//       />
//       <button
//         type="submit"
//         style={{ padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;
