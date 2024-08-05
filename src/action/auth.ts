'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import ApiResponse from '@/lib/ApiResponse'
import ApiError from '@/lib/ApiError'
import { z } from 'zod'
import { LoginSchema } from '@/schema/login.schema'
import { REDIRECT_AUTHENTICATED, REDIRECT_NOT_AUTHENTICATED } from '../../app.config'

export async function login(values: z.infer<typeof LoginSchema>, callback?: string | null) {
  const validateFields = LoginSchema.safeParse(values)
  if (!validateFields.success) return ApiError(400, validateFields.error.message)

  const { email, password } = validateFields.data

  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithPassword({email, password})

  if (error) {
    return ApiError(400, error.message || "Login Failed",)
  }

  redirect(callback || REDIRECT_AUTHENTICATED)
}


export async function logout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect(REDIRECT_NOT_AUTHENTICATED)
}

export async function getUser() {
  const supabase = createClient()
  return await supabase.auth.getUser()
}

export async function getSession() {
  const supabase = createClient()
  return await supabase.auth.getSession()
}