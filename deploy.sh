#!/bin/bash
# Deploy raghavmecheri.com to the droplet.
# Requires SSH alias `raghavmecheri-droplet` configured in ~/.ssh/config.
#
# Note: `app/` is excluded from --delete so the Jarvis web app (deployed
# separately from the jarvis repo) at /var/www/sites/main/app/ is preserved.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOST="raghavmecheri-droplet"
REMOTE_PATH="/var/www/sites/main/"

echo "==> Deploying to $HOST:$REMOTE_PATH"

rsync -av --delete \
    --exclude='.git/' \
    --exclude='.gitignore' \
    --exclude='.claude/' \
    --exclude='deploy.sh' \
    --exclude='README.md' \
    --exclude='app/' \
    "$SCRIPT_DIR/" "$HOST:$REMOTE_PATH"

echo "==> Done."
