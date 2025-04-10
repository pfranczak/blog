import { getAuthor } from "@/services/authors";
import Image from 'next/image';

export default async function AuthorPage({ params }: { params: Promise<{ slug: string } >}) {
  const { slug } = await params;
  const authorObj = await getAuthor(slug);
  console.log(authorObj);
  if (!authorObj) {
    return <div>Author not found</div>;
  }

  const { author } = authorObj;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        {author.photo.url && (
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src={author.photo.url}
              alt={`${author.name}'s profile picture`}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-2 text-center mt-6 text-gray-900 dark:text-white">{author.name}</h1>
          <p className="text-gray-600 dark:text-gray-200 mt-4 lg:max-w-[75%]">{author.bio}</p>
        </div>
    </div>
  );
}