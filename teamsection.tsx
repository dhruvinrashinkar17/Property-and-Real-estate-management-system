'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image'; // ✅ correct import
import { teamMembers } from '@/constants/Team';

const TeamSection = () => {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-4xl font-bold text-amber-800 text-center mb-10">
        <span className="border-x-4 rounded-3xl px-4">Meet Our Team</span>
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-amber-50 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow-md"
                />
                <h3 className="text-xl font-semibold text-amber-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
