import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import BlogSection from "@/components/blog/blog";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const allPosts = await reader.collections.posts.all();

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.entry.date || 0).getTime() - new Date(a.entry.date || 0).getTime();
  });

  const formattedPosts = sortedPosts.map((post) => ({
    title: post.entry.title ?? "",
    image: post.entry.image ?? "",
    meta: post.entry.duration ?? "0",
    date: post.entry.date ?? "",
    category: post.entry.type ?? "essay",
    slug: `/blog/${post.slug}`,
  }));

  const recentPosts = formattedPosts.slice(0, 6);
  let olderPosts: typeof formattedPosts = [];
  
  if (recentPosts.length > 0) {
    const lastRecentPostDate = new Date(recentPosts[recentPosts.length - 1].date);
    const sixMonthThreshold = new Date(lastRecentPostDate);
    sixMonthThreshold.setMonth(sixMonthThreshold.getMonth() - 6);

    olderPosts = formattedPosts.slice(6).filter((post) => {
      const postDate = new Date(post.date);
      return postDate < sixMonthThreshold;
    });
  }

  return (
    <div>
      <BlogSection 
        menu={<Navbar direction="down" />} 
        mainArticles={recentPosts }
        oldArticles={olderPosts }
      />
      <Footer />
    </div>
  );
}