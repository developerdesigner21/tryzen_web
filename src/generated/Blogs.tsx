import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Blog = {
  __typename?: 'Blog';
  Author_info?: Maybe<Scalars['String']['output']>;
  Basic_info?: Maybe<Scalars['String']['output']>;
  Blogslug?: Maybe<Scalars['String']['output']>;
  Blogtitle?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Category>;
  Category_id?: Maybe<Scalars['Int']['output']>;
  Comment_data?: Maybe<Scalars['String']['output']>;
  Created_at?: Maybe<Scalars['String']['output']>;
  Deleted_at?: Maybe<Scalars['String']['output']>;
  Id: Scalars['Int']['output'];
  Metadata?: Maybe<Scalars['String']['output']>;
  Section_data?: Maybe<Scalars['String']['output']>;
  Updated_at?: Maybe<Scalars['String']['output']>;
};

export type Category = {
  __typename?: 'Category';
  Category_name?: Maybe<Scalars['String']['output']>;
  Created_at?: Maybe<Scalars['String']['output']>;
  Deleted_at?: Maybe<Scalars['String']['output']>;
  Id: Scalars['Int']['output'];
  Updated_at?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog?: Maybe<Blog>;
  createCategory?: Maybe<Category>;
  deleteBlog?: Maybe<Scalars['Boolean']['output']>;
  deleteCategory?: Maybe<Scalars['Boolean']['output']>;
  updateBlog?: Maybe<Blog>;
  updateCategory?: Maybe<Category>;
};


export type MutationCreateBlogArgs = {
  Author_info: Scalars['String']['input'];
  Basic_info: Scalars['String']['input'];
  Blogslug: Scalars['String']['input'];
  Blogtitle: Scalars['String']['input'];
  Category_id: Scalars['Int']['input'];
  Comment_data: Scalars['String']['input'];
  Metadata: Scalars['String']['input'];
  Section_data: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  Category_name: Scalars['String']['input'];
};


export type MutationDeleteBlogArgs = {
  Id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  Id: Scalars['Int']['input'];
};


export type MutationUpdateBlogArgs = {
  Author_info?: InputMaybe<Scalars['String']['input']>;
  Basic_info?: InputMaybe<Scalars['String']['input']>;
  Blogslug?: InputMaybe<Scalars['String']['input']>;
  Blogtitle?: InputMaybe<Scalars['String']['input']>;
  Category_id?: InputMaybe<Scalars['Int']['input']>;
  Comment_data?: InputMaybe<Scalars['String']['input']>;
  Id: Scalars['Int']['input'];
  Metadata?: InputMaybe<Scalars['String']['input']>;
  Section_data?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCategoryArgs = {
  Category_name: Scalars['String']['input'];
  Id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  categories?: Maybe<Array<Maybe<Category>>>;
  getAllBlogs?: Maybe<Array<Maybe<Blog>>>;
  getBlogBySlug?: Maybe<Blog>;
  getBlogsWithCategory?: Maybe<Array<Maybe<Blog>>>;
};


export type QueryBlogArgs = {
  Id: Scalars['Int']['input'];
};


export type QueryGetBlogBySlugArgs = {
  Basic_info: Scalars['String']['input'];
  Blogslug: Scalars['String']['input'];
  Id: Scalars['Int']['input'];
};

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', getAllBlogs?: Array<{ __typename?: 'Blog', Id: number, Basic_info?: string | null, Metadata?: string | null, Author_info?: string | null, Section_data?: string | null, Comment_data?: string | null, Blogtitle?: string | null, Blogslug?: string | null, Category_id?: number | null, Created_at?: string | null, Updated_at?: string | null, Deleted_at?: string | null } | null> | null };


export const GetAllBlogsDocument = gql`
    query GetAllBlogs {
  getAllBlogs {
    Id
    Basic_info
    Metadata
    Author_info
    Section_data
    Comment_data
    Blogtitle
    Blogslug
    Category_id
    Created_at
    Updated_at
    Deleted_at
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export function useGetAllBlogsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogsSuspenseQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;