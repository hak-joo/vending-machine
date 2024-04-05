import { BeverageType } from './types.ts';

function Beverage({ beverage }: { beverage: BeverageType }): JSX.Element {
  return (
    <div>
      <div className="bg-white flex justify-center items-center flex-col">
        <div className="">
          <img src={beverage.imagePath} className="" />
        </div>
        <div className="">
          <h2>{beverage.name}</h2>
        </div>
        <div className="">
          <div>{beverage.price}원</div>
        </div>
      </div>
    </div>
  );
}

export default Beverage;
