#!/bin/bash

# ═══════════════════════════════════════════════════════════
# 🚀 GRACIE RETICULATION - Auto Update Server Script
# ═══════════════════════════════════════════════════════════
# This script:
# 1. Commits and pushes local changes to GitHub
# 2. Connects to server and pulls updates
# 3. Rebuilds and restarts the Docker container
# ═══════════════════════════════════════════════════════════

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SERVER_USER="root"
SERVER_IP="72.60.194.4"
PROJECT_PATH="/mnt/srv/docker/cont/gracie-reticulation"
CONTAINER_NAME="gracie-reticulation"

echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}   🚀 Gracie Reticulation - Server Update Script${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

# Step 1: Commit and push local changes
echo -e "${YELLOW}📦 Step 1: Committing local changes...${NC}"
git add .

# Check if there are changes to commit
if git diff-index --quiet HEAD --; then
    echo -e "${GREEN}✓ No changes to commit${NC}"
else
    read -p "Enter commit message (or press Enter for default): " COMMIT_MSG
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="Update: $(date '+%Y-%m-%d %H:%M')"
    fi
    
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✓ Changes committed${NC}"
fi

echo ""
echo -e "${YELLOW}📤 Step 2: Pushing to GitHub...${NC}"
git push origin main
echo -e "${GREEN}✓ Pushed to GitHub${NC}"

echo ""
echo -e "${YELLOW}🔗 Step 3: Connecting to server and updating...${NC}"

# Step 2: SSH to server and update
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
set -e

cd /mnt/srv/docker/cont/gracie-reticulation

echo ""
echo "📥 Pulling latest changes from GitHub..."
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
echo "✅ Server updated successfully!"
echo ""
echo "📊 Current status:"
docker-compose ps gracie-reticulation

ENDSSH

echo ""
echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}   ✅ Update Complete!${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}🌐 Check your website:${NC} http://your-domain.com"
echo -e "${BLUE}📋 View logs:${NC} ssh ${SERVER_USER}@${SERVER_IP} 'docker-compose logs -f ${CONTAINER_NAME}'"
echo ""
