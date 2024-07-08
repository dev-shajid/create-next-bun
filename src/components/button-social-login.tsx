"use client"

import { useCallback, useState } from "react"
import { FaGithub } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { IconLoadingSpinner } from "@/components/icon-loading-spinner"

export function ButtonSocialLogin({
  provider,
  className,
  children,
  size = "default",
}: React.ComponentProps<"button"> & {
  size?: ButtonProps["size"]
  provider: string // | SocialProvider
}) {
  const [loading, setLoading] = useState(false)

  const iconSizeMap = {
    xl: 28,
    lg: 24,
    md: 20,
    default: 18,
    link: 18,
    sm: 16,
    xs: 14,
    icon: 20,
    "icon-sm": 14,
  }

  const handleSignIn = useCallback(async (provider: string /* | SocialProvider */) => {
    setLoading(true)
    try {
      // await signIn(provider, {
      //   callbackUrl: REDIRECT_AUTHENTICATED,
      // })
    } finally {
      setLoading(false)
    }
  }, [])

  const GetProviderIcon = (
    {
      provider,
      ...rest
    }: {
      provider: string // | SocialProvider 
      size?: number
    } & React.ComponentProps<"svg">
  ) => {
    switch (provider) {
      case "google":
        return <FcGoogle {...rest} />
      case "github":
        return <FaGithub {...rest} />
      default:
        return null
    }
  }

  return (
    <Button
      className={cn("font-semibold w-full", className, children && "flex space-x-2")}
      variant='outline'
      // onClick={() => handleSignIn(provider)}
      size={size}
      aria-busy={loading}
      disabled={loading}
    >
      {loading ? (
        <IconLoadingSpinner size="xs" />
      ) : (
        <GetProviderIcon
          provider={provider}
          size={size ? iconSizeMap[size] : iconSizeMap.default}
        />
      )}
      <span>{children}</span>
    </Button>
  )
}
