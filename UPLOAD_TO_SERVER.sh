#!/bin/bash
# Upload and deploy Gracie Reticulation app to server

set -e

echo "═══════════════════════════════════════════════════════════"
echo "   📦 Deploying Gracie Reticulation to Server"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Get latest zip file
LATEST_ZIP=$(ls -t gracie-reticulation-app-*.zip 2>/dev/null | head -1)

if [ -z "$LATEST_ZIP" ]; then
    echo "❌ No zip file found!"
    exit 1
fi

echo "📦 File: $LATEST_ZIP"
echo "📊 Size: $(du -h "$LATEST_ZIP" | cut -f1)"
echo ""

# Upload to server
echo "🚀 Uploading to server..."
scp "$LATEST_ZIP" root@72.60.194.4:/root/

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Upload successful!"
    echo ""
    echo "═══════════════════════════════════════════════════════════"
    echo "   📝 Next Steps on Server"
    echo "═══════════════════════════════════════════════════════════"
    echo ""
    echo "1. SSH to server:"
    echo "   ssh root@72.60.194.4"
    echo ""
    echo "2. Unzip the file:"
    echo "   unzip -o $LATEST_ZIP -d /mnt/srv/docker/cont/gracie-reticulation/"
    echo ""
    echo "3. Set environment variables:"
    echo "   cd /mnt/srv/docker/cont/gracie-reticulation"
    echo "   nano .env.local"
    echo "   # Add:"
    echo "   GOOGLE_SHEETS_API_KEY=your_api_key"
    echo "   GOOGLE_SHEET_ID=19c3D0QSnXwTOBQ4gnSv3A53y14ip9ROiq_GfSk_LqgM"
    echo "   GOOGLE_SHEET_NAME=Website"
    echo "   TODOIST_WEBHOOK_URL=your_webhook_url"
    echo ""
    echo "4. Rebuild and restart:"
    echo "   docker-compose down"
    echo "   docker-compose up -d --build"
    echo ""
    echo "5. Check logs:"
    echo "   docker logs -f gracie_reticulation_app"
    echo ""
    echo "═══════════════════════════════════════════════════════════"
else
    echo ""
    echo "❌ Upload failed!"
    exit 1
fi
