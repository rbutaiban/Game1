export interface Card {
    id: number;
    img: string;
    flip: string;
    success: boolean;
  }

  const cards = [
    {
      id: 1,
      img: '../assets/images/apple-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 2,
      img: '../assets/images/microsoft-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 3,
      img: '../assets/images/nintendo-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 4,
      img: '../assets/images/google-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 5,
      img: '../assets/images/samsung-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 6,
      img: '../assets/images/sony-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 7,
      img: '../assets/images/nvidia-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 8,
      img: '../assets/images/Pifss-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 1,
      img: '../assets/images/apple-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 2,
      img: '../assets/images/microsoft-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 3,
      img: '../assets/images/nintendo-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 4,
      img: '../assets/images/google-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 5,
      img: '../assets/images/samsung-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 6,
      img: '../assets/images/sony-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 7,
      img: '../assets/images/nvidia-logo.png',
      flip: 'inactive',
      success: false,
    },
    {
      id: 8,
      img: '../assets/images/Pifss-logo.png',
      flip: 'inactive',
      success: false,
    },
  ];

  export function shuffle<T>(array: T[]): T[] {
  let arrayLength = 0;
  for (var el in array){
    arrayLength++;
  }

  let currentIndex = arrayLength,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};
  
  export default shuffle(cards);

  