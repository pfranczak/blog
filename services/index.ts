import { request, gql } from 'graphql-request';
import { PostResponse } from './dto';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
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
              }
            }
          }
        }
    `;

    const result = await request<PostResponse>(graphqlAPI, query);
    return result.postsConnection.edges;
}
