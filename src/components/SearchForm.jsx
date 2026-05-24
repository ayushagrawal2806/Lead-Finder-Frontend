function SearchForm({
  keyword,

  setKeyword,

  minSubscribers,

  setMinSubscribers,

  maxSubscribers,

  setMaxSubscribers,

  searchChannels,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <input
        type="number"
        placeholder="Min Subscribers"
        value={minSubscribers}
        onChange={(e) => setMinSubscribers(e.target.value)}
        style={{
          padding: "10px",
        }}
      />

      <input
        type="number"
        placeholder="Max Subscribers"
        value={maxSubscribers}
        onChange={(e) => setMaxSubscribers(e.target.value)}
        style={{
          padding: "10px",
        }}
      />

      <button
        onClick={searchChannels}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchForm;
