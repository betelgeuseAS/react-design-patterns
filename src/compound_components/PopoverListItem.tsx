import { ComponentPropsWithoutRef, FC } from 'react'

import { usePopoverContext } from './PopoverProvider'

interface PopoverListItemProps extends ComponentPropsWithoutRef<"button"> {}

export const PopoverListItem: FC<PopoverListItemProps> = ({
 onClick,
 className,
 children,
}) => {
  const props = usePopoverContext()

  return (
    <button
      onClick={(event) => {
        onClick?.(event)
        props.onClose()
      }}
      className={className}
    >
      {children}
    </button>
  )
}
