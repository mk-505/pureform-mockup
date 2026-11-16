import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BlackFridayPopup = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        overlayClassName="bg-black/25"
        className="max-h-[calc(100dvh-2rem)] max-w-md overflow-y-auto rounded-2xl border border-sage/20 bg-cream p-0 shadow-2xl"
      >
        <div className="bg-sage px-8 py-7 text-center text-cream sm:px-10">
          <p className="font-body text-[0.65rem] font-medium uppercase tracking-[0.3em] text-cream/75">
            A limited-time offer
          </p>
          <DialogHeader className="mt-3 space-y-0">
            <DialogTitle className="font-display text-4xl font-light leading-tight sm:text-5xl">
              Black Friday
            </DialogTitle>
          </DialogHeader>
          <div className="mx-auto mt-4 h-px w-12 bg-cream/50" />
        </div>

        <div className="px-8 pb-8 pt-7 text-center sm:px-10 sm:pb-10">
          <p className="font-display text-2xl font-medium text-foreground sm:text-3xl">
            Combined 5 Class Pack
          </p>
          <DialogDescription className="mx-auto mt-3 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
            Make room for more movement. Your Black Friday class pack is ready to book.
          </DialogDescription>

          <Button
            asChild
            className="mt-7 h-auto w-full rounded-full bg-sage px-6 py-3.5 font-body text-sm font-medium tracking-wide text-cream hover:bg-sage/90"
          >
            <a
              href="https://momence.com/Pureform-Movement/membership/Black-Friday-Combined-5-Class-Pack-/968453"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book the 5-class pack
            </a>
          </Button>

          <DialogClose className="mt-4 rounded-sm font-body text-xs tracking-wide text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Maybe later
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlackFridayPopup;
