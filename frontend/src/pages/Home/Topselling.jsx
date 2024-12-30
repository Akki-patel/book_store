import React, { useEffect, useState } from 'react';
import BookCrad from '../books/BookCrad';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const Topselling = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  // Fetch books data from "books.json" on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('books.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, []);

  // Efficiently filter books based on selected category
  const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());
  // Log filtered books only when selection changes
  console.log(filteredBooks)

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* CATEGORY FILTERING */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-grey-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
          <SwiperSlide key={index}>       
             <BookCrad  book={book}></BookCrad>
          </SwiperSlide>
        ))}

      </Swiper>


      {/* Display filtered books */}
      {/* Only render if books exist */}



    </div>
  );
};

export default Topselling;