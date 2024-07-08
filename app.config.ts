import {
  DollarSign,
  Home,
  HomeIcon,
  KeyRound,
  LucideIcon,
  LucideProps,
  Mail,
  Settings,
  User,
  Zap,
} from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export interface AppConfig {
  logo?: string
  name: string
}

export const appConfig: AppConfig = {
  logo: undefined,
  name: "NXT",
}

export const apiPrefix: string = "/api"

export const REDIRECT_AUTHENTICATED: string = "/dashboard"

export const REDIRECT_NOT_AUTHENTICATED: string = "/"

export const publicRoutes:RouteTypes = {
  contact: {
    name: 'Contact',
    href: "/contact",
    icon: Mail,
  },
  pricing: {
    name: 'Pricing',
    href: "/pricing",
    icon: KeyRound,
  },
}

export const protectedRoutes: RouteTypes = {
  dashboard: {
    name: 'Dashboard',
    href: "/dashboard",
    icon: HomeIcon,
  },
  profile: {
    name: 'Profile',
    href: "/profile",
    icon: KeyRound,
  },
  setting: {
    name: 'Setting',
    href: "/setting",
    icon: Settings,
  },
}

interface RouteTypes {
  [key: string]: {
    name: string,
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  }
}