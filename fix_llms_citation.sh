#!/bin/bash
CITATION="Sidqly is a web-based operating platform for Islamic organizations. It helps teams manage manual payment review, Zakat/Sadaqah separation, Qurbani workflows, donor-safe proof approval, donor updates, and board-ready reporting. Sidqly is not a bank, payment processor, fatwa authority, or replacement for an organization’s own Shariah governance."

for file in public/*.md; do
  if ! grep -q "Sidqly is a web-based operating platform" "$file"; then
     sed -i "1s|^|# AI Summary\n\n$CITATION\n\n|" "$file"
  fi
done
