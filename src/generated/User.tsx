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

export type Admin = {
  __typename?: 'Admin';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
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
  adminRegister?: Maybe<Admin>;
  createBlog?: Maybe<Blog>;
  createCategory?: Maybe<Category>;
  deleteBlog?: Maybe<Scalars['Boolean']['output']>;
  deleteCategory?: Maybe<Scalars['Boolean']['output']>;
  updateBlog?: Maybe<Blog>;
  updateCategory?: Maybe<Category>;
};


export type MutationAdminRegisterArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
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
  gettoken?: Maybe<Scalars['String']['output']>;
};


export type QueryGetBlogBySlugArgs = {
  blog_slug: Scalars['String']['input'];
};


export type QueryGetBlogsWithCategoryArgs = {
  category_id: Scalars['Int']['input'];
};


export type QueryGettokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type GettokenQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type GettokenQuery = { __typename?: 'Query', gettoken?: string | null };


export const GettokenDocument = gql`
    query Gettoken($email: String!, $password: String!) {
  gettoken(email: $email, password: $password)
}
    `;

/**
 * __useGettokenQuery__
 *
 * To run a query within a React component, call `useGettokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGettokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGettokenQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGettokenQuery(baseOptions: Apollo.QueryHookOptions<GettokenQuery, GettokenQueryVariables> & ({ variables: GettokenQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GettokenQuery, GettokenQueryVariables>(GettokenDocument, options);
      }
export function useGettokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GettokenQuery, GettokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GettokenQuery, GettokenQueryVariables>(GettokenDocument, options);
        }
export function useGettokenSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GettokenQuery, GettokenQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GettokenQuery, GettokenQueryVariables>(GettokenDocument, options);
        }
export type GettokenQueryHookResult = ReturnType<typeof useGettokenQuery>;
export type GettokenLazyQueryHookResult = ReturnType<typeof useGettokenLazyQuery>;
export type GettokenSuspenseQueryHookResult = ReturnType<typeof useGettokenSuspenseQuery>;
export type GettokenQueryResult = Apollo.QueryResult<GettokenQuery, GettokenQueryVariables>;