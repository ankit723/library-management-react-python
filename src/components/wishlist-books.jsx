import React, { useState } from 'react'
import { ViewIcon } from '../assets/view-icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishBooks = ({title, author, publishedDate, bookId, bookUrl, setIsBookView, setBookUrl, handleSelectBook, selectedBooks, book}) => {
  const addToWishlist = (bookId, title, author, publishedDate, bookUrl) => {
    const wishlistStorage = localStorage.getItem('wishlist');
    const wishlist = wishlistStorage ? JSON.parse(wishlistStorage) : [];
  
    const isAlreadyInWishlist = wishlist.some((item) => item.bookId === bookId);
  
    if (!isAlreadyInWishlist) {
      wishlist.push({ bookId, title, author, publishedDate, bookUrl });
      console.log(wishlist)
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      toast.success('Added to wishlist!');
    } else {
      toast.error('Already in wishlist');
    }
  };

  return (
    <>
    <div className="relative bg-white border-2 border-slate-800 flex  justify-center items-center h-48 w-40 shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] rounded-xl transition-all duration-500 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] transform cursor-pointer  -translate-y-3 hover:scale-105">
      <div className="relative bg-white border-2 border-slate-800 flex flex-col justify-center items-center h-48 w-40 shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] rounded-xl transition-all duration-500 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] transform cursor-pointer translate-y-1 -translate-x-1">
        <div className="relative bg-white border-2 border-slate-800 flex flex-col justify-center items-center h-48 w-40 shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] rounded-xl transition-all duration-500 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] transform cursor-pointer translate-y-1 -translate-x-1">
          <div className={`relative flex flex-col justify-center items-center h-48 w-40 shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] rounded-xl transition-all duration-500 hover:shadow-[0_10px_20px_rgba(0,0,0,0.25),0_6px_6px_rgba(0,0,0,0.22)] transform cursor-pointer translate-y-[0.15rem] -translate-x-1 ${selectedBooks.includes(book) ? 'bg-amber-800 text-white' : 'bg-red-300'}`} onClick={() => handleSelectBook(book)}>
            <div className="absolute flex gap-1 top-3 right-3">
              <div className="" onClick={()=>{
                setIsBookView(true)
                setBookUrl(bookUrl)
              }}><ViewIcon /></div>
            </div>
              <p className='text-xs'>
                  {author}
              </p>
              <p className='text-2xl font-light'>
                  {title}
              </p>
              <p className='text-xs font-thin'>
                  {publishedDate}
              </p>
          </div>
        </div>
      </div>
    </div>
    
    <ToastContainer />
    </>
  )
}

export default WishBooks