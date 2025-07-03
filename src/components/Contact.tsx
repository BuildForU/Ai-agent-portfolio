import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Contact
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ready to automate your business processes? Let's discuss your project and find the perfect AI solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Email</p>
                    <p className="text-text-secondary">likith@example.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Phone</p>
                    <p className="text-text-secondary">+91 XXXXXXXXXX</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">Location</p>
                    <p className="text-text-secondary">India (Remote & Global Projects)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button variant="hero" className="w-full sm:w-auto">
                Book a Call
              </Button>
              <Button variant="outline-light" className="w-full sm:w-auto ml-0 sm:ml-4">
                WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent resize-none"
                  placeholder="Tell me about your automation needs, current challenges, and what you'd like to achieve..."
                />
              </div>

              <Button type="submit" variant="cta" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="text-center mt-12">
          <p className="text-text-muted">
            I typically respond within 24 hours. For urgent projects, feel free to call directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;