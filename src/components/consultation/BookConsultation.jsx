import Footer from '../home/Footer';
import BookConsultationSection from './BookConsultationSection';
import './BookConsultationPage.css';

const BookConsultation = () => {
  return (
    <div className="book-consultation-page">
      <div className="decorative-ellipse-1" aria-hidden="true" />
      <div className="top-gradient-wrapper">
        <BookConsultationSection />
      </div>
      <Footer />
    </div>
  );
};

export default BookConsultation;
