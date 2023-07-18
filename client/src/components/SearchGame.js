function SearchGame({setSearchGameText, searchGameText}) {
    return (
<div className="searchbar">
<label htmlFor="/search_game">
<h2>Search Games</h2>
</label>
<input
    type="text"
    id="search"
    placeholder="Search for games to join..."
    onChange={(event) => {
      setSearchGameText(event.target.value)
    }}
    value={searchGameText}
/>
</div>
);
}

export default SearchGame;