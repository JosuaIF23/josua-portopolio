import { useRef, useState } from 'react';
import {
  Envelope,
  Phone,
  MapPin,
  GithubLogo,
  LinkedinLogo,
  InstagramLogoIcon,
  PaperPlane,
} from '@phosphor-icons/react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapInit';
import SectionHeading from '../ui/SectionHeading';

const CONTACT_INFO = [
  {
    icon: Envelope,
    label: 'Email',
    value: 'josuasllh4@gmail.com',
    href: 'mailto:josuasllh4@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 89654346822',
    href: 'tel:+62 89654346822',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sitoluama, Toba — Indonesia',
    href: 'https://share.google/8iv8eDeK8dpb4FrNN',
    target: '_blank',
  },
];

const SOCIALS = [
  {
    icon: GithubLogo,
    label: 'GitHub',
    href: 'https://github.com/JosuaIF23',
    target: '_blank',
  },
  { icon: LinkedinLogo, label: 'LinkedIn', href: 'https://www.linkedin.com/in/josua-silalahi/', target: '_blank' },
  { icon: InstagramLogoIcon, label: 'Instagram', href: 'https://www.instagram.com/joshi.17999/', target: '_blank' },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const containerRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        '.contact-info',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );

      gsap.fromTo(
        '.contact-form',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    },
    { scope: containerRef },
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${
      errors[field] ? 'ring-2 ring-red-500' : 'focus:ring-2'
    }`;

  const inputStyle = {
    backgroundColor: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    '--tw-ring-color': 'var(--accent)',
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="section-padding"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="container-max">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it. Let's create something great together."
          center
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="contact-info">
            <h3
              className="font-semibold text-xl mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact Information
            </h3>

            <div className="space-y-4 mb-10">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'white',
                    }}
                  >
                    <Icon size={20} weight="fill" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {label}
                    </p>
                    <p
                      className="font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <h3
              className="font-semibold text-lg mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Follow Me
            </h3>
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Icon size={20} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-16 text-center rounded-2xl"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  <PaperPlane size={28} weight="fill" />
                </div>
                <h3
                  className="font-semibold text-xl mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                      style={inputStyle}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                      style={inputStyle}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass('subject')}
                    style={inputStyle}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass('message')} resize-none`}
                    style={inputStyle}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message <PaperPlane size={18} weight="fill" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
