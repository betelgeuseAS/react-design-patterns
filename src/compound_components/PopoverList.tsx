import { ComponentPropsWithoutRef, FC } from 'react'

import { useClickOutside } from 'your_use_click_outside'

import { usePopoverContext } from './PopoverProvider'

interface PopoverListProps extends ComponentPropsWithoutRef<"div"> {
  show?: boolean
}

export const PopoverList: FC<PopoverListProps> = ({
 children,
 className,
 ...rest
}) => {
  const props = usePopoverContext()
  const ref = useClickOutside(props.onClose)

  if (!props.open) return null

  return (
    <div
      ref={ref}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}
