import { cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  `text-center p-1 font-bold w-full h-full ease-in duration-100`,
  {
    variants: {
      bgColor: {
        blue: 'bg-blue-600 hover:bg-blue-500',
        red: 'bg-red-600 hover:bg-red-500',
        gray: 'bg-gray-500 hover:bg-gray-500',
        purple: 'bg-purple-600 hover:bg-purple-500',
        orange: 'bg-orange-600 hover:bg-orange-500',
        yellow: 'bg-yellow-600 hover:bg-yellow-500',
        green: 'bg-green-600 hover:bg-green-500',
        black: 'bg-black hover:bg-gray-900',
        white: 'bg-white',
        lightBlue: 'bg-lightBlue',
        lightOrenge: 'bg-lightOrenge',
      },
      textColor: {
        blue: 'text-blue-600 hover:text-blue-500',
        red: 'text-red-600 hover:text-red-500',
        gray: 'text-gray-600 hover:text-gray-500',
        purple: 'text-purple-600 hover:text-purple-500',
        orange: 'text-orange-600 hover:text-orange-500',
        yellow: 'text-yellow-600 hover:text-yellow-500',
        green: 'text-green-600 hover:text-green-500',
        black: 'text-black',
        white: 'text-white',
        lightBlue: 'bg-lightBlue',
        lightOrenge: 'bg-lightOrenge',
      },
      shape: {
        rectangle: 'rounded-sm',
        circle: 'rounded-full',
      },
      border: {
        blue: 'border-2 border-blue-500',
        red: 'border-2 border-red-500',
        gray: 'border-2 border-gray-500',
        purple: 'border-2 border-purple-500',
        orange: 'border-2 border-orange-500',
        yellow: 'border-2 border-yellow-500',
        green: 'border-2 border-green-500',
        black: 'border-2 border-black',
        white: 'border-2 border-white',
        lightBlue: 'bg-lightBlue',
        lightOrenge: 'bg-lightOrenge',
      },
      textAlign: {
        center: 'text-center',
        right: 'text-right',
        left: 'text-left',
      },
      disabled: {
        true: 'cursor-not-allowed',
      },
    },
  },
);
