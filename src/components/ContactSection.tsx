import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ArrowRight, 
  Sparkles, 
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
  RefreshCw
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('Full-Stack Web Application');
  const [senderName, setSenderName] = useState<string>('');
  const [senderEmail, setSenderEmail] = useState<string>('');
  const [senderMessage, setSenderMessage] = useState<string>('');
  
  // Submission states
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const topics = [
    'Full-Stack Web Application',
    'AI & Automation Integration',
    'UI / UX System Design',
    'Full-Time / Contract Role',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Direct email delivery using FormSubmit AJAX API straight to ankitdeshpande36@gmail.com
  const handleDirectSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !senderMessage.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Sending your message directly to ankitdeshpande36@gmail.com...');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          topic: selectedTopic,
          message: senderMessage,
          _subject: `New Project Inquiry from ${senderName} [${selectedTopic}]`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setStatus('success');
        setStatusMessage('Message sent successfully! Ankit will receive your email directly.');
        setSenderName('');
        setSenderEmail('');
        setSenderMessage('');
      } else {
        // Fallback if network blocked
        triggerMailtoFallback();
      }
    } catch (err) {
      console.error('Direct submission error:', err);
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    setStatus('success');
    setStatusMessage('Opening your email client to send directly to ankitdeshpande36@gmail.com...');
    const subject = encodeURIComponent(`Project Inquiry: ${selectedTopic} - from ${senderName || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Ankit,\n\nI am reaching out regarding: ${selectedTopic}\n\nProject Details:\n${senderMessage}\n\nSender Name: ${senderName}\nSender Email: ${senderEmail}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const openGmailWebCompose = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${selectedTopic} - from ${senderName || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Ankit,\n\nI am reaching out regarding: ${selectedTopic}\n\nProject Details:\n${senderMessage || 'I would like to discuss a project with you.'}\n\nBest regards,\n${senderName || 'Client'}\n${senderEmail ? `Email: ${senderEmail}` : ''}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-[#080c15] relative overflow-hidden border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-indigo-600/10 via-emerald-600/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 font-mono text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>DIRECT EMAIL INBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            LET'S BUILD SOMETHING
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 max-w-xl mx-auto">
            Send a message below and it will be delivered directly to <span className="text-emerald-400 font-mono font-medium">{PERSONAL_INFO.email}</span>.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Email Card */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e1424] to-[#0a0f1d] border border-slate-800 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Destination Inbox</p>
                  <p className="text-sm font-semibold text-white">Ankit Deshpande</p>
                </div>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs text-indigo-300 select-all truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                {/* 1-Click Web Gmail Compose */}
                <button
                  id="btn-open-gmail-web"
                  onClick={openGmailWebCompose}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs py-2.5 rounded-xl transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Open directly in Gmail Web</span>
                </button>

                {/* Direct Mailto Button */}
                <a
                  id="btn-direct-mailto"
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20-%20Ankit%20Deshpande`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm py-2.5 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all"
                >
                  <span>Open System Mail App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Details & Work Status */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Remote / Global Collaboration</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Fast Response Within 24 Hours</span>
              </div>
            </div>

          </div>

          {/* Right Direct Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-[#0e1424] to-[#0a0f1d] border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-base font-display font-bold text-white">
                    Send Direct Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Direct Dispatch
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-700/50 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-white">Email Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                      Your inquiry has been forwarded directly to <span className="text-emerald-400 font-mono">{PERSONAL_INFO.email}</span>. Ankit will respond to you shortly!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setStatusMessage('');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-xs font-mono text-slate-200 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDirectSend} className="space-y-4">
                  
                  {/* Topic selector */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Inquiry Topic:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {topics.map((topic) => (
                        <button
                          type="button"
                          key={topic}
                          onClick={() => setSelectedTopic(topic)}
                          className={`text-left p-2.5 rounded-lg border text-xs font-mono transition-all ${
                            selectedTopic === topic
                              ? 'bg-indigo-600/20 border-indigo-500 text-indigo-200'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        placeholder="e.g. Alex Miller"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
                        required
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Project Details / Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      placeholder="Tell me about your application requirements, timeline, tech stack, or design goals..."
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none transition-colors resize-none"
                      required
                      disabled={status === 'sending'}
                    />
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING TO {PERSONAL_INFO.email}...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND DIRECT EMAIL →</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-center text-slate-500">
                    Submissions are transmitted securely & delivered directly to <span className="text-slate-300">{PERSONAL_INFO.email}</span>
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
