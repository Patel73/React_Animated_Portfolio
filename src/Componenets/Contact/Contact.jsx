import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if ((name === 'firstName' || name === 'lastName')) {
      if (/[^a-zA-Z\s]/.test(value)) {
        newErrors[name] = 'Only letters are allowed';
      } else {
        delete newErrors[name];
      }
    }

    if (name === 'number') {
      if (/[^0-9]/.test(value)) {
        newErrors.number = 'Only numbers are allowed';
      } else if (value.length > 10) {
        newErrors.number = 'Only 10 digits allowed';
      } else {
        delete newErrors.number;
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors(newErrors);
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (!nameRegex.test(formData.firstName.trim())) {
      newErrors.firstName = 'Only letters allowed';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!nameRegex.test(formData.lastName.trim())) {
      newErrors.lastName = 'Only letters allowed';
    }

    if (!formData.number) {
      newErrors.number = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = 'Enter valid 10-digit number';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert('Message sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      number: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <motion.div
      id="Contact"
      className="p-6 md:p-24 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-10 pl-4">Contact Me</h1>

      <motion.div
        className="bg-black bg-opacity-30 shadow-xl rounded-lg p-6 md:p-10 mx-2 md:mx-20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm mb-1 block">
                First Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 placeholder-gray-400 focus:outline-none text-sm"
              />
              {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName}</p>}
            </div>

            <div className="w-full">
              <label className="text-sm mb-1 block">
                Last Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 placeholder-gray-400 focus:outline-none text-sm"
              />
              {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm mb-1 block">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
                maxLength="10"
                inputMode="numeric"
                className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 placeholder-gray-400 focus:outline-none text-sm"
              />
              {errors.number && <p className="text-red-400 text-sm">{errors.number}</p>}
            </div>

            <div className="w-full">
              <label className="text-sm mb-1 block">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 placeholder-gray-400 focus:outline-none text-sm"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter your subject"
              className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 placeholder-gray-400 focus:outline-none text-sm"
            />
            {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}
          </div>

          <div>
            <label className="text-sm mb-1 block">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="w-full bg-transparent border border-gray-500 rounded px-4 py-2 placeholder-gray-400 focus:outline-none text-sm"
            />
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-[#465697] hover:bg-[#3b4d82] text-white py-2 px-5 rounded-lg shadow-md transition duration-300 font-semibold w-fit"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
