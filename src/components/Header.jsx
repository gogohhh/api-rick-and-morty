import React from "react";

export default function Header({brand}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand text-uppercase" >{brand}</a>
        </div>
    </nav>
  );
}