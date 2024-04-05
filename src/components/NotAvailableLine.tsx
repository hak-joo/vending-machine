export const NotAvailableLine = () => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        style={{ transform: 'rotate(-45deg)' }}
      >
        <div className="w-28 h-1 bg-red-500"></div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        style={{ transform: 'rotate(45deg)' }}
      >
        <div className="w-28 h-1 bg-red-500"></div>
      </div>
    </>
  );
};
