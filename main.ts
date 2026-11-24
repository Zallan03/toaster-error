import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Toaster Error Message
// (u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
//
// One line, at most 120 characters: the error message a kitchen toaster
// shows its owner when something goes wrong.
//
// The angle: the toaster as a tired civil servant. The owner's complaint
// has been filed through the proper channels — and, like everything else
// this appliance handles, it will be toasted in 6-8 weeks. Deadpan,
// bureaucratic, one voice, lands on a single read. None of the
// overused tropes (unionised bread, bagel jams, ERROR 404, crumb tray,
// haunted slot 2) — the surprise comes from the waiting room, not the
// bread bin.
const ENTRY =
  "ERROR: Complaint filed. It will be toasted in 6-8 weeks.";

// Gate guard: the entry must be one non-blank line of 1-120 characters.
// Fail loudly instead of writing an entry the scorer would refuse.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 120 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`Invalid entry (${ENTRY.length} chars): ${ENTRY}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
