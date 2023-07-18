function SearchCourt({setSearchCourtText, searchCourtText}) {
    return (
<div className="searchbar">
<label htmlFor="/search_court">
<h2>Search Courts</h2>
</label>
<input
    type="text"
    id="search"
    placeholder="Search for a court to find games to join or to schedule new games at..."
    onChange={(event) => {
      setSearchCourtText(event.target.value)
    }}
    value={searchCourtText}
/>
</div>
);
}

export default SearchCourt;