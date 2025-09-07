# HASIA Website Setup History

## 프로젝트 초기 설정
- Next.js 14 with App Router
- TypeScript 설정
- Tailwind CSS 설정
- 폰트 설정: Inter (영문) + Pretendard (한글)

## 색상 테마
- Primary: #00FF88 (밝은 민트그린)
- Primary Light: #66FFB2
- Accent: #FF0088
- Background: Black (#000000)
- Gray-950: #030712 (섹션 구분용)

## 구현된 컴포넌트

### 1. Header (`/components/Header.tsx`)
- 고정 헤더 (fixed position)
- ASCII 아트 로고
- 네비게이션: About, Services, Contact
- 언어 전환 버튼 (EN/KO)
- 모바일 반응형 햄버거 메뉴

### 2. HeroSection (`/components/HeroSection.tsx`)
- 메인 타이틀: "FROM IDEA TO REALITY"
- 서브타이틀: "제한 없는 창조, 무한한 가능성"
- 통계: 10x 더 빠른 실행, ∞ AI 에이전트, 24/7 끊임없는 진화
- 배경: 애니메이션 코드 패턴 + 그라데이션 효과
- 반응형 텍스트 크기 (text-5xl ~ text-9xl)
- font-black (900) 굵기 적용

### 3. AboutSection (`/components/AboutSection.tsx`)
- 5개 카드 구성:
  1. AI 네이티브 기업의 탄생
  2. 기술 민주화의 실현 (따옴표 후 줄바꿈)
  3. 새로운 협업 모델
  4. 압도적인 성과
  5. 일하는 방식의 재정의
- 카드 디자인: bg-white/[0.02] + 호버 효과
- 배경색: bg-gray-950 (섹션 구분)

### 4. ServicesSection (`/components/ServicesSection.tsx`)
- 3개 서비스:
  1. AI 전환 컨설팅
  2. 신속한 프로토타이핑
  3. AI 기반 제품 개발
- 각 서비스별 태그
- 접근 방식 4단계: Discovery → Design → Deploy → Scale
- 배경색: bg-black

### 5. ContactSection (`/components/ContactSection.tsx`)
- 문의 폼: 이름, 이메일, 회사명, 메시지
- 직접 연락 정보: contact@hasia.ai
- 평균 응답 시간: 24시간
- 배경색: bg-gray-950 (섹션 구분)

### 6. Footer (`/components/Footer.tsx`)
- 심플한 디자인
- 저작권 정보
- 배경색: bg-black with border-t

## 다국어 지원

### LanguageContext (`/contexts/LanguageContext.tsx`)
- 기본 언어: 영어 (EN)
- 지원 언어: 영어, 한국어
- 모든 텍스트 번역 완료
- React Context API 사용

## 반응형 디자인
- 모바일 최적화 완료
- 브레이크포인트: sm (640px), md (768px), lg (1024px), xl (1280px)
- 모바일 패딩: px-6
- 데스크톱 패딩: px-8

## 섹션 구분
- 홀수 섹션: bg-black (Hero, Services)
- 짝수 섹션: bg-gray-950 (About, Contact)
- Footer: bg-black

## 특별 기능
- 스크롤 애니메이션 (Intersection Observer)
- 호버 효과
- 그라데이션 텍스트
- 블러 배경 효과

## 최종 업데이트
- 2025-09-07
- 언어 전환 기능 완성
- "Democratizing Technology" 카드 따옴표 후 줄바꿈 추가