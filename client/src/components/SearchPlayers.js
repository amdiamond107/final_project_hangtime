function SearchPlayers({setSearchPlayerText, searchPlayerText}) {
    return (
<div className="searchbar">
<label htmlFor="/search_game">
<h2>Search Players</h2>
</label>
<input
    type="text"
    id="search"
    placeholder="Squad Up! Search for players in your area to invite to your upcoming game..."
    onChange={(event) => {
      setSearchPlayerText(event.target.value)
    }}
    value={searchPlayerText}
/>
</div>
);
}

export default SearchPlayers;