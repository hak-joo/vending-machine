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
  type,
  description,
  ...props
}: CommonBtnProps) {
  const getRole = () => {
    return props.onClick?.toString().includes('navigate')
      ? 'navigation'
      : 'button';
  };

  return (
    <button
      type={type}
      aria-label={description}
      disabled={disabled}
      aria-disabled={disabled}
      role={getRole()}
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
