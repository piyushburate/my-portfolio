import axios from "axios";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("/api/contact", form);
      if (res.data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          name="name"
          placeholder="Name*"
          className="md:flex-1/2 px-4 py-6 !ring-0"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email*"
          className="md:flex-1/2 px-4 py-6 !ring-0"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <Textarea
        name="message"
        placeholder="Message*"
        className="flex-1 p-4 min-h-32 !ring-0"
        value={form.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="flex-1 px-4 py-3">
        Send Message
      </Button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
