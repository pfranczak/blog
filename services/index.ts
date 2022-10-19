import { request, gql } from 'graphql-request';
import {
  Author,
  AuthorsResponse,
  CategoriesResponse,
  PostDetailsResponse,
  PostResponse,
  RecentPostsResponse
} from './dto';

const graphqlAPI = (process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '') as string;

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
          postsConnection(orderBy: createdAt_DESC) {
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
                    markdown
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
                last: 3,
                orderBy: createdAt_DESC
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

    return await request<RecentPostsResponse>(graphqlAPI, query, { slug, categories });
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetRecentPosts() {
          posts(
            orderBy: createdAt_DESC
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
              }
        }
    `;

  return await request<RecentPostsResponse>(graphqlAPI, query, { category });
}

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

export const getPostDetails = async (slug: String) => {
    const query = gql`
        query GetPostDetails($slug : String!) {
          post(where: {slug: $slug}) {
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
                markdown
            }
          }
        }
  `;

    const result = await request<PostDetailsResponse>(graphqlAPI, query, { slug });

    return result.post;
};

export const getAuthors = async () => {
    const query = gql`
      query GetAuthors {
        authors {
          id
          bio
          name
          photo {
            url
          }
        }
      }`;

    return await request<AuthorsResponse>(graphqlAPI, query);
}

export const getAuthor = async (name: string) => {
  const query = gql`
      query GetAuthorDetails($name : String!) {
          author(where: {name: $name}) {
            id
            bio
            name
            photo {
              url
            }
          }
      }`;

  return await request<{ author: Author }>(graphqlAPI, query, { name });
}
