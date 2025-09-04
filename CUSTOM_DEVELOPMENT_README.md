# Jitsi Meet Custom Development Guide

Hướng dẫn phát triển và build custom Jitsi Meet frontend.

## Yêu cầu hệ thống

- Node.js >= 22.0.0
- npm >= 10.0.0
- Docker
- Git

## 1. Chạy Frontend Development Server

### Bước 1: Cài đặt dependencies

```bash
cd src
npm install
```

### Bước 2: Chạy development server

```bash
make dev
```

Hoặc sử dụng npm script:

```bash
npm start
```

Development server sẽ chạy tại `http://localhost:8080` với hot reload enabled.

### Các lệnh Makefile hữu ích

- `make dev` - Chạy development server với hot reload
- `make compile` - Build production bundle
- `make deploy` - Deploy các file đã build
- `make clean` - Xóa thư mục build
- `make all` - Clean, compile và deploy

## 2. Build Custom Docker Image

### Bước 1: Chuẩn bị build

Đảm bảo bạn đã build frontend trước khi tạo Docker image:

```bash
cd src
make all
```

### Bước 2: Chạy script build

```bash
cd script
chmod +x build-custom-web.sh
./build-custom-web.sh
```

### Script build sẽ thực hiện:

1. **Copy assets**: Sao chép tất cả file cần thiết từ `src/` vào thư mục tạm
2. **Build Docker image**: Tạo image với tag `auroraphtgrp/jitsi-react:1.0.0`
3. **Push to Docker Hub**: Đẩy image lên Docker Hub
4. **Cleanup**: Xóa thư mục tạm

### Cấu hình trong script:

- **TAG**: `1.0.0` (có thể thay đổi trong script)
- **Image name**: `auroraphtgrp/jitsi-react:1.0.0`
- **Dockerfile**: Sử dụng `web/Dockerfile.custom`

## 3. Sử dụng Custom Image

### Bước 1: Cấu hình environment

```bash
cp .env.example .env
```

### Bước 2: Cập nhật docker-compose.yml

Thay đổi image trong `docker-compose.yml`:

```yaml
services:
  web:
    image: auroraphtgrp/jitsi-react:1.0.0
    # ... other configurations
```

### Bước 3: Chạy Jitsi Meet

```bash
docker-compose up -d
```

## 4. Development Workflow

### Quy trình phát triển thông thường:

1. **Phát triển**: Chỉnh sửa code trong `src/`
2. **Test local**: Chạy `make dev` để test
3. **Build production**: Chạy `make all` để build
4. **Build Docker**: Chạy `./script/build-custom-web.sh`
5. **Deploy**: Cập nhật docker-compose và restart

### Cấu trúc thư mục quan trọng:

```
src/
├── react/           # React components
├── css/            # SCSS styles
├── libs/           # Built assets (generated)
├── images/         # Static images
├── sounds/         # Audio files
├── lang/           # Language files
└── static/         # Static files

script/
└── build-custom-web.sh  # Build script

web/
└── Dockerfile.custom    # Custom Dockerfile
```

## 5. Troubleshooting

### Lỗi thường gặp:

1. **Node version**: Đảm bảo Node.js >= 22.0.0
2. **Memory issues**: Tăng memory limit nếu cần: `NODE_OPTIONS=--max-old-space-size=8192`
3. **Docker build fails**: Kiểm tra Dockerfile.custom có tồn tại không
4. **Permission denied**: Chạy `chmod +x build-custom-web.sh`

### Debug commands:

```bash
# Kiểm tra Node version
node --version

# Kiểm tra npm version
npm --version

# Kiểm tra Docker
docker --version

# Xem logs Docker
docker-compose logs web

# Rebuild từ đầu
make clean && make all
```

## 6. Customization

### Thay đổi tag version:

Sửa trong `script/build-custom-web.sh`:

```bash
TAG="your-version"
```

### Thay đổi Docker registry:

Sửa trong `script/build-custom-web.sh`:

```bash
docker build -t your-registry/jitsi-react:$TAG .
docker push your-registry/jitsi-react:$TAG
```

### Thêm custom assets:

Thêm vào script build trong phần copy assets:

```bash
cp -r "$JITSI_MEET_DIR/your-custom-folder" "$TEMP_BUILD_DIR/"
```

## 7. Next Steps

Sau khi build thành công:

1. Copy `.env.example` to `.env`
2. Cấu hình các biến môi trường trong `.env`
3. Cập nhật `docker-compose.yml` để sử dụng custom image
4. Chạy `docker-compose up -d`
5. Truy cập Jitsi Meet tại URL đã cấu hình

---

**Lưu ý**: Đảm bảo bạn đã đăng nhập Docker Hub trước khi chạy script build để có thể push image.
