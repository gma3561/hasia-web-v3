# hasia.ai 도메인 설정 가이드

## GitHub Pages와 연결하기

### 1. DNS 설정 (도메인 등록업체에서)

#### A 레코드 설정
다음 IP 주소들을 A 레코드로 추가하세요:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

#### CNAME 레코드 설정 (www 서브도메인용)
- Host: www
- Points to: gma3561.github.io

### 2. 도메인 등록업체별 설정 방법

#### Cloudflare
1. DNS 관리 페이지로 이동
2. A 레코드 4개 추가 (위의 IP 주소)
3. CNAME 레코드 추가 (www → gma3561.github.io)
4. **중요**: Proxy 상태를 "DNS only"로 설정 (오렌지 구름 OFF)
5. SSL/TLS 설정에서 "Full" 모드 선택

#### Namecheap
1. Domain List → Manage → Advanced DNS
2. A Record 추가 (@ 호스트에 위의 IP들)
3. CNAME Record 추가 (www → gma3561.github.io)

#### Google Domains
1. DNS 메뉴 선택
2. Custom records에서 A 레코드 추가
3. CNAME 레코드 추가

### 3. GitHub 설정

1. Repository Settings → Pages
2. Custom domain: hasia.ai 입력
3. Enforce HTTPS 체크 (DNS 설정 후 자동으로 활성화됨)

### 4. 확인 사항

- DNS 변경사항은 최대 48시간이 걸릴 수 있습니다
- 보통 10-30분 내에 적용됩니다
- GitHub Pages가 자동으로 Let's Encrypt SSL 인증서를 발급합니다

### 5. 테스트

```bash
# DNS 설정 확인
nslookup hasia.ai
dig hasia.ai

# HTTPS 접속 테스트
curl -I https://hasia.ai
```

### 문제 해결

**HTTPS가 작동하지 않는 경우:**
1. DNS 설정이 올바른지 확인
2. GitHub Pages Settings에서 도메인이 제대로 설정되었는지 확인
3. "Enforce HTTPS" 옵션이 활성화되었는지 확인
4. Cloudflare 사용 시 Proxy를 끄고 "DNS only" 모드로 설정

**ERR_SSL_VERSION_OR_CIPHER_MISMATCH 오류:**
- Cloudflare의 SSL/TLS 설정을 "Full"로 변경
- Universal SSL이 활성화되어 있는지 확인