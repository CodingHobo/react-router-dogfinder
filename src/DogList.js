import React from "react";
import {Link} from "react-router-dom"


function DogList({dogs}){

  if (!dogs){
    return (
     <div>no dogs</div>
    )
  }

return (
  <div className="row">
  {dogs.map(d => (
    <div  key={d.name}>
      <img src={`/${d.src}.jpg`} alt={d.name} />
      <h3>
        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
      </h3>
    </div>
  ))}
</div>
);

}

export default DogList