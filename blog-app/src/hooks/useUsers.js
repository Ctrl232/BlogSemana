import { useQuery } from '@tanstack/react-query'
import { getUsers, getUserById } from '../api/users'

export const useUsers = ({ limit = 20 } = {}) =>
  useQuery({
    queryKey: ['users', limit],
    queryFn: () => getUsers({ limit }),
  })

export const useUserById = (id) =>
  useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  })