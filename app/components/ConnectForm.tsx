"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeResult } from "../actions/subscribe";

const initialState: SubscribeResult | null = null;

const roles = [
  "Founder / Entrepreneur",
  "CEO / Executive",
  "Student",
  "Builder",
  "Designer / Developer",
  "Mentor",
  "I have an idea",
  "Other",
];

export default function ConnectForm() {
  const [result, formAction, pending] = useActionState(
    async (_prev: SubscribeResult | null, formData: FormData) => {
      return subscribe(formData);
    },
    initialState
  );

  if (result?.success) {
    return (
      <div className="flex items-start gap-4 py-2">
        <div
          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-[#2bbfbf] flex items-center justify-center"
          aria-hidden="true"
        >
          <svg
            className="w-2.5 h-2.5 text-[#2bbfbf]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <p className="text-white font-medium">You&rsquo;re on the list.</p>
          <p className="text-white/40 text-sm mt-1">
            Check your inbox — we sent you a confirmation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="w-full max-w-lg space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="sr-only">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="w-full bg-white/[0.06] border border-white/12 rounded-full px-6 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#2bbfbf]/50 focus:bg-white/[0.08] transition-all duration-200"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-white/[0.06] border border-white/12 rounded-full px-6 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#2bbfbf]/50 focus:bg-white/[0.08] transition-all duration-200"
        />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className="sr-only">What best describes you?</label>
        <select
          id="role"
          name="role"
          className="w-full bg-white/[0.06] border border-white/12 rounded-full px-6 py-3.5 text-sm text-white/60 focus:outline-none focus:border-[#2bbfbf]/50 focus:bg-white/[0.08] transition-all duration-200 appearance-none cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled className="bg-[#111] text-white/40">What best describes you?</option>
          {roles.map((r) => (
            <option key={r} value={r} className="bg-[#111] text-white">{r}</option>
          ))}
        </select>
      </div>

      {/* Idea (optional) */}
      <div>
        <label htmlFor="idea" className="sr-only">What would you want to build? (optional)</label>
        <input
          id="idea"
          name="idea"
          type="text"
          placeholder="What would you want to build? (optional)"
          className="w-full bg-white/[0.06] border border-white/12 rounded-full px-6 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#2bbfbf]/50 focus:bg-white/[0.08] transition-all duration-200"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-wide rounded-full px-8 py-4 transition-colors duration-200 disabled:opacity-50 cursor-pointer"
      >
        {pending ? "Sending…" : "I WANT TO BUILD"}
      </button>

      {result && !result.success && "error" in result && (
        <p className="mt-3 text-red-400 text-sm">{result.error}</p>
      )}
    </form>
  );
}
