import { getPostDetails } from "@/services";

import { notFound } from "next/navigation";
import { PostView } from "../components/PostView";

export default async function PostPage({ params }: { params: Promise<{ slug: string } >}) {
  const { slug } = await params;
  const post = await getPostDetails(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="h-max p-4 pb-20 sm:p-20">
      <PostView post={post} />
    </div>
  );
}
