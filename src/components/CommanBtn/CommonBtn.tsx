import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { ButtonVariants } from './datas';
import { CommandBtnType } from './types';

type CommonBtnProps = React.HTMLAttributes<HTMLButtonElement> & CommandBtnType;

function CommonBtn({
  bgColor,
  textColor,
  shape,
  border,
  textAlign,
  additionalClass,
  children,
  disabled,
  ...props
}: CommonBtnProps) {
  return (
    <button
      className={twMerge(
        clsx(
          ButtonVariants({
            bgColor,
            textColor,
            shape,
            border,
            textAlign,
            disabled,
          }),
          additionalClass,
        ),
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default CommonBtn;
