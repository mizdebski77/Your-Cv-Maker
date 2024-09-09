
"use client";
import Header from "./features/Home/Header/header";
import HowItWorks from "./features/Home/HowItWorks/howItWorks";
import Informations from "./features/Home/Informations/informations";

export default function Home() {
  return (
    <main>
      <Header />
      <Informations />
      <HowItWorks />
    </main>
  );
}
