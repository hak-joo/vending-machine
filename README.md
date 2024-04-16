# 프로젝트 소개

🏷️ **프로젝트 명 :** 자판기

🗓️ **프로젝트 기간 :** 2024.03.27 ~ 2023.04.19 (3주)

👥 **구성원 :** 이학주, 이동현, 정효인

## 사용 기술

| name           | version | description     |
| -------------- | ------- | --------------- |
| React          | 18.2.0  | framework       |
| TypepScript    | 5.2.2   | language        |
| Vite           | 5.2.0   | build           |
| pnpm           | 8.12.6  | package manager |
| Jotai          | 2.7.2   | 상태관리        |
| TailwindCSS    | 3.4.3   | css             |
| cva            | 0.7.0   | css             |
| clsx           | 2.1.0   | css             |
| tailwind-merge | 2.2.2   | css             |
| eslint         | 8.57.0  | 분석도구        |

## 시작 가이드

```
$ pnpm i
$ pnpm dev
```

## 컴포넌트 구조

![자판기컴포넌트구조](https://github.com/hak-joo/vending-machine/assets/52451420/0ad0572b-59c2-4d89-ab70-251a1a8bac7e)

## 주요 기능

### 1️⃣ 사용자 금액 충전

![IMG_9481](https://github.com/hak-joo/vending-machine/assets/52451420/ae0f7978-4408-460c-aea4-6724b68d1fe7)

- 원하는 금액 수동 입력 가능
- 100/500/1000/5000 단위의 버튼을 통해 금액 증가 가능

### 2️⃣ 자판기 금액 투입

![IMG_9475](https://github.com/hak-joo/vending-machine/assets/52451420/10f42bbd-d0cc-4bc3-a3f8-976a8f845520)

- 100/500/1000/5000 단위의 버튼을 통해 금액 투입 가능
- 투입된 금액에 따라 음료 선택 여부가 결정됨(❌-불가, 🟢-가능)
- 사용자 자산에 따라 금액 버튼 disable 여부가 결정됨
- 실시간으로 투입된 금액 확인 가능

### 3️⃣ 자판기 잔돈 반환

![IMG_9479](https://github.com/hak-joo/vending-machine/assets/52451420/7fdcfe82-fbfc-42c8-84cb-3e2b855f2170)

- 잔돈 반환 버튼(<img src="./src/assets/refund.png" width="20" height="20"/>) 클릭 시 사용자의 계좌로 잔돈 반환

### 4️⃣ 음료 선택

![IMG_9480](https://github.com/hak-joo/vending-machine/assets/52451420/2c7cf3bf-cb5e-44d8-ace5-e987446a8eea)

- 구입 가능한 음료 선택 시 배출구에 음료 확인 가능
- 배출구의 음료 선택 시 삭제됨
- 배출구에 음료가 5개 쌓이면 추가 구매 불가 -> 배출구의 음료수를 받아야함
