import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import CupOftea from '@/myImage/letstalk.png';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Typed change event for form inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Typed submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        alert('✅ Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('❌ Error: ' + result.message);
      }
    } catch (err) {
      alert('❌ Server error');
      console.error(err);
    }
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <p className="text-[20px] font-semibold text-gray-600 mb-4">
            over a biryani or.. a call,
            <br /> email, or even a pigeon post.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-white-500 text-black rounded-full shadow hover:bg-red-600 transition-all text-lg">
            <span className="mr-2">➞</span> Start
          </button>
          <div className="mt-8">
            <Image src={CupOftea} alt="Tea Cups" width={128} className="w-32" />
          </div>
        </div>

        <div>
          <div className="mb-6">
            <p className="text-sm text-gray-700">
              <strong>Email:</strong> mukulsharmawd@gmail.com
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
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
