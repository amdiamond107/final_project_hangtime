function SearchCourt({setSearchCourtText, searchCourtText}) {
    return (
<div className="searchbar">
<label htmlFor="/search_court">
<h3>Search Courts</h3>
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