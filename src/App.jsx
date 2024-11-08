import { useState } from 'react'
import './App.css'
import Books from './components/books'
import Navbar from './components/navbar'
import Modal from 'react-modal'
import AuthModal from './components/auth-modal'
import PDFModal from './components/pdf-modal'
import Wishlist from './components/wishlist'
import MyBooks from './components/my-books'

// Set the modal’s style
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Inform Modal where the root element is
Modal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalType, setModalType] = useState('signin');
  const [selectedTab, setSelectedTab] = useState('All Books')
  const [isBookView, setIsBookView]=useState(false)
  const [bookUrl, setBookUrl] = useState("")

  return (
    <div className='bg-blue-200'>
      <Navbar setIsModalOpen={setIsModalOpen} setModalType={setModalType} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

      {/* Modal Component */}
      {
        isModalOpen &&(
          <AuthModal 
          type={modalType}
          onClose={() => setIsModalOpen(false)}
          />
        )
      }

      {isBookView?<PDFModal pdfUrl={bookUrl} onClose={()=>setIsBookView(false)}/>:""}

      {selectedTab==='All Books'?
        (
          <div className=" bg-amber-800 grid grid-cols-7 gap-7 p-20 w-full min-h-screen rounded-t-full justify-center items-center">
        {/* List of books */}
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
        <Books author={'Ankit Biswas'} title={"Book Title 1"} publishedDate={'21 Oct 2024'} bookId={"B001"} bookUrl={'https://pdfobject.com/pdf/sample.pdf'} isBookView={isBookView} setIsBookView={setIsBookView} setBookUrl={setBookUrl}/>
          </div>
        ):
        selectedTab==='Wishlist'?
        (
          <Wishlist />
        ):
        selectedTab==='Manage Books'?
        (
          ""
        ):
        selectedTab==='Manage Students'?
        (
          ""
        ):selectedTab==="My Books"?
        (
          <MyBooks/>
        ):""
      }
      
    </div>
  )
}

export default App;
