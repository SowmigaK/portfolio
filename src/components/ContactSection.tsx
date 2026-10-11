import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  Copy,
  Check
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  isDark: boolean;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedState, setSubmittedState] = useState<'idle' | 'ready'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInquiry, setCopiedInquiry] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      nextErrors.subject = 'Please enter a brief subject line.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please write a message of at least 10 characters.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedState('ready');
  };

  const getMailtoHref = () => {
    const subject = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject.trim() || 'Data Analyst Opportunity'}`
    );
    const body = encodeURIComponent(
      `Hi Sowmiga,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    return `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyInquiry = async () => {
    const formatted = `To: ${PROFILE_DATA.email}\nFrom: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedInquiry(true);
      setTimeout(() => setCopiedInquiry(false), 2000);
    } catch {
      setCopiedInquiry(true);
      setTimeout(() => setCopiedInquiry(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-24 border-b ${
        isDark ? 'border-slate-800/80' : 'border-slate-200'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p
                className={`text-xs font-mono font-semibold tracking-wider mb-2 ${
                  isDark ? 'text-emerald-400' : 'text-teal-700'
                }`}
              >
                07. CONTACT
              </p>
              <h2
                className={`text-2xl md:text-3xl font-display font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Let&apos;s Connect
              </h2>
            </div>

            <p
              className={`text-sm md:text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              I&apos;m open to entry-level opportunities and internships in Data Analytics, SQL Development, Python, and Business Intelligence. Feel free to reach out via email, LinkedIn, or the contact form.
            </p>

            <div
              className={`p-5 rounded-2xl border space-y-4 ${
                isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <Mail className="w-4 h-4 mt-1 shrink-0 text-emerald-500" />
                  <div className="min-w-0">
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Email
                    </p>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className={`text-xs sm:text-sm font-mono font-medium break-all hover:underline ${
                        isDark ? 'text-slate-100' : 'text-slate-900'
                      }`}
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono border transition-colors shrink-0 cursor-pointer ${
                    isDark
                      ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {copiedEmail ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800/60">
                <Phone className="w-4 h-4 mt-1 shrink-0 text-emerald-500" />
                <div>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Phone
                  </p>
                  <a
                    href="tel:+919688440339"
                    className={`text-sm font-mono tabular-nums font-medium hover:underline ${
                      isDark ? 'text-slate-100' : 'text-slate-900'
                    }`}
                  >
                    {PROFILE_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800/60">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-emerald-500" />
                <div>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Location
                  </p>
                  <p className={`text-sm font-medium ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {PROFILE_DATA.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark
                    ? 'bg-[#111826] border-slate-800 hover:border-emerald-500/50 text-slate-100'
                    : 'bg-white border-slate-200 hover:border-teal-600/50 text-slate-900'
                }`}
              >
                <div>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    LinkedIn
                  </p>
                  <p className="text-xs font-mono font-semibold mt-0.5">in/sowmiga-k</p>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-500 shrink-0" />
              </a>

              <a
                href={PROFILE_DATA.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark
                    ? 'bg-[#111826] border-slate-800 hover:border-emerald-500/50 text-slate-100'
                    : 'bg-white border-slate-200 hover:border-teal-600/50 text-slate-900'
                }`}
              >
                <div>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    GitHub
                  </p>
                  <p className="text-xs font-mono font-semibold mt-0.5">SowmigaK/Sowmiga</p>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-500 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 md:p-8 rounded-2xl border ${
                isDark ? 'bg-[#111826] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`text-lg font-display font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Send a Message
                </h3>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Validates your message and prepares an email directly to {PROFILE_DATA.email}
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setSubmittedState('idle');
                      }}
                      placeholder="Your Name"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
                        errors.name
                          ? 'border-red-500'
                          : isDark
                            ? 'bg-[#0B0F17] border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-emerald-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-600'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setSubmittedState('idle');
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-red-500'
                          : isDark
                            ? 'bg-[#0B0F17] border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-emerald-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-600'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      setSubmittedState('idle');
                    }}
                    placeholder="Data Analyst Opportunity / Project Inquiry"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
                      errors.subject
                        ? 'border-red-500'
                        : isDark
                          ? 'bg-[#0B0F17] border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-emerald-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-600'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      setSubmittedState('idle');
                    }}
                    placeholder="Write your message here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none ${
                      errors.message
                        ? 'border-red-500'
                        : isDark
                          ? 'bg-[#0B0F17] border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-emerald-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-600'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className={`text-xs font-mono underline ${
                      isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Direct email: {PROFILE_DATA.email}
                  </a>
                </div>
              </form>

              {submittedState === 'ready' && (
                <div
                  className={`mt-6 p-4 rounded-xl border space-y-3 ${
                    isDark
                      ? 'bg-[#0B0F17] border-emerald-500/40 text-slate-100'
                      : 'bg-teal-50 border-teal-200 text-slate-900'
                  }`}
                  role="status"
                >
                  <p className="text-xs font-semibold text-emerald-400">
                    Message Validated &amp; Ready
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={getMailtoHref()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyInquiry}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        isDark
                          ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                          : 'border-slate-300 text-slate-800 hover:bg-white'
                      }`}
                    >
                      {copiedInquiry ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied Message</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Formatted Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
