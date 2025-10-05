import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!email.trim()) e.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Email is invalid';
    if (!message.trim()) e.message = 'Message is required';
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSubmitting(true);
    setSuccess(false);
    // Simulate network request
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);
    setName(''); setEmail(''); setMessage('');
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      {success && (
        <div className="mb-4 px-4 py-3 bg-green-600/20 text-green-300 rounded">Your message was sent — we'll get back to you shortly.</div>
      )}

      <div className="grid grid-cols-1 gap-4">
        <label className="block">
          <div className="text-sm text-white/60 mb-2">Name</div>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className={`w-full px-4 py-3 bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded text-white focus:outline-none`}
            placeholder="Your name"
          />
          {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
        </label>

        <label className="block">
          <div className="text-sm text-white/60 mb-2">Email</div>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`w-full px-4 py-3 bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded text-white focus:outline-none`}
            placeholder="you@company.com"
          />
          {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
        </label>

        <label className="block">
          <div className="text-sm text-white/60 mb-2">Message</div>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            className={`w-full px-4 py-3 bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded text-white focus:outline-none h-32 resize-y`}
            placeholder="Tell us about your project or inquiry"
          />
          {errors.message && <div className="text-xs text-red-400 mt-1">{errors.message}</div>}
        </label>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded font-medium disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
          <div className="text-sm text-white/60">Or email us at <a href="mailto:hello@edutech.com" className="text-orange-400 hover:underline">hello@edutech.com</a></div>
        </div>
      </div>
    </form>
  );
}
