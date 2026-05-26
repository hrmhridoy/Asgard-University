"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
  }

  if (submitted) {
    return (
      <div
        className="glass-panel rounded-lg p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl text-gold-highlight">Message Received</p>
        <p className="mt-2 text-text-muted">
          Your missive has crossed the Bifrost to our admissions council. We shall
          respond within three mortal business days.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm text-gold mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-md bg-surface-elevated border border-gold/20 px-4 py-2 text-text-primary focus:outline focus:outline-2 focus:outline-gold"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gold mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-md bg-surface-elevated border border-gold/20 px-4 py-2 text-text-primary focus:outline focus:outline-2 focus:outline-gold"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm text-gold mb-1">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-md bg-surface-elevated border border-gold/20 px-4 py-2 text-text-primary focus:outline focus:outline-2 focus:outline-gold"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.subject}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gold mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-md bg-surface-elevated border border-gold/20 px-4 py-2 text-text-primary focus:outline focus:outline-2 focus:outline-gold resize-y"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
