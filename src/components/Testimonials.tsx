import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aurals has completely transformed how I connect with my fans. The direct engagement and rewards system is revolutionary.",
      author: "Sarah Chen",
      role: "Electronic Artist",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop"
    },
    {
      quote: "As a fan, I love being able to truly own pieces of my favorite artists' work. The rewards make supporting artists even more exciting.",
      author: "Marcus Thompson",
      role: "Music Collector",
      image: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=400&h=400&fit=crop"
    },
    {
      quote: "The platform's innovative approach to music ownership has opened up new revenue streams I never thought possible.",
      author: "Jessica Rivera",
      role: "Independent Musician",
      image: "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?w=400&h=400&fit=crop"
    },
    {
      quote: "Finally, a platform that truly understands the future of music. The NFT integration is seamless and meaningful.",
      author: "David Kim",
      role: "Music Producer",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop"
    },
    {
      quote: "The community aspect of Aurals sets it apart. It's not just about music, it's about building lasting connections.",
      author: "Emma Wilson",
      role: "Music Blogger",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#3F043F] to-[#EF2020] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          What Our Community Says
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="testimonials-slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full">
                  <div className="flex items-start gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[#EDEDED] mb-4">{testimonial.quote}</p>
                      <p className="text-[#03E5DF] font-bold">{testimonial.author}</p>
                      <p className="text-[#EDEDED]/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}