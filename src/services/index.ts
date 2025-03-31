import { PostDetailsResponse, PostResponse } from '@/models/Post';
import { request, gql } from 'graphql-request';

const graphqlAPI = (process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || 'https://api-eu-central-1.hygraph.com/v2/cl7rjsc4t6a8701um9ivu135k/master') as string;

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

export const getPostDetails = async (slug: string) => {
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