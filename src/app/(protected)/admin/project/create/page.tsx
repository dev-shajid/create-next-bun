'use client'

import { createProject, uploadImage } from '@/action/project'
import { Title } from '@/components/home/Basic'
import Section from '@/components/Section'
import TagInputField from '@/components/TagInputField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import toast from 'react-hot-toast'
import PageLoader from '@/components/PageLoader'


export default function page() {

    const [tags, setTags] = useState<string[]>([])
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    const formik = useFormik({
        initialValues: { title: '', github: '', live: '', image: null },
        validate: async (values) => {
            // setErrors(await validateRegForm(values))
        },
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: async (values) => {
            if (!Object.keys(errors).length) {
                if (!values.image) return alert('Please upload an image')
                let formData = new FormData()
                formData.append('title', values.title)
                formData.append('github', values.github)
                formData.append('live', values.live)
                formData.append('image', values.image)
                formData.append('tags', JSON.stringify(tags))
                setIsLoading(true)
                toast.promise(
                    createProject(formData)
                        .then(res => {
                            formik.resetForm()
                            setTags([])
                        })
                        .catch(err => {
                            console.log(err)
                        })
                        .finally(() => {
                            setIsLoading(false)
                        })
                    , {
                        loading: 'Creating Project...',
                        success: 'Project Created Successfully',
                        error: 'Failed to create project'
                    })
            }
        }
    })



    return (
        <Section>
            <PageLoader open={isLoading}/>
            <Title>Create New Project</Title>
            <Card className='p-4 my-4'>
                <form className='space-y-4' onSubmit={formik.handleSubmit}>
                    <Input
                        placeholder="Project Title"
                        required
                        {...formik.getFieldProps('title')}
                    />
                    <Input
                        placeholder="Github Repository"
                        required
                        {...formik.getFieldProps('github')}
                    />
                    <Input
                        placeholder="Live Link"
                        required
                        {...formik.getFieldProps('live')}
                    />
                    <Input
                        type="file"
                        name="image"
                        required
                        onChange={(e) => formik.setFieldValue('image', e?.target?.files?.[0] as File)}
                    />
                    <TagInputField
                        value={tags}
                        onChange={setTags}
                        placeholder="Enter values, comma separated..."
                        className=""

                    />
                    <Button type='submit' className='w-full'>Submit</Button>
                </form>
            </Card>
        </Section>
    )
}
