import { PostPreviewCard } from "@/components/PostPreviewCard/PostPreviewCard";
import { getPosts } from "@/services";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center h-max p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        {posts.map((post) => (
          <PostPreviewCard key={post.node.id} post={post.node}/>
        ))}
      </main>
    </div>
  );
}
