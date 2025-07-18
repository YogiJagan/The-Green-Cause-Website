import Navbar from "../../components/navbar";
import Head from "next/head";
import { Mail, Instagram } from "lucide-react";

// Import Swiper and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function NigeriaChapter() {
  return (
    <>
      <Head>
        <title>Nigeria Chapter | The Green Cause</title>
      </Head>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          
          {/* Left: Chapter Lead & Contact */}
          <div className="bg-green-100 p-8">
            <h2 className="text-2xl font-bold mb-4">Chapter Lead</h2>
            <p className="mb-4"><strong>Name:</strong> Roy Odusote</p>

            <h3 className="text-xl font-semibold mb-2">Connect with Us</h3>
            <div className="flex space-x-6 mt-4 mb-8">
              <a href="mailto:nigeria@thegreencause.org" target="_blank" rel="noopener noreferrer">
                <Mail size={28} className="text-green-800 hover:text-green-900" />
              </a>
              <a href="https://instagram.com/thegreencause_ng" target="_blank" rel="noopener noreferrer">
                <Instagram size={28} className="text-pink-600 hover:text-pink-800" />
              </a>
            </div>

            {/* Carousel Section */}
            <div className="mt-6">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-xl"
              >
                {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"].map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`/nigeriaslideshow/${img}`}
                      alt={`Chapter Event ${index + 1}`}
                      className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>

          {/* Right: About & Achievements */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">About the Chapter</h2>
            <p className="mb-6">
              The Nigeria Chapter is our first international branch, located in Oyo. We&apos;re empowering local youth to lead sustainability efforts through education, events, and grassroots movements.
            </p>

            <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">March 11, 2025 – Tree Planting Campaign</p>
                <p>One of the chapter leaders, Roy Odusote, at the University of Ibadan hosted a workshop with about 175 students in attendance at the community high school in Ajaba, Oyo State. The content of the workshop was focused on eco-restoration and branched into discussing the ecological state in Nigeria and its multidimensional impact on their community (i.e climate and weather patterns, soil quality and degradation, biodiversity and pest management, water availability and quality, and human health). This was the first of many workshops that this chapter plans to host over the next couple of months. The funding from Arch Foundation will help improve the quality and impact of these workshops.</p>
              </li>
              <li>
                <p className="font-semibold">February 15, 2025 – Sustainability Workshop</p>
                <p>We hosted our first workshop in the botanical garden at the University of Ibadan. The funding for this project included reserving the space to host over 300 community members and deliver an impactful presentation about eco-restoration.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
