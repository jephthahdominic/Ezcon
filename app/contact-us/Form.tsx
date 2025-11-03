"use client"

import { useState } from "react"

export const Form = () => {
    const [form, setForm] = useState({ fullName: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // Clear status when user starts typing again
        if (status) setStatus("");
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Client-side validation
        if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus("Please fill in all fields.");
            return;
        }

        if (!validateEmail(form.email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        if (form.message.trim().length < 10) {
            setStatus("Message must be at least 10 characters long.");
            return;
        }

        setIsLoading(true);
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: form.fullName.trim(),
                    email: form.email.trim().toLowerCase(),
                    message: form.message.trim()
                }),
            });

            const data = await res.json();
            
            if (res.ok && data.success) {
                setStatus("Message sent successfully! We'll get back to you soon.");
                setForm({ fullName: "", email: "", message: "" });
            } else {
                // Ensure error is always a string
                const errorMessage = typeof data.error === 'string' 
                    ? data.error 
                    : "Failed to send message. Please try again.";
                setStatus(errorMessage);
            }
        } catch (err) {
            console.error("Form submission error:", err);
            setStatus("Network error. Please check your connection and try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusColor = () => {
        if (typeof status !== 'string' || !status) return "text-blue-600";
        if (status.includes("successfully")) return "text-green-600";
        if (status.includes("Error") || status.includes("Failed") || status.includes("Please")) return "text-red-600";
        return "text-blue-600";
    };

    return(
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>
            
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>
            
            <div>
                <textarea
                    name="message"
                    placeholder="Your Message (minimum 10 characters)"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={6}
                    minLength={10}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
            </div>
            
            <button
                type="submit"
                disabled={isLoading}
                className="bg-[#8b4513] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#7a3d0f] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#8b4513]"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </>
                ) : (
                    <>
                        Submit Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </>
                )}
            </button>
            
            {status && (
                <p className={`font-medium ${getStatusColor()}`} role="status">
                    {status}
                </p>
            )}
        </form>
    )
}