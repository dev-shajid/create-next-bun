
import Link from "next/link"
import { publicRoutes } from "../../app.config"

const publicNavItems = [publicRoutes.pricing, publicRoutes.contact]

export default function PublicNavComponent() {
  return (
    publicNavItems.map((item, i) => (
      <Link
        key={i}
        href={item.href}
        className="hover:underline"
      >
        {item.name}
      </Link>
    ))
  )
}