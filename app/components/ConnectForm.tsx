"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeResult } from "../actions/subscribe";

const initialState: SubscribeResult | null = null;

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
    <form action={formAction} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="flex-1 bg-white/[0.06] border border-white/12 rounded-full px-6 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#2bbfbf]/50 focus:bg-white/[0.08] transition-all duration-200"
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-semibold text-sm rounded-full px-8 py-3.5 transition-colors duration-200 disabled:opacity-50 whitespace-nowrap cursor-pointer"
        >
          {pending ? "Sending…" : "I’m interested"}
        </button>
      </div>
      {result && !result.success && (
        <p className="mt-3 text-red-400 text-sm">{result.error}</p>
      )}
    </form>
  );
}
