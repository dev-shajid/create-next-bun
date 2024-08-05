"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardTitle } from "./ui/card"
import { login } from "@/action/auth"
import { useState, useTransition } from "react"
import { IconLoadingSpinner } from "./IconLoadingSpinner"
import FormToast from "./FormToast"
import ApiError, { ApiErrorType } from "@/lib/ApiError"
import { ApiResponseType } from "@/lib/ApiResponse"
import { LoginSchema } from "@/schema/login.schema"

export function FormLogin({callback}:{callback?:string | null}) {
  const [isPending, setTransition] = useTransition()
  const [data, setData] = useState<ApiErrorType | ApiResponseType | undefined>(undefined)

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setTransition(() => {
      login(values, callback)
        .then((res) => {
          setData(res)
          console.log({ res })
        })
        .catch((err) => {
          setData(ApiError(400, "Something went wrong!",))
          console.log({ LoginError: err })
        })
    })
  }

  return (
    <Card className="max-w-[400px] w-full px-4 py-8 space-y-6">
      <CardTitle className="text-center">Login</CardTitle>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='john.doe@example.com'
                      type='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder='******'
                      type='password'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {
            data && <FormToast
              success={data?.success ?? true}
              message={data?.message}
            />
          }

          <Button disabled={isPending} type='submit' className='w-full'>
            {isPending ? <IconLoadingSpinner /> : "Login"}
          </Button>

        </form>
      </Form>
    </Card>
  )
}
