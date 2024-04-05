import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { ButtonVariants } from '@/components/button/datas';
import { ButtonProps } from '@/types/Button';

type CommonBtnProps = React.HTMLAttributes<HTMLButtonElement> & ButtonProps;

function CommonBtn({
  bgColor,
  textColor,
  shape,
  border,
  textAlign,
  additionalClass,
  children,
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
