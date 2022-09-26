import { request, gql } from 'graphql-request';
import { CategoriesResponse, PostResponse, RecentPost, RecentPostsResponse } from './dto';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
          postsConnection {
            edges {
              node {
                author {
                  bio
                  name
                  id
                  photo {
                    url
                  }
                }
                createdAt
                title
                slug
                id
                excerpt
                categories {
                  name
                  slug
                }
                image {
                    url
                }
                content {
                    text
                }
              }
            }
          }
        }
    `;

    const result = await request<PostResponse>(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getSimilarPosts = async (categories: string[], slug: string) => {
    const query = gql`
        query GetSimilarPosts($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug AND: { categories_some: { slug_in: $categories } } },
                last: 3
            ) {
                title
                createdAt
                slug
              }
            }
        }
    `;

    const result = await request<PostResponse>(graphqlAPI, query, { slug, categories });

    return result;
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetRecentPosts() {
          posts(
            orderBy: createdAt_ASC
            last: 3
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
            }
          }
        }
  `;

    return await request<RecentPostsResponse>(graphqlAPI, query);
};


export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `;

    return await request<CategoriesResponse>(graphqlAPI, query);
}
