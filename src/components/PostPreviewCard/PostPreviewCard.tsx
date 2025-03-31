import { Post } from "@/models/Post";
import useReadTime from "@/hooks/useReadTime";
import FormattedDate from "../common/Date";
import Link from "next/link";

interface PostPreviewCardProps {
  post: Post;
}

export function PostPreviewCard({ post }: PostPreviewCardProps) {
  const { time, unit } = useReadTime(post.content.text);

  return (
    <div className="flex flex-col gap-3">
      <img src={post.image.url} className="h-80"/>
      <h3 className="text-xl/7 text-gray-600 dark:text-gray-400 sm:truncate sm:text-2xl sm:tracking-tight">
        <FormattedDate date={post.createdAt}/> - {time} {unit}
      </h3>
      <h2 className="text-2xl/7 font-bold text-gray-900 dark:text-gray-200 sm:truncate sm:text-3xl sm:tracking-tight">{post.title}</h2>
      <p className="text-lg text-gray-900 dark:text-gray-200">{post.excerpt}</p>
      <Link href={`/post/${post.slug}`} className="text-blue-500 text-lg font-medium">Learn more</Link>
    </div>
  )
}