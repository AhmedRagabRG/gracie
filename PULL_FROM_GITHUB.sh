#!/bin/bash

# ═══════════════════════════════════════════════════════════
# 📥 GRACIE RETICULATION - Pull from GitHub on Server
# ═══════════════════════════════════════════════════════════
# This script only pulls changes from GitHub (no local commit)
# Use this when you pushed changes from another machine
# ═══════════════════════════════════════════════════════════

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

SERVER_USER="root"
SERVER_IP="72.60.194.4"

echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}   📥 Pulling Updates from GitHub on Server${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
set -e

cd /mnt/srv/docker/cont/gracie-reticulation

echo "📥 Pulling latest changes..."
git pull origin main

echo ""
echo "📦 Installing dependencies..."
npm install --production

echo ""
echo "🔨 Building project..."
npm run build

echo ""
echo "🔄 Restarting Docker container..."
docker-compose restart gracie-reticulation

echo ""
echo "✅ Update complete!"
docker-compose ps gracie-reticulation

ENDSSH

echo ""
echo -e "${GREEN}✅ Server updated successfully!${NC}"
echo ""
