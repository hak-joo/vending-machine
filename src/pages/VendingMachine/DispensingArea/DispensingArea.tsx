import { BeverageType } from '../Beverage/Beverage';

interface DispensingAreaProps {
  beverages: BeverageType[];
  handleImageClick: (idx: number) => void;
}
function DispensingArea({ beverages, handleImageClick }: DispensingAreaProps) {
  return (
    <div className="w-full min-h-[120px] box-border bg-green-800 flex flex-row rounded-lg">
      {beverages.map((beverage, index) => (
        <img
          key={index}
          src={beverage.imagePath}
          className="object-contain rotate-90 w-32 animate-fade"
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
}

export default DispensingArea;
