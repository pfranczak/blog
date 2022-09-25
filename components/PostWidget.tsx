import React, { useEffect, useState } from 'react';
import { getSimilarPosts, getRecentPosts } from '../services';
import FormattedDate from './common/Date';
import { RecentPost } from '../services/dto';
import Link from 'next/link';
import useReadTime from '../hooks/useReadTime';

type Props = {
  categories: string[];
  slug?: string;
}

const PostWidget = ({ categories, slug }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<RecentPost[]>([]);

    useEffect(() => {
      if (slug) {
        getSimilarPosts(categories, slug).then(res => console.log(res));
      } else {
        getRecentPosts().then(res => setRelatedPosts(res.posts));
      }
    }, []);

    return (
      <div className="mb-8">
        <h3 className="text-white text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
        {relatedPosts.map((post, index) => (
          <div key={post.title} className="flex items-center w-full mb-4 bg-white rounded-lg p-3 lg:p-5">
            <div className="w-16 flex-none">
              <img src={post.image.url} alt={post.title} style={{ height: 60, width: 60 }}
                   className="object-center object-cover shadow-lg rounded-full"/>
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs"><FormattedDate date={post.createdAt}/> - <ReadingTime text={post.content.text}/></p>
              <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
            </div>
          </div>
        ))}
      </div>
    );
};

const ReadingTime = ({ text }: { text: string }) => {
  const { time, unit } = useReadTime(text);
  return <>{time} {unit} read</>
}

export default PostWidget;
