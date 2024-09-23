//? ******************************************************************?//
//? Website Configuration                                             ?//
//? ******************************************************************?//

import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

//? ******************************************************************?//
//? HTML & Tailwind                                                   ?//
//? ******************************************************************?//

export default function App() {
  return (

    <Link to={"/Contact"}>
      'click this to go to the Contact Page!
    </Link>

  );
}
