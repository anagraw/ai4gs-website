// Form.jsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ContactForm({
  to = ['monojit.choudhury@mbzuai.ac.ae', 'Sunayana.Sitaram@microsoft.com'], 
  subjectPrefix = 'AI4GS Contact Form',
}) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${subjectPrefix}: ${form.name || 'New message'}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
      >
        <Mail className="h-5 w-5" />
        <span>Send</span>
      </button>

      <p className="text-sm text-gray-500 mt-2">
        Submitting this form opens your email app with a your message to our organizers.
        </p>

    </form>
  );
}
