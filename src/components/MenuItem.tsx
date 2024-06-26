import { MenuItem as MenuItemType } from "../types";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    addToCart();
  };

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isClicked) {
      timer = setTimeout(() => {
        setIsClicked(false);
      }, 300); // Adjust the delay as needed
    }
    return () => clearTimeout(timer);
  }, [isClicked]);

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 ease-in-out transform ${isClicked ? 'scale-95' : 'md:hover:bg-gray-100 md:hover:scale-105'} md:hover:shadow-lg'}`}
      onClick={handleClick}
    >
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
