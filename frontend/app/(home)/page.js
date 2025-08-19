import Hero from "@/components/Hero/Hero";
import NewCollections from "@/components/New Collections/NewCollections";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Offers from "@/components/Offers/Offers";
import Popular from "@/components/Popular/Popular";

export default function Home() {
  return (
    <main>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </main>
  );
}
