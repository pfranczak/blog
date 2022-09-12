import type { NextPage } from 'next'
import Head from 'next/head'
import { Post } from '../types/posts';
import { Categories, PostCard, PostWidget } from '../components';

const posts: Post[] = [
    { title: 'Very interesting post', excerpt: 'And its description' },
    { title: 'Very interesting post 2', excerpt: 'And its description 2' },
    { title: 'Very interesting post 3', excerpt: 'And its description 3' },
    { title: 'Very interesting post 4', excerpt: 'And its description 4' },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Przemek Franczak Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
              {posts.map(post =>
                  <PostCard post={post} key={post.title}/>
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

export default Home
