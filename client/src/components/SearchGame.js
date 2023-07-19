function SearchGame({setSearchGameText, searchGameText}) {
    return (
<div className="searchbar">
<label htmlFor="/search_game">
<h2>Search Games</h2>
</label>
<input
    type="text"
    id="search"
    placeholder="You've got next! Search for upcoming games in your area and click JOIN GAME to claim your spot..."
    onChange={(event) => {
      setSearchGameText(event.target.value)
    }}
    value={searchGameText}
/>
</div>
);
}

export default SearchGame;