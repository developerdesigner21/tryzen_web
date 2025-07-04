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

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', getAllBlogs?: Array<{ __typename?: 'Blog', id: number, basic_info?: string | null, meta_data?: string | null, author_info?: string | null, section_data?: string | null, comment_data?: string | null, blog_title?: string | null, blog_slug?: string | null, category_id?: number | null, created_at?: string | null, updated_at?: string | null, deleted_at?: string | null } | null> | null };

export type GetBlogBySlugQueryVariables = Exact<{
  blog_slug: Scalars['String']['input'];
}>;


export type GetBlogBySlugQuery = { __typename?: 'Query', getBlogBySlug?: { __typename?: 'Blog', id: number, basic_info?: string | null, meta_data?: string | null, author_info?: string | null, section_data?: string | null, comment_data?: string | null, blog_title?: string | null, blog_slug?: string | null, category_id?: number | null, created_at?: string | null, updated_at?: string | null, deleted_at?: string | null } | null };

export type GetBlogsWithCategoryQueryVariables = Exact<{
  category_id: Scalars['Int']['input'];
}>;


export type GetBlogsWithCategoryQuery = { __typename?: 'Query', getBlogsWithCategory?: Array<{ __typename?: 'Blog', id: number, basic_info?: string | null, meta_data?: string | null, author_info?: string | null, section_data?: string | null, comment_data?: string | null, blog_title?: string | null, blog_slug?: string | null, category_id?: number | null, created_at?: string | null, updated_at?: string | null, deleted_at?: string | null } | null> | null };

export type CreateBlogMutationVariables = Exact<{
  basic_info: Scalars['String']['input'];
  meta_data: Scalars['String']['input'];
  author_info: Scalars['String']['input'];
  section_data: Scalars['String']['input'];
  blog_title: Scalars['String']['input'];
  blog_slug: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
  comment_data: Scalars['String']['input'];
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', createBlog?: { __typename?: 'Blog', id: number, basic_info?: string | null, meta_data?: string | null, author_info?: string | null, section_data?: string | null, blog_title?: string | null, blog_slug?: string | null, category_id?: number | null, created_at?: string | null, updated_at?: string | null, deleted_at?: string | null } | null };

export type UpdateBlogMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  basic_info: Scalars['String']['input'];
  meta_data: Scalars['String']['input'];
  author_info: Scalars['String']['input'];
  section_data: Scalars['String']['input'];
  blog_title: Scalars['String']['input'];
  blog_slug: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
  comment_data: Scalars['String']['input'];
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog?: { __typename?: 'Blog', id: number, basic_info?: string | null, meta_data?: string | null, author_info?: string | null, section_data?: string | null, comment_data?: string | null, blog_title?: string | null, blog_slug?: string | null, category_id?: number | null } | null };

export type DeleteBlogMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteBlogMutation = { __typename?: 'Mutation', deleteBlog?: boolean | null };


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
export const GetBlogBySlugDocument = gql`
    query GetBlogBySlug($blog_slug: String!) {
  getBlogBySlug(blog_slug: $blog_slug) {
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
 * __useGetBlogBySlugQuery__
 *
 * To run a query within a React component, call `useGetBlogBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogBySlugQuery({
 *   variables: {
 *      blog_slug: // value for 'blog_slug'
 *   },
 * });
 */
export function useGetBlogBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables> & ({ variables: GetBlogBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
      }
export function useGetBlogBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
        }
export function useGetBlogBySlugSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
        }
export type GetBlogBySlugQueryHookResult = ReturnType<typeof useGetBlogBySlugQuery>;
export type GetBlogBySlugLazyQueryHookResult = ReturnType<typeof useGetBlogBySlugLazyQuery>;
export type GetBlogBySlugSuspenseQueryHookResult = ReturnType<typeof useGetBlogBySlugSuspenseQuery>;
export type GetBlogBySlugQueryResult = Apollo.QueryResult<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>;
export const GetBlogsWithCategoryDocument = gql`
    query GetBlogsWithCategory($category_id: Int!) {
  getBlogsWithCategory(category_id: $category_id) {
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
 * __useGetBlogsWithCategoryQuery__
 *
 * To run a query within a React component, call `useGetBlogsWithCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsWithCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsWithCategoryQuery({
 *   variables: {
 *      category_id: // value for 'category_id'
 *   },
 * });
 */
export function useGetBlogsWithCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetBlogsWithCategoryQuery, GetBlogsWithCategoryQueryVariables> & ({ variables: GetBlogsWithCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogsWithCategoryQuery, GetBlogsWithCategoryQueryVariables>(GetBlogsWithCategoryDocument, options);
      }
export function useGetBlogsWithCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogsWithCategoryQuery, GetBlogsWithCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogsWithCategoryQuery, GetBlogsWithCategoryQueryVariables>(GetBlogsWithCategoryDocument, options);
        }
export function useGetBlogsWithCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBlogsWithCategoryQuery, GetBlogsWithCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogsWithCategoryQuery, GetBlogsWithCategoryQueryVariables>(GetBlogsWithCategoryDocument, options);
        }
export type GetBlogsWithCategoryQueryHookResult = ReturnType<typeof useGetBlogsWithCategoryQuery>;
export type GetBlogsWithCategoryLazyQueryHookResult = ReturnType<typeof useGetBlogsWithCategoryLazyQuery>;
export type GetBlogsWithCategorySuspenseQueryHookResult = ReturnType<typeof useGetBlogsWithCategorySuspenseQuery>;
export type GetBlogsWithCategoryQueryResult = Apollo.QueryResult<GetBlogsWithCategoryQuery, GetBlogsWithCategoryQueryVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($basic_info: String!, $meta_data: String!, $author_info: String!, $section_data: String!, $blog_title: String!, $blog_slug: String!, $category_id: Int!, $comment_data: String!) {
  createBlog(
    basic_info: $basic_info
    meta_data: $meta_data
    author_info: $author_info
    section_data: $section_data
    blog_title: $blog_title
    blog_slug: $blog_slug
    category_id: $category_id
    comment_data: $comment_data
  ) {
    id
    basic_info
    meta_data
    author_info
    section_data
    blog_title
    blog_slug
    category_id
    created_at
    updated_at
    deleted_at
  }
}
    `;
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      basic_info: // value for 'basic_info'
 *      meta_data: // value for 'meta_data'
 *      author_info: // value for 'author_info'
 *      section_data: // value for 'section_data'
 *      blog_title: // value for 'blog_title'
 *      blog_slug: // value for 'blog_slug'
 *      category_id: // value for 'category_id'
 *      comment_data: // value for 'comment_data'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation UpdateBlog($id: Int!, $basic_info: String!, $meta_data: String!, $author_info: String!, $section_data: String!, $blog_title: String!, $blog_slug: String!, $category_id: Int!, $comment_data: String!) {
  updateBlog(
    id: $id
    basic_info: $basic_info
    meta_data: $meta_data
    author_info: $author_info
    section_data: $section_data
    blog_title: $blog_title
    blog_slug: $blog_slug
    category_id: $category_id
    comment_data: $comment_data
  ) {
    id
    basic_info
    meta_data
    author_info
    section_data
    comment_data
    blog_title
    blog_slug
    category_id
  }
}
    `;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *      basic_info: // value for 'basic_info'
 *      meta_data: // value for 'meta_data'
 *      author_info: // value for 'author_info'
 *      section_data: // value for 'section_data'
 *      blog_title: // value for 'blog_title'
 *      blog_slug: // value for 'blog_slug'
 *      category_id: // value for 'category_id'
 *      comment_data: // value for 'comment_data'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const DeleteBlogDocument = gql`
    mutation DeleteBlog($id: Int!) {
  deleteBlog(id: $id)
}
    `;
export type DeleteBlogMutationFn = Apollo.MutationFunction<DeleteBlogMutation, DeleteBlogMutationVariables>;

/**
 * __useDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlogMutation, { data, loading, error }] = useDeleteBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlogMutation, DeleteBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlogMutation, DeleteBlogMutationVariables>(DeleteBlogDocument, options);
      }
export type DeleteBlogMutationHookResult = ReturnType<typeof useDeleteBlogMutation>;
export type DeleteBlogMutationResult = Apollo.MutationResult<DeleteBlogMutation>;
export type DeleteBlogMutationOptions = Apollo.BaseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables>;