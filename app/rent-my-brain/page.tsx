import { Metadata } from "next";
import RentMyBrainContent from "./RentMyBrainContent";

export const metadata: Metadata = {
  title: "Rent My Brain — ADHD for CEOs",
  description:
    "A community-powered initiative by ADHD for CEOs. Submit a real challenge. Connect with unconventional thinkers. Build something.",
  openGraph: {
    title: "Rent My Brain 🧠 — ADHD for CEOs",
    description:
      "Your next big idea might need a different brain. Got a problem? We might have the mind for it.",
    url: "https://adhdceos.org/rent-my-brain",
  },
};

export default function RentMyBrain() {
  return <RentMyBrainContent />;
}
