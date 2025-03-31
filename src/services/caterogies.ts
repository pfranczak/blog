import { RecentPostsResponse } from '@/models/Category';
import { Category } from '@/models/Post';
import { request, gql } from 'graphql-request';

const graphqlAPI = (process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || 'https://api-eu-central-1.hygraph.com/v2/cl7rjsc4t6a8701um9ivu135k/master') as string;

export const getCategories = async () => {
    const query = gql`
          query GetCategories {
              categories {
                  name
                  slug
              }
          }
      `;
  
    return await request<{ categories: Category[] }>(graphqlAPI, query);
  }

  export const getPostsFromCategory = async (category: string) => {
    const query = gql`
          query GetPostsFromCategory($category: String!) {
              posts(
                  where: { categories_some: { slug: $category  } }
              ) {
                  title
                  createdAt
                  slug
                  excerpt
                  image {
                      url
                  }
                  content {
                      text
                      markdown
                  }
                  id
                  author {
                    id
                  }
                }
          }
      `;
  
    return await request<RecentPostsResponse>(graphqlAPI, query, { category });
  }