import { BeverageType } from './Beverage';
import cokeImg from '@/assets/coke.png';
import drpepperImg from '@/assets/drpepper.png';
import fantaImg from '@/assets/fanta.png';
import chilsungCiderImg from '@/assets/chilsung-cider.png';
import cocopalmImg from '@/assets/cocopalm.png';
import hot6Img from '@/assets/hot6.png';
import pepsiImg from '@/assets/pepsi.png';
import sparklingAppleImg from '@/assets/sparkling-apple.png';
import sparklingPeachImg from '@/assets/sparkling-peach.png';
import welchsImg from '@/assets/welchs.png';
import sunkistImg from '@/assets/sunkist.png';
import spriteImg from '@/assets/sprite.png';

export const beverageList: Array<BeverageType> = [
  {
    id: 1,
    name: '코카콜라',
    price: 1500,
    imagePath: cokeImg,
    stock: 100,
  },
  {
    id: 2,
    name: '닥터페퍼',
    price: 1000,
    imagePath: drpepperImg,
    stock: 100,
  },
  {
    id: 3,
    name: '환타',
    price: 1000,
    imagePath: fantaImg,
    stock: 0,
  },
  {
    id: 4,
    name: '칠성사이다',
    price: 1000,
    imagePath: chilsungCiderImg,
    stock: 100,
  },
  {
    id: 5,
    name: '코코팜',
    price: 1000,
    imagePath: cocopalmImg,
    stock: 100,
  },
  {
    id: 6,
    name: '핫식스',
    price: 1600,
    imagePath: hot6Img,
    stock: 100,
  },
  {
    id: 7,
    name: '펩시',
    price: 1000,
    imagePath: pepsiImg,
    stock: 100,
  },
  {
    id: 8,
    name: '스파클링 애플',
    price: 1300,
    imagePath: sparklingAppleImg,
    stock: 0,
  },
  {
    id: 9,
    name: '스파클링 피치',
    price: 1300,
    imagePath: sparklingPeachImg,
    stock: 100,
  },
  {
    id: 10,
    name: '웰치스',
    price: 800,
    imagePath: welchsImg,
    stock: 100,
  },
  {
    id: 11,
    name: '썬키스트',
    price: 1500,
    imagePath: sunkistImg,
    stock: 0,
  },
  {
    id: 12,
    name: '스프라이트',
    price: 1200,
    imagePath: spriteImg,
    stock: 100,
  },
];

export function purchaseIdentifyIcon(canPurchase: boolean) {
  if (canPurchase) {
    // O
    return (
      <svg
        className="h-3 w-3 text-green-500 mr-1"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="9" fill="currentColor" />
      </svg>
    );
  } else {
    // X
    return (
      <svg
        className="h-3 w-3 text-red-500 mr-0.5"
        viewBox="0 0 24 24"
        strokeWidth="5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  }
}
