import { useState } from "react";
import { sculptureList } from "./data.js";
import ImageWithDetail from "./imageWithDetail.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < sculptureList.length - 1;
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(index);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <ImageWithDetail
        key={index}
        url={sculpture.url}
        nameTitle={sculpture.nameTitle}
        author={sculpture.artist}
        detail={sculpture.description}
        index={index}
        length={sculptureList.length}
        showMore={showMore}
      ></ImageWithDetail>
    </>
  );
}
