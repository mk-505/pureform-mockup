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

const offers = [
  { name: "Black Friday 60 Day Unlimited Membership", price: "$299 for 60 days", href: "https://momence.com/m/972253" },
  { name: "Black Friday Combined 5 Class Pack", price: "$38 for 2 credits", href: "https://momence.com/m/978306" },
  { name: "Black Friday Combined 5 Class Pack", price: "$125 for 5 credits", href: "https://momence.com/m/968453" },
];

const BlackFridayPopup = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        overlayClassName="bg-black/25"
        className="max-h-[calc(100dvh-2rem)] max-w-md overflow-y-auto rounded-2xl border border-sage/20 bg-cream p-0 shadow-2xl"
      >
        <div className="bg-sage px-8 py-7 text-center text-cream sm:px-10">
          <DialogHeader className="mt-3 space-y-0">
            <DialogTitle className="font-display text-4xl font-light leading-tight sm:text-5xl">
              Black Friday
            </DialogTitle>
          </DialogHeader>
          <div className="mx-auto mt-4 h-px w-12 bg-cream/50" />
        </div>

        <div className="px-8 pb-8 pt-7 text-center sm:px-10 sm:pb-10">
          <DialogDescription className="sr-only">Black Friday memberships and class pack offers</DialogDescription>
          <div className="space-y-4">
            {offers.map((offer) => (
              <div key={offer.href} className="rounded-xl border border-sage/20 p-4">
                <p className="font-display text-xl font-medium text-foreground">{offer.name}</p>
                <p className="mt-1 font-body text-sm text-muted-foreground">{offer.price}</p>
                <Button asChild className="mt-3 h-auto w-full rounded-full bg-sage px-6 py-3 font-body text-sm font-medium tracking-wide text-cream hover:bg-sage/90">
                  <a href={offer.href} target="_blank" rel="noopener noreferrer">Shop offer</a>
                </Button>
              </div>
            ))}
          </div>

          <DialogClose className="mt-4 rounded-sm font-body text-xs tracking-wide text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Maybe later
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlackFridayPopup;
