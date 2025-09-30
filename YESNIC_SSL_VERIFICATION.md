# YESNIC SSL 도메인 소유권 확인 설정

## 설정해야 할 CNAME 레코드

YESNIC 네임서버 고급설정에서 다음 레코드 추가:

```
Type: CNAME
Host: _FEE414A24E2C474F7E830408ECF4E2B8
Value: ADD7C34B245E7BC93BD71142209C1470.DB188F199D4BD5CE9D99A80D0CF973B8.comodoca.com
TTL: 3600
```

## 설정 방법

1. **YESNIC 로그인**
2. **도메인 관리 → 네임서버 고급설정**
3. **CNAME 레코드 추가**:
   - 호스트: `_FEE414A24E2C474F7E830408ECF4E2B8`
   - 내용값: `ADD7C34B245E7BC93BD71142209C1470.DB188F199D4BD5CE9D99A80D0CF973B8.comodoca.com`
   - TTL: 3600

## ⚠️ 중요 사항

### GitHub Pages 사용 시
- **YESNIC SSL 인증서는 GitHub Pages에 적용 불가**
- GitHub Pages는 자체 Let's Encrypt SSL 무료 제공
- 이 CNAME은 도메인 소유권 확인용일 뿐, 실제 SSL 적용과는 별개

### 왜 설정하나요?
1. **인증서 발급**: 나중에 다른 서버로 이전 시 사용 가능
2. **백업 용도**: GitHub Pages 외 다른 호스팅 사용 시 활용
3. **도메인 소유 증명**: YESNIC 기록용

### GitHub Pages SSL vs YESNIC SSL

| 구분 | GitHub Pages SSL | YESNIC SSL |
|------|-----------------|------------|
| 비용 | 무료 | 유료 (구매완료) |
| 설정 | 자동 | 수동 (서버 필요) |
| 갱신 | 자동 | 수동 |
| 적용 | GitHub Pages만 | 자체 서버만 |

## 현재 권장 설정

1. ✅ **GitHub Pages DNS 설정** (이미 완료)
   - A 레코드: GitHub Pages IP
   - CNAME: www → gma3561.github.io

2. ✅ **YESNIC SSL 소유권 확인** (선택사항)
   - 위 CNAME 레코드 추가
   - 인증서 발급 완료 후 보관

3. ✅ **실제 사용**
   - GitHub Pages: Let's Encrypt SSL (자동)
   - 향후 자체 서버: YESNIC SSL 사용 가능

## 문의
- YESNIC: 1588-6311
- GitHub Pages 문서: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site