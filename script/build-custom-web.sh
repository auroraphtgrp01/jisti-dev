#!/bin/bash

set -e

echo "🚀 Building custom Jitsi Meet web image..."

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

TAG="latest"
JITSI_MEET_DIR="src"
DOCKER_DIR="."
TEMP_BUILD_DIR="/tmp/jitsi-custom-build"

rm -rf "$TEMP_BUILD_DIR"
mkdir -p "$TEMP_BUILD_DIR"

echo "📦 Copying built assets..."
cp -r "$JITSI_MEET_DIR/libs" "$TEMP_BUILD_DIR/"
cp -r "$JITSI_MEET_DIR/css" "$TEMP_BUILD_DIR/"
cp -r "$JITSI_MEET_DIR/images" "$TEMP_BUILD_DIR/"
cp -r "$JITSI_MEET_DIR/sounds" "$TEMP_BUILD_DIR/"
cp -r "$JITSI_MEET_DIR/lang" "$TEMP_BUILD_DIR/"
cp -r "$JITSI_MEET_DIR/static" "$TEMP_BUILD_DIR/"
cp -r "$JITSI_MEET_DIR/fonts" "$TEMP_BUILD_DIR/"

# Copy HTML và JS files
cp "$JITSI_MEET_DIR"/*.html "$TEMP_BUILD_DIR/" 2>/dev/null || true
cp "$JITSI_MEET_DIR"/*.js "$TEMP_BUILD_DIR/" 2>/dev/null || true

# Copy Dockerfile
cp "$DOCKER_DIR/web/Dockerfile.custom" "$TEMP_BUILD_DIR/Dockerfile"

echo "🏗️  Building Docker image for Linux AMD64..."
cd "$TEMP_BUILD_DIR"
docker build --platform linux/amd64 -t auroraphtgrp/jitsi-react:$TAG .

echo "✅ Custom image built successfully!"
echo "📝 Image name: auroraphtgrp/jitsi-react:$TAG"

echo "🚀 Pushing image to Docker Hub..."
docker push auroraphtgrp/jitsi-react:$TAG

echo "✅ Image pushed successfully!"
echo ""
echo "Next steps:"
echo "1. Update docker-compose.yml to use auroraphtgrp/jitsi-react:$TAG"
echo "2. Run: docker-compose up -d"

# Cleanup
rm -rf "$TEMP_BUILD_DIR"
