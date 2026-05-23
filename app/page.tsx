import Hero from "@/components/home/hero_1";
import ParallexSection from "@/components/home/parallex-section";
import InfoSection from "@/components/home/magazine-section";
import BlogSection from "@/components/home/blog-section";
import Announcements from "@/components/home/announcements";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Home() {
  const allPosts = await reader.collections.posts.all()
  const data = await Promise.all([
  reader.singletons.announcement1.read(),
  reader.singletons.announcement2.read(),
  ]);

  const slides = data
  .filter((s): s is { date: string; content: string } => !!s && !!s.content.trim())
  .map(s => ({
    date: s.date,
    text: s.content
  }));

  const latestStories = allPosts.slice(0,3).map((post) => ({
    title: post.entry.title ?? "",
    image: post.entry.image ?? "",
    date: post.entry.date ?? "",
    type: post.entry.type ?? "essay",
    slug: `/blog/${post.slug}`,
    description: post.entry.summary ?? "",
  })
  )
  return (
    <div>
      <Hero navbar={<Navbar direction="down" />} />
      <ParallexSection />
      { /* <InfoSection /> */ }
      <BlogSection articles={latestStories} />
      { (slides.length !== 0 || slides) &&
      <Announcements slides={slides} />
      }
      <Footer />
    </div>
  );
}
