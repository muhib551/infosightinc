import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  Dialog,
  DialogHeading,
  Combobox,
  ComboboxItem,
  ComboboxPopover,
} from "@ariakit/react";

function AccessibilityComp() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeading>Ariakit</DialogHeading>
        <p>Welcome to Ariakit!</p>
      </Dialog>
    </>
  );
}

export default AccessibilityComp;
