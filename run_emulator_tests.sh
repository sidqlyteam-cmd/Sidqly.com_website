#!/bin/bash
npx firebase-tools emulators:start --only firestore --project sidqly-prod-test &
EMULATOR_PID=$!
sleep 15 # Wait longer for emulator to download and start
npx jest
kill $EMULATOR_PID
