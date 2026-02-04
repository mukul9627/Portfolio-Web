import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import CupOftea from '@/myImage/letstalk.png';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });


   const baseAPI = process.env.REACT_APP_API_URL;

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(
      `${baseAPI}/Home/GeneralEnquiry`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
    );

    const result = await res.json();

    console.log('API response:', result);

    if (res.ok && result.status === "True") {
      alert(`✅ ${result.message}`);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert(`❌ ${result.message || 'API Error'}`);
    }

  } catch (error) {
    console.error('Server error:', error);
    alert('❌ Server error');
  } finally {
    setLoading(false);
  }
};



  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section */}
        <div>
          <p className="text-[20px] font-semibold text-gray-600 mb-4">
            over a biryani or.. a call,
            <br /> email, or even a pigeon post.
          </p>

          <button
            type="button"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full shadow hover:bg-red-600 transition-all text-lg"
          >
            <span className="mr-2">➞</span> Start
          </button>

          <div className="mt-8">
            <Image
              src={CupOftea}
              alt="Tea Cups"
              width={128}
              className="w-32"
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-sm text-gray-700 mb-6">
            <strong>Email:</strong> mukulsharmawd@gmail.com
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-full shadow hover:bg-red-600 transition-all text-lg disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Email'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
