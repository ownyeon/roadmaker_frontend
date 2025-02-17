// src/03_kimjongbeom/config/config.ts

import AOS from 'aos';  // AOS 애니메이션 초기화
import dotenv from 'dotenv';  // .env 파일에서 환경 변수 로드

AOS.init();  // AOS 초기화
AOS.refresh();  // AOS 새로 고침

// .env 파일에서 JWT 관련 환경 변수를 로드
dotenv.config();

export const config = {
    // 서버 포트 설정
    server: {
        port: process.env.PORT,  // 환경 변수에서 서버 포트 가져오기
    },

    // JWT 관련 설정
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,  // JWT 비밀 키
        expirationTime: process.env.JWT_EXPIRATION_TIME,  // JWT 만료 시간 (초 단위)
        refreshSecretKey: process.env.JWT_REFRESH_SECRET_KEY,  // 리프레시 토큰 비밀 키
        refreshExpirationTime: process.env.JWT_REFRESH_EXPIRATION_TIME,  // 리프레시 토큰 만료 시간
    },

    // 데이터베이스 설정
    db: {
        host: process.env.DB_HOST,  // DB 호스트
        user: process.env.DB_USER,  // DB 사용자명
        password: process.env.DB_PASS,  // DB 비밀번호
        database: process.env.DB_NAME,  // DB 이름
    },
};
