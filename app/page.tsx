import type { Metadata } from "next";
import { apartments } from "./lib/siteContent";
import { HomeClient } from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Nafplio & Parga Apartments",
  description:
    "Amazing villa and apartment options in Parga and Nafplio, Greece. View photos, amenities, and book directly.",
  keywords: [
    "Nafplio apartment",
    "Parga villa",
    "Parga hotel alternative",
    "Nafplio boutique stay",
    "amazing apartment Greece",
    "villa with sea view Parga",
  ],
};

export default function Home() {
  const a = apartments[0];
  const b = apartments[1];
  return <HomeClient a={a} b={b} />;
}
