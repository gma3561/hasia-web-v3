# EmailJS 설정 가이드

## 📧 EmailJS 계정 설정 방법

### 1. EmailJS 계정 생성
1. https://www.emailjs.com/ 접속
2. "Sign Up Free" 클릭
3. 이메일로 회원가입

### 2. Email Service 추가
1. Dashboard에서 "Email Services" 클릭
2. "Add New Service" 클릭
3. **Gmail** 선택 (추천)
4. Service Name 입력 (예: "HASIA Contact")
5. "Connect Account" 클릭 → Gmail 계정 연결
6. Service ID 복사 (예: `service_abc123`)

### 3. Email Template 생성
1. Dashboard에서 "Email Templates" 클릭
2. "Create New Template" 클릭
3. 아래 템플릿 내용 입력:

#### Subject (제목):
```
새로운 문의: {{from_name}} - {{company}}
```

#### Content (내용):
```
새로운 문의가 접수되었습니다.

발신자 정보:
- 이름: {{from_name}}
- 이메일: {{from_email}}
- 회사: {{company}}

문의 내용:
{{message}}

---
이 메일은 HASIA 웹사이트 Contact Form에서 발송되었습니다.
```

4. "To Email" 필드에 받을 이메일 주소 입력
5. Template ID 복사 (예: `template_xyz789`)

### 4. Public Key 가져오기
1. Dashboard에서 "Account" 클릭
2. "General" 탭
3. Public Key 복사 (예: `AbCdEfGhIjKlMnOpQr`)

### 5. .env.local 파일 수정
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOpQr
```

### 6. 서버 재시작
```bash
npm run dev
```

## ✅ 테스트
1. 웹사이트의 Contact 섹션으로 이동
2. 폼 작성 후 전송
3. 설정한 이메일 주소로 메일 수신 확인

## 📊 무료 플랜 제한
- 월 200건까지 무료
- 2개 템플릿까지 무료
- 충분한 테스트 및 초기 운영 가능

## 🔒 보안 주의사항
- `.env.local` 파일은 절대 git에 커밋하지 마세요
- Public Key는 공개되어도 안전하지만, Service ID와 Template ID는 남용 방지를 위해 보호하세요

## 🚀 프로덕션 배포 시
GitHub Pages는 서버리스이므로 환경변수를 직접 설정할 수 없습니다.
대신 다음 방법 중 하나를 선택:

1. **하드코딩** (간단하지만 보안 낮음)
   - ContactSection.tsx에 직접 입력
   
2. **GitHub Secrets + Actions** (추천)
   - GitHub 저장소 Settings → Secrets에 추가
   - GitHub Actions에서 빌드 시 주입

3. **Vercel/Netlify 사용** (추천)
   - 환경변수 관리 기능 제공
   - 더 안전하고 편리함