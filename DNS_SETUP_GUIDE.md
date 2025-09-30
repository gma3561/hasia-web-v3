# hasia.ai DNS 설정 가이드

## 현재 상황
- ✅ GitHub Pages 배포 완료
- ✅ CNAME 파일 추가 (hasia.ai)
- ⏳ DNS 설정 필요
- ⏳ HTTPS 활성화 대기

## YESNIC에서 설정할 내용

### 1. DNS 레코드 설정
YESNIC 관리 페이지 > DNS 관리에서 다음 레코드 추가:

#### A 레코드 (GitHub Pages IP)
```
Type: A    Host: @    Value: 185.199.108.153    TTL: 3600
Type: A    Host: @    Value: 185.199.109.153    TTL: 3600
Type: A    Host: @    Value: 185.199.110.153    TTL: 3600
Type: A    Host: @    Value: 185.199.111.153    TTL: 3600
```

#### CNAME 레코드 (www 서브도메인)
```
Type: CNAME    Host: www    Value: gma3561.github.io    TTL: 3600
```

### 2. 포워딩 비활성화
- 현재 설정된 포워딩을 **반드시 비활성화**
- DNS 레코드가 우선되어야 함

## GitHub Pages 설정

### 1. 저장소 설정 확인
- Settings > Pages > Custom domain: `hasia.ai`
- DNS 전파 후 "Enforce HTTPS" 활성화

### 2. 대기 시간
- DNS 전파: 10분 ~ 48시간
- GitHub HTTPS 인증서 발급: 최대 24시간

## 확인 방법

### DNS 전파 확인
```bash
nslookup hasia.ai
dig hasia.ai
```

### HTTPS 상태 확인
- https://hasia.ai 접속
- 브라우저 주소창 자물쇠 아이콘 확인

## 주의사항

### YESNIC SSL 인증서
- GitHub Pages는 자체 Let's Encrypt 인증서 사용
- YESNIC SSL 인증서는 GitHub Pages에 적용 불가
- 별도 서버가 필요한 경우에만 YESNIC SSL 사용

### 대안
1. **GitHub Pages + Let's Encrypt** (무료, 자동) ✅ 권장
2. Cloudflare 프록시 + YESNIC SSL
3. 별도 서버 운영 + YESNIC SSL

## 문제 해결

### DNS가 제대로 설정되지 않는 경우
1. 포워딩이 비활성화되었는지 확인
2. 기존 DNS 캐시 삭제
3. TTL 시간 대기

### HTTPS가 작동하지 않는 경우
1. DNS 전파 완료 확인 (nslookup)
2. GitHub Pages Settings에서 도메인 재입력
3. 24시간 대기 후 재확인

## 연락처
- GitHub Pages 문서: https://docs.github.com/en/pages
- YESNIC 고객센터: 1588-4603