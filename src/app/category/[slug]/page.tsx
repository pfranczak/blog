import { PostPreviewCard } from "@/components/PostPreviewCard/PostPreviewCard";
import { getPostsFromCategory } from "@/services/caterogies";

export default async function Category({ params }: { params: Promise<{ slug: string } >}) {
    const { slug } = await params;
    const postsObj = await getPostsFromCategory(slug);

    if (!postsObj) {
        return <div>Category not found</div>;
    }

    const { posts } = postsObj;


    if (posts.length === 0) {
        return (
            <div className="grid grid-rows-[20px_1fr_20px] justify-items-center h-max 4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 sm:items-start">
                    <h1 className="text-xl text-gray-900 dark:text-white">There are no posts in this category</h1>
                </main>
            </div>
        )
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] justify-items-center h-max p-4 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 sm:items-start">
            {posts.map((post) => (
                <PostPreviewCard key={post.title} post={post}/>
            ))}
            </main>
        </div>
    );
}
