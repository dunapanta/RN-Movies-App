import {createContext, useState} from 'react';
import React from 'react';

interface PosterColors {
  primary: string;
  secondary: string;
}
interface ContextProps {
  colors: PosterColors;
  prevColors: PosterColors;
  setPosterColors: (colors: PosterColors) => void;
  setPrevPosterColors: (colors: PosterColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<PosterColors>({
    primary: 'red',
    secondary: 'blue',
  });
  const [prevColors, setPrevColors] = useState<PosterColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setPosterColors = (colors: PosterColors) => {
    setColors(colors);
  };

  const setPrevPosterColors = (colors: PosterColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setPosterColors,
        setPrevPosterColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
