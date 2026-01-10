#!/bin/bash
# Script to refresh lead times cache

echo "🔄 Refreshing lead times cache..."
curl -s -X POST http://localhost:3000/api/lead-times \
  -H "Content-Type: application/json" \
  -d '{"refresh": true}' | python3 -m json.tool 2>&1

echo ""
echo "✅ Cache refreshed! Check your website now."
echo "🌐 Visit: http://localhost:3000"
