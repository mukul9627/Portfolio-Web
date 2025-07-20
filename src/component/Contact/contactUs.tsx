import React from "react";
import Image from "next/image";
import CupOftea from "@/myImage/letstalk.png"

const ContactUs = () => {
  return (
  <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Section */}
    <div className="text-left">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Let&apos;s chat
      </h2>
     <p className="text-[20px] font-semibold text-gray-600 mb-4">
  over a biryani or.. a call,
  <br />email, or even a pigeon post.
</p>
      <button className="inline-flex items-center px-6 py-3 bg-white-500 text-black rounded-full shadow hover:bg-red-600 transition-all text-lg">
        <span className="mr-2">➞</span> Start
      </button>
      <div className="mt-8">
        <Image src={CupOftea} alt="Tea Cups" width={128} className="w-32" />
      </div>
    </div>

    {/* Right Section */}
    <div>
      <div className="mb-6">
        <p className="text-sm text-gray-700">
          <strong>Email:</strong> mukulsharmawd@gmail.com
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
          required
        />
        <textarea
          rows={4}
          placeholder="Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white-500 text-black py-3 rounded-full hover:bg-white-600 shadow transition-all text-lg"
        >
          Send Email
        </button>
      </form>
    </div>
  </div>
</section>


  );
};

export default ContactUs;
