import { useState } from "react";
import axios from "axios";

import SearchForm from "./components/SearchForm";
import ChannelTable from "./components/ChannelTable";
import Loader from "./components/Loader";

function App() {
  const [keyword, setKeyword] = useState("");

  const [minSubscribers, setMinSubscribers] = useState("");

  const [maxSubscribers, setMaxSubscribers] = useState("");

  const [channels, setChannels] = useState([]);

  const [nextPageToken, setNextPageToken] = useState(null);

  const [loading, setLoading] = useState(false);

  // YOUR BACKEND URL

  const BASE_URL = import.meta.env.VITE_API_URL;

  // ==========================================
  // SEARCH
  // ==========================================

  const searchChannels = async () => {
    try {
      setLoading(true);

      setChannels([]);

      let url = `${BASE_URL}/search?keyword=${keyword}`;

      if (minSubscribers) {
        url += `&minSubscribers=${minSubscribers}`;
      }

      if (maxSubscribers) {
        url += `&maxSubscribers=${maxSubscribers}`;
      }

      const response = await axios.get(url);

      setChannels(response.data.channels);

      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD MORE
  // ==========================================

  const loadMore = async () => {
    try {
      if (!nextPageToken) {
        return;
      }

      setLoading(true);

      let url = `${BASE_URL}/search?keyword=${keyword}&pageToken=${nextPageToken}`;

      if (minSubscribers) {
        url += `&minSubscribers=${minSubscribers}`;
      }

      if (maxSubscribers) {
        url += `&maxSubscribers=${maxSubscribers}`;
      }

      const response = await axios.get(url);

      setChannels((prev) => [...prev, ...response.data.channels]);

      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>YouTube Lead Finder</h1>

      <SearchForm
        setKeyword={setKeyword}
        minSubscribers={minSubscribers}
        setMinSubscribers={setMinSubscribers}
        maxSubscribers={maxSubscribers}
        setMaxSubscribers={setMaxSubscribers}
        searchChannels={searchChannels}
      />

      {loading && <Loader />}

      <ChannelTable channels={channels} />

      {nextPageToken && !loading && (
        <button
          onClick={loadMore}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
