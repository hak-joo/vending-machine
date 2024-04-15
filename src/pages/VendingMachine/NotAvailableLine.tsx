export const NotAvailableLine = () => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-end pr-2"
        style={{ transform: 'rotate(-45deg)' }}
      >
        <div className="p-1.5 text-center border-2 border-red-500 text-red-500 rounded-md">
          Sold Out!
        </div>
      </div>
    </>
  );
};
