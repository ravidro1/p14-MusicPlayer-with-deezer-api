import React, { useEffect, useState } from "react";

export default function PlaylistPicture({ playlist }) {
  const [arrayOfPicture, setArrayOfPicture] = useState([]);
  const [numberOfRowsAndColumns, setNumberOfRowsAndColumns] = useState(0);

  const [gridPlaceArray, setGridPlaceArray] = useState();

  const getArrayOfPicture = () => {
    const maxPicture = 25;
    const tempArrayOfPicture = playlist?.data?.map((song, index) => {
      if (index < maxPicture) return { picSrc: song.album.cover_medium };
    });

    setArrayOfPicture(tempArrayOfPicture);
  };

  const calcImageArea = () => {
    const rootOfArrayOfPicture = Math.ceil(Math.sqrt(arrayOfPicture?.length));
    setNumberOfRowsAndColumns(rootOfArrayOfPicture);

    let placeArray = [];

    arrayOfPicture?.forEach(() => {
      let rowNumber = null;
      let columnNumber = null;

      do {
        rowNumber = Math.round(Math.random() * (rootOfArrayOfPicture - 1) + 1);
        columnNumber = Math.round(
          Math.random() * (rootOfArrayOfPicture - 1) + 1
        );
      } while (
        placeArray.some(
          (item) => item.row == rowNumber && item.column == columnNumber
        )
      );

      placeArray.push({ row: rowNumber, column: columnNumber });
    });

    setGridPlaceArray(placeArray);
  };

  useEffect(() => {
    getArrayOfPicture();
  }, []);

  useEffect(() => {
    calcImageArea();
  }, [arrayOfPicture]);

  console.log(gridPlaceArray);
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${numberOfRowsAndColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numberOfRowsAndColumns}, ${
          100 / numberOfRowsAndColumns
        }%)`,
      }}
      className={
        //overflow-hidden
        "w-[100%] h-[100%] bg-[#ffffffcc]  " +
        (arrayOfPicture?.length > 0
          ? "grid"
          : "flex justify-center items-center")
      }
    >
      {arrayOfPicture?.length ? (
        arrayOfPicture?.map((pic, index) => {
          return (
            <img
              style={{
                gridColumn: gridPlaceArray[index]?.column,
                gridRow: gridPlaceArray[index]?.row,
              }}
              key={index}
              src={pic.picSrc}
              alt="picture"
              className="w-[100%] h-[100%]"
            />
          );
        })
      ) : (
        <img
          src={"/no-photo.png"}
          alt="picture"
          className="p-3 w-[50%] aspect-square"
        />
      )}
    </div>
  );
}
