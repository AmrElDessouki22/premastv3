'use client';

import { useState } from 'react';

export function SubscriptionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Subscribed with:', email);
  };

  return (
    <section className="p-8 bg-white text-center">
      <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Subscribe</button>
      </form>
    </section>
  );
}