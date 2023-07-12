import { useState } from "react";
import "./../../src/main.css";
export default function ImageWithDetail({
  url,
  detail,
  nameTitle,
  author,
  index,
  length,
  showMore,
}) {
  return (
    <>
      <div className="book-container">
        <h2 className="book-title">
          <i>{nameTitle}</i> by {author}
        </h2>
        <h3 className="book-index">
          ({index + 1} of {length})
        </h3>
        {showMore && <p className="book-detail">{detail}</p>}
        <img className="book-image" src={url} alt={"empty"} />
      </div>
    </>
  );
}
