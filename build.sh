#!/bin/bash

# NOTE:This file should only be used for cloud flare workers not local builds

if [ "$CF_PAGES_BRANCH" == "production" ]; then
  bun run build:production

elif [ "$CF_PAGES_BRANCH" == "staging" ]; then
  bun run build:staging

else
  # Else run the dev script
  bun run build:sandbox
fi