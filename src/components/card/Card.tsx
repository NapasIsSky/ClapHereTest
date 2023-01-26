import React from "react";
interface ICard {}

const Card: React.FC<ICard> = (props) => {
  return (
    <div className="card relative">
      <img src="Like icon.png" className="absolute top-4 right-4" />
      <img src="Photo.png" alt="card photo" className="card-img" />
      <div className="p-4">
        <p className="text-color-green">Półkolonie</p>
        <div className="card-name flex flex-col align-start mt-2">
          <h2 className="Mulish-Bold">Piłkarskie Półkolonie oraz Puchar Mistrzów do lat 12</h2>
        </div>
        <p className="mt-8">22.04.2022-28.04.2022 (inne terminy)</p>
        <div className="flex flex-row justify-between align-end mt-4">
          <div>
            <div className="flex flex-row">
              <img src="Icon calendar.png" className="icon-size" />
              <p className="pl-2">4 dni</p>
            </div>
            <div className="flex flex-row">
              <img src="Icon onsite.png" className="icon-size" />
              <p className="pl-2">Łódź, Polska</p>
            </div>
          </div>
          <div className="relative pr-2">
            <h1 className="Mulish-ExtraBold text-color-blue">211</h1>
            <span className="caption Mulish-ExtraBold absolute top-2 right-0 text-color-blue">
              zl
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
