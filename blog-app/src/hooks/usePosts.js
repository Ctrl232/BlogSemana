import { useQuery } from '@tanstack/react-query'
import { getPosts, getPostById, getPostsByUser, getPostsByTag, getPostComments, getTags } from '../api/posts'

export const usePosts = ({ userId, tag, page = 1 } = {}) => {
  const limit = 9
  const skip = (page - 1) * limit

  return useQuery({
    queryKey: ['posts', { userId, tag, page }],
    queryFn: () => {
      if (userId) return getPostsByUser(userId)
      if (tag) return getPostsByTag(tag)
      return getPosts({ limit, skip })
    },
  })
}

export const usePostDetail = (id) =>
  useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  })

export const usePostComments = (postId) =>
  useQuery({
    queryKey: ['comments', postId],
    queryFn: () => getPostComments(postId),
    enabled: !!postId,
  })

export const useTags = () =>
  useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  })