import React from "react";
import Navbar from "../components/Navbar";

const reviews = [
  {
    name: "Alice Johnson",
    service: "Peer Learning",
    text: "The peer learning system kept me accountable and motivated every week.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Ravi Mehra",
    service: "Bounty Challenges",
    text: "I loved solving bounty problems. It was super fun and helped me grow fast.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Emily Tan",
    service: "Code Reviews",
    text: "Peer code reviews gave me new perspectives and taught me best practices.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Mohammed Ali",
    service: "Virtual Hostel",
    text: "The virtual hostel vibe was amazing—felt like I was never learning alone.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Sara Khan",
    service: "Alumni Network",
    text: "Talking to alumni gave me insight into what to expect after finishing.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "John Patel",
    service: "Doubt Sessions",
    text: "Doubt sessions helped clear concepts quickly without wasting time.",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

const Review = () => {
  return (
    <>
      <Navbar />
      <div className="absolute top-10 left-90 jaldi-bold max-sm:absolute max-sm:top-10 max-sm:left-18 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-21 place-items-center cursor-pointer">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#0F0655A6] text-white rounded-3xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 w-72 h-[22rem] flex flex-col items-center justify-start text-center"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-20 h-20 rounded-full border-2 border-[#FE9332] mb-4"
              />
              <h2 className="text-lg font-semibold text-[#FE9332]">
                {review.name}
              </h2>
              <p className="text-sm text-[#FFBD80] mb-2">{review.service}</p>
              <p className="text-sm text-gray-200">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
