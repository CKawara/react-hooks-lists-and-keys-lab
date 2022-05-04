import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const oneLink = links.map(link =>{
    return <a key={link} href={link}>{link}</a>
  })
  return (
    <nav>
      {oneLink}
    </nav>
  )
}

export default NavBar;
