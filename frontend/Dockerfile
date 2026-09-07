FROM node:20-alpine

WORKDIR /app

# 의존성 설치 (package.json이 변경될 때만 재빌드)
COPY package.json package-lock.json* ./
RUN npm ci

# 소스 복사 (개발 시에는 volume mount로 덮어씀)
COPY . .

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "dev"]
