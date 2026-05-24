const categoryKeywords = {
  "Film & Animation": "film animation movies cinema",

  "Autos & Vehicles": "cars bikes automobile",

  Music: "music singer songs",

  "Pets & Animals": "pets dogs cats animals",

  Sports: "sports football cricket basketball",

  "Travel & Events": "travel vlog tourism",

  Gaming: "gaming gamer pc gaming",

  "People & Blogs": "people blogs lifestyle vlog",

  Comedy: "comedy funny memes",

  Entertainment: "entertainment celebrity viral",

  "News & Politics": "news politics current affairs",

  "Howto & Style": "tutorial style fashion beauty",

  Education: "education tutorial learning",

  "Science & Technology": "technology ai gadgets coding",

  "Nonprofits & Activism": "nonprofit activism charity",
};

function SearchForm({
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
      {/* CATEGORY DROPDOWN */}

      <select
        onChange={(e) => setKeyword(categoryKeywords[e.target.value])}
        style={{
          padding: "10px",
          width: "250px",
        }}
      >
        <option value="">Select Category</option>

        {Object.keys(categoryKeywords).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* MIN SUBSCRIBERS */}

      <input
        type="number"
        placeholder="Min Subscribers"
        value={minSubscribers}
        onChange={(e) => setMinSubscribers(e.target.value)}
        style={{
          padding: "10px",
        }}
      />

      {/* MAX SUBSCRIBERS */}

      <input
        type="number"
        placeholder="Max Subscribers"
        value={maxSubscribers}
        onChange={(e) => setMaxSubscribers(e.target.value)}
        style={{
          padding: "10px",
        }}
      />

      {/* SEARCH BUTTON */}

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
