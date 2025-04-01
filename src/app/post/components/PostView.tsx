import { Author } from "@/components/common/Author";
import FormattedDate from "@/components/common/Date";
import Markdown from "@/components/common/Markdown";
import useReadTime from "@/hooks/useReadTime";
import { Post } from "@/models/Post";
import Image from "next/image";


interface PostViewProps {
    post: Post;
}
  
export function PostView({ post }: PostViewProps) {
    const { time, unit } = useReadTime(post.content.text);

    return (
        <article className="flex flex-col gap-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-200">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
                {post.title}
                </h1>
                <div className="text-xl text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between">
                    <span><FormattedDate date={post.createdAt}/> - {time} {unit}</span>
                    <Author name={post.author.name} id={post.author.id}/>
                </div>
            </div>
            <Image 
                src={post.image.url} 
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <Markdown>{post.content.markdown}</Markdown>
        </article>
    );
}
