
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

export default function PageLoader({open=false}) {
  return (
    <Dialog open={open}>
      <DialogContent className="hidden"/>
    </Dialog>
  )
}
