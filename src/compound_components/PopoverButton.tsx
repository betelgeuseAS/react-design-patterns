import { ComponentPropsWithoutRef, FC } from 'react'

import { usePopoverContext } from './PopoverProvider'

interface PopoverButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const PopoverButton: FC<PopoverButtonProps> = ({
 children,
 className,
 onClick,
 ...rest
}) => {
  const props = usePopoverContext()

  return (
    <button
      {...rest}
      className={className}
      onClick={(event) => {
        onClick?.(event)
        props.onOpen()
      }}
    >
      {children}
    </button>
  )
}
