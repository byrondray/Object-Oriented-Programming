interface Points {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const square = (num: number): number => num * num;

const squareRoot = (num: number): number => Math.sqrt(num);

const distance = ({ x1, y1, x2, y2 }: Points): number => {
  return squareRoot(square(x2 - x1) + square(y2 - y1));
};

console.log(distance({ x1: 2, y1: 4, x2: 6, y2: 8 }));
