import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components';
import { getPosts } from '../services';
import { Edge } from '../services/dto';

export default function Home({ posts }: { posts: Edge[] }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Przemek Franczak Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8 col-span-1">
              {posts.map(post =>
                  <PostCard post={post.node} key={post.node.title}/>
              )}
          </div>
          <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky relative top-8">
                    <PostWidget/>
                    <Categories/>
              </div>
          </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}
