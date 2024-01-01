import React from "react";
import Card, { CardProps } from "./Card";

interface Props {
  cardsData: CardProps[];
}

const Cards: React.FC<Props> = ({ cardsData }) => {
  return (
    <div className="grid items-center lg:grid-cols-4 gap-5">
      {cardsData.map((cardData, i) => {
        return <Card key={"Cards_Data__" + i} {...cardData} />;
      })}
    </div>
  );
};

export default Cards;
