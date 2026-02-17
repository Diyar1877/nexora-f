#!/bin/bash
# Frontend starten (Angular Dev Server mit API-Proxy)

set -e

echo "=== Nexora Frontend starten ==="

# Dependencies installieren falls nötig
if [ ! -d "node_modules" ]; then
  echo "NPM Packages installieren..."
  npm install
fi

echo ""
echo "Angular Dev Server starten (Port 4200)..."
echo "API-Anfragen werden zu http://localhost:8085 weitergeleitet"
echo ""

npx ng serve --host 0.0.0.0 --port 4200
