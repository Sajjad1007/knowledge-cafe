import React from "react";

const ReadContents = ({ bookmarked, readingTime }) => {
  return (
    <div className="mt-2 flex-1">
      <h3 className="text-lg font-semibold text-center">
        Reading Time : {readingTime} minutes
      </h3>
      <h3 className="text-lg font-semibold text-center">
        Bookmarked : {bookmarked.length}
      </h3>
      <div className="grid grid-cols-1 gap-3 my-3">
        {bookmarked.map((bookmark) => (
          <h3
            key={bookmark.id}
            className="bg-neutral-100 py-3 px-4 rounded-lg text-center lg:text-left"
          >
            {bookmark.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default ReadContents;
