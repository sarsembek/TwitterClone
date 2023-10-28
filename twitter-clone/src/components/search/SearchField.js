import React from 'react';
import { AutoComplete   } from "antd";
import './SearchField.css';

const torrents = [
  {
    id: 1,
    name: "Torrent 1",
    magnetLink: "magnet:?xt=urn:btih:1234567890ABCDEF1234567890ABCDEF1234567890ABCDEF",
    label: "Torrent 1",
  },
  {
    id: 2,
    name: "Torrent 2",
    magnetLink: "magnet:?xt=urn:btih:234567890ABCDEF1234567890ABCDEF1234567890ABCDEF",
    label: "Torrent 2",
  },
  {
    id: 3,
    name: "Torrent 3",
    magnetLink: "magnet:?xt=urn:btih:3333333333333333333333333333333333333333",
    label: "Torrent 3",
  },
  {
    id: 4,
    name: "Torrent 4",
    magnetLink: "magnet:?xt=urn:btih:4444444444444444444444444444444444444444",
    label: "Torrent 4",
  },
  {
    id: 5,
    name: "Torrent 5",
    magnetLink: "magnet:?xt=urn:btih:5555555555555555555555555555555555555555",
    label: "Torrent 5",
  },
  {
    id: 6,
    name: "Torrent 6",
    magnetLink: "magnet:?xt=urn:btih:6666666666666666666666666666666666666666",
    label: "Torrent 6",
  },
  {
    id: 7,
    name: "Torrent 7",
    magnetLink: "magnet:?xt=urn:btih:7777777777777777777777777777777777777777",
    label: "Torrent 7",
  },
  {
    id: 8,
    name: "Torrent 8",
    magnetLink: "magnet:?xt=urn:btih:8888888888888888888888888888888888888888",
    label: "Torrent 8",
  },
  {
    id: 9,
    name: "Torrent 9",
    magnetLink: "magnet:?xt=urn:btih:9999999999999999999999999999999999999999",
    label: "Torrent 9",
  },
  {
    id: 10,
    name: "Torrent 10",
    magnetLink: "magnet:?xt=urn:btih:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    label: "Torrent 10",
  },
];



export const SearchField = () => {
  const [searchResults, setSearchResults] = React.useState(torrents);

  const fetchSearchResults = async (query) => {
    const results = torrents.filter((torrent) => torrent.name.toLowerCase().includes(query));
    setSearchResults(results);
  };

  return (
    <AutoComplete
      options={searchResults}
      onSearch={fetchSearchResults}
      placeholder="Search..."
      allowClear="true"
      style={{ 
        overflow: "auto", 
        height: "2.5rem",
        width: "22.5rem",
      }}
    />
  );
};
export default SearchField;