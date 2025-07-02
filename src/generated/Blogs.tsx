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
  author_info?: Maybe<Scalars['String']['output']>;
  basic_info?: Maybe<Scalars['String']['output']>;
  blog_slug?: Maybe<Scalars['String']['output']>;
  blog_title?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  category_id?: Maybe<Scalars['Int']['output']>;
  comment_data?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  meta_data?: Maybe<Scalars['String']['output']>;
  section_data?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type Category = {
  __typename?: 'Category';
  category_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
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
  author_info: Scalars['String']['input'];
  basic_info: Scalars['String']['input'];
  blog_slug: Scalars['String']['input'];
  blog_title: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
  comment_data: Scalars['String']['input'];
  meta_data: Scalars['String']['input'];
  section_data: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  category_name: Scalars['String']['input'];
};


export type MutationDeleteBlogArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateBlogArgs = {
  author_info?: InputMaybe<Scalars['String']['input']>;
  basic_info?: InputMaybe<Scalars['String']['input']>;
  blog_slug?: InputMaybe<Scalars['String']['input']>;
  blog_title?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  comment_data?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  meta_data?: InputMaybe<Scalars['String']['input']>;
  section_data?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCategoryArgs = {
  category_name: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  getAllBlogs?: Maybe<Array<Maybe<Blog>>>;
  getBlogBySlug?: Maybe<Blog>;
  getBlogsWithCategory?: Maybe<Array<Maybe<Blog>>>;
};


export type QueryGetBlogBySlugArgs = {
  blog_slug: Scalars['String']['input'];
};


export type QueryGetBlogsWithCategoryArgs = {
  category_id: Scalars['Int']['input'];
};

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', getAllBlogs?: Array<{ __typename?: 'Blog', id: number, basic_info?: string | null, meta_data?: string | null, author_info?: string | null, section_data?: string | null, comment_data?: string | null, blog_title?: string | null, blog_slug?: string | null, category_id?: number | null, created_at?: string | null, updated_at?: string | null, deleted_at?: string | null } | null> | null };


export const GetAllBlogsDocument = gql`
    query GetAllBlogs {
  getAllBlogs {
    id
    basic_info
    meta_data
    author_info
    section_data
    comment_data
    blog_title
    blog_slug
    category_id
    created_at
    updated_at
    deleted_at
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