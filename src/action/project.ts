'use server'

import { createClient } from '@/utils/supabase/server'


export async function getProjects() {
  const supabase = createClient()
  let {data, error} = await supabase.from('project').select('*')
  if(data) data = data.map(e=>({...e, tags: JSON.parse(e.tags) })).sort((a,b)=>a.order-b.order)
  return {data, error}
}

export async function getProject(id: string) {
  const supabase = createClient()
  let {data, error} = await supabase.from('project').select('*').eq('id', id)
  if(data) data = data.map((e)=>({...e, tags: JSON.parse(e.tags) }))[0]
  return {data, error}
}

export async function createProject(formData: FormData) {
  const title = formData.get('title') as string
  const github = formData.get('github') as string
  const live = formData.get('live') as string
  const tags = JSON.parse(formData.get('tags') as string)

  const image = await uploadImage(formData.get('image') as File)
  const supabase = createClient()
  return await supabase.from('project').insert([{ title, github, live, image, tags: JSON.stringify(tags) }]).select()
}

export async function updateProjectOrder(id:string, order:number) {
  const supabase = createClient()
  console.log({id, order})
  return await supabase.from('project').update({ order }).eq('id', id).select()
}

// image storage
export async function uploadImage(file: File) {
  const supabase = createClient()
  const { data, error } = await supabase.storage.from('images').upload(file.name+"_"+Date.now(), file)
  console.log({ data, error })
  if (error) throw error
  return `https://qiiverkazmuecwvyhibc.supabase.co/storage/v1/object/public/${data.fullPath}`
}