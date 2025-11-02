import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:hello@arabix.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build together</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Tell us about your idea. We’ll get back to you within one business day.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              <Mail className="h-4 w-4" /> contact
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-800">
                <Send className="h-4 w-4" /> Send message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Why ArabixDev?</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Modern stacks and performance-first mindset</li>
              <li>• Pixel-perfect UI with interactive 3D and motion</li>
              <li>• Clear communication and rapid delivery</li>
            </ul>
            <div className="mt-6 text-sm text-slate-600">
              Prefer email? <a className="font-medium text-slate-900 underline" href="mailto:hello@arabix.dev">hello@arabix.dev</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
