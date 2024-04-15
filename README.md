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

![IMG_9467](https://github.com/hak-joo/vending-machine/assets/52451420/f5b58341-30e8-44bf-8123-67701c53e85e)

## 주요 기능

### 1️⃣ 사용자 금액 충전

![IMG_9468](https://github.com/hak-joo/vending-machine/assets/52451420/5ce63f7a-87c7-4e79-83d9-1988663ef47e)

- 원하는 금액 수동 입력 가능
- 100/500/1000/5000 단위의 버튼을 통해 금액 증가 가능

### 2️⃣ 자판기 금액 투입

![IMG_9469](https://github.com/hak-joo/vending-machine/assets/52451420/8ad3f259-a15f-4544-8236-a4f7a5634b39)

- 100/500/1000/5000 단위의 버튼을 통해 금액 투입 가능
- 투입된 금액에 따라 음료 선택 여부가 결정됨(❌-불가, 🟢-가능)
- 사용자 자산에 따라 금액 버튼 disable 여부가 결정됨
- 실시간으로 투입된 금액 확인 가능

### 3️⃣ 자판기 잔돈 반환

![IMG_9470](https://github.com/hak-joo/vending-machine/assets/52451420/b664e737-f8ad-4171-b43d-9c6648c20fd4)

- 잔돈 반환 버튼(<img src="./src/assets/refund.png" width="20" height="20"/>) 클릭 시 사용자의 계좌로 잔돈 반환

### 4️⃣ 음료 선택

![IMG_9471](https://github.com/hak-joo/vending-machine/assets/52451420/a9f0cf70-c0c7-49af-962b-039e18396446)

- 구입 가능한 음료 선택 시 배출구에 음료 확인 가능
- 배출구의 음료 선택 시 삭제됨
- 배출구에 음료가 5개 쌓이면 추가 구매 불가 -> 배출구의 음료수를 받아야함
