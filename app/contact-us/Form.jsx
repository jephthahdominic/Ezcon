"use client"

import { useState } from "react"

export const Form = () => {
    const [form, setForm] = useState({ fullName: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        if (data.success) {
            setStatus("Message sent successfully!");
            setForm({ fullName: "", email: "", message: "" });
        } else {
            setStatus("Failed to send message.");
        }
        } catch (err) {
        setStatus("Error sending message.");
        }
    };
    return(
        <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent"
                />
            </div>
            
            <div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b4513] focus:border-transparent resize-vertical"
                ></textarea>
            </div>
            
            <button
                type="submit"
                className="bg-[#8b4513] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#7a3d0f] transition-colors flex items-center gap-2"
            >
                Submit Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
            {status && <p>{status}</p>}
        </form>
    )
}