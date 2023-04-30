import { useState } from "react";

// Interface for provide enter data of event 
interface propsSearch {
    enter: (e: any) => void
}


function search(props: propsSearch) {

  const {enter} = props;

  return (
    <div className="searchContainer">
      <div className="searchPanel">
        <input
          className="search"
          name="city search"
          type="search"
          placeholder="Search"
          onKeyDown={enter}
        ></input>
      </div>
    </div>
  )
}

export default search