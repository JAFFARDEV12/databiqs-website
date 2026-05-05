import Header from '../home/Header';
import Footer from '../home/Footer';
import BookConsultationSection from './BookConsultationSection';

const BookConsultation = () => {
  return (
    <div className="book-consultation-page">
      <div className="book-consultation-page__heroWrap">
        <Header />
        <BookConsultationSection />
      </div>
      <Footer />
    </div>
  );
};

export default BookConsultation;
