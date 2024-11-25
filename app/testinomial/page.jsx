"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/alltestimonials');
        setTestimonials(response.data.testimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Function to handle the left and right slide
  const handleNext = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonials bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-8">
          <h2 className="title text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        </div>
        <div className="testimonials-content relative">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button 
              onClick={handlePrev} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
            >
              &lt;
            </button>
          )}
          {/* Testimonials Slider */}
          <div className="testimonials-slider flex items-center justify-center space-x-4 py-4 overflow-hidden">
            {testimonials.length > 0 ? (
              testimonials
                .slice(currentIndex, currentIndex + 3)
                .map((testimonial) => (
                  <div key={testimonial._id} className="flex-none w-full max-w-xs">
                    <div className="testimonial-item bg-white rounded-lg shadow-lg p-6 text-center mx-auto">
                      <div className="info flex items-center mb-4 justify-center">
                        <img
                          src={testimonial.image || '/default-avatar.png'}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div className="text-box text-left">
                          <h3 className="name text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                          <span className="job text-sm text-gray-600">{testimonial.jobTitle}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{testimonial.message}</p>
                      <div className="rating text-yellow-500">
                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-center text-gray-600">No testimonials available.</p>
            )}
          </div>
          {/* Right Arrow */}
          {currentIndex < testimonials.length - 3 && (
            <button 
              onClick={handleNext} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
