import { BeverageType } from './types.ts';

function Beverage({ beverage }: { beverage: BeverageType }): JSX.Element {
  return (
    <div className="bg-white flex justify-center items-center flex-col">
      <img src={beverage.imagePath} className="" />
      <h2>{beverage.name}</h2>
      <div>{beverage.price}원</div>
    </div>
  );
}

export default Beverage;
