import ProtectedNavContents from "./ProtectedNavContents";


export default function ProtectedNav() {
  return (
    <>
      <div className="sticky top-0 md:flex hidden h-screen w-full max-w-[280px] flex-col gap-2 border-r bg-background">
        <ProtectedNavContents />
      </div>
    </>
  )
}

