import { Author } from '@/models/Author';
import { request, gql } from 'graphql-request';

const graphqlAPI = (process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || 'https://api-eu-central-1.hygraph.com/v2/cl7rjsc4t6a8701um9ivu135k/master') as string;

export const getAuthor = async (id: string) => {
    const query = gql`
        query GetAuthorDetails($id : ID!) {
            author(where: {id: $id}) {
              id
              bio
              name
              photo {
                url
              }
            }
        }`;
  
    return await request<{ author: Author }>(graphqlAPI, query, { id });
  }