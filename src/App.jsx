import { useState } from "react";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import ReadContents from "./components/ReadContents";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarked = (blog) => {
    if (bookmarked.indexOf(blog) === -1) {
      const newBookmarked = [...bookmarked, blog];
      setBookmarked(newBookmarked);
    }
  };

  const handleMarkRead = (blog) => {
    const index = bookmarked.indexOf(blog);

    if (index !== -1) {
      bookmarked.splice(index, 1);
      const newBookmarked = [...bookmarked];
      setBookmarked(newBookmarked);
      setReadingTime(readingTime + blog.reading_time);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <Navbar></Navbar>
      <div className="flex flex-col lg:flex-row gap-6 mb-3 lg:mb-6 max-w-96 sm:max-w-none mx-auto">
        <Blogs
          handleBookmarked={handleBookmarked}
          handleMarkRead={handleMarkRead}
        ></Blogs>
        <ReadContents
          bookmarked={bookmarked}
          readingTime={readingTime}
        ></ReadContents>
      </div>
    </div>
  );
}

export default App;
