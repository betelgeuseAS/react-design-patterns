import { FC, useCallback, useEffect, useState } from 'react'

import { TUser } from 'your_type_user'
import { getUsers } from 'your_get_users'

import Popover from './Popover'

export const App: FC = () => {
  const [data, setData] = useState<TUser[]>([])

  const applyData = useCallback(async () => {
    const data = await getUsers()
    setData(data)
  }, [])

  useEffect(() => {
    applyData()
  }, [applyData])

  return (
    <div>
      <Popover className="relative">
        <Popover.Button>Popover!</Popover.Button>

        <Popover.List>
          {data.map((item) => (
            <Popover.ListItem key={item.id}>
              {item.firstname} {item.lastname}
            </Popover.ListItem>
          ))}
        </Popover.List>
      </Popover>
    </div>
  )
}
