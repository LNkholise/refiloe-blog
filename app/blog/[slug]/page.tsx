import ArticleSection from "@/components/blog/article";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";

const reader = createReader(process.cwd(), keystaticConfig);

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}


export default async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) notFound();

  const contentData = await post.content();
  const allPosts = await reader.collections.posts.all()
  const targetType = post.type
  const targetPost = post.title

  const matchingStories = allPosts.filter(post => (post.entry.type) === targetType && post.entry.title !== targetPost).slice(0,4).map((post, index) => ({
    title: post.entry.title ?? "",
    image: post.entry.image ?? "",
    date: post.entry.date ?? "",
    type: post.entry.type ?? "essay",
    slug: post.slug,
    description: post.entry.summary ?? "",
  }))
  return (
    <div>
      <ArticleSection 
        menu={<Navbar direction="down" />} 
        coverImage={post.image ?? ""}
        content={contentData || []}
        duration={post.duration ?? 0}
        title={post.title ?? "No Title Found"}
        type={post.type ?? "essay"}
        date={post.date ?? 'UNKNOWN'}
        picks={matchingStories || []}
      />
      <Footer />
    </div>
  );
}
