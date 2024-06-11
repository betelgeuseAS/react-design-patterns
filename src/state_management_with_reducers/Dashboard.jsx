import React, { useReducer } from 'react'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'

const initState = {
  posts: [],
  notifications: [],
}

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {...state, posts: [...state.posts, action.payload]}
    case DELETE_POST:
      return {...state, posts: state.posts.filter(post => post.id !== action.payload.id)}
    case ADD_NOTIFICATION:
      return {...state, notifications: [...state.notifications, action.payload]}
    case DELETE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.id !== action.payload.id)
      }
    default:
      return initState
  }
}

export const Dashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initState)

  const addPost = (text) => {
    const newPost = { id: Date.now(), text }
    dispatch({ type: ADD_POST, payload: newPost })
  }

  const deletePost = (id) => {
    dispatch({ type: DELETE_POST, payload: { id } })
  }

  const addNotification = (text) => {
    const newNotification = { id: Date.now(), text }
    dispatch({ type: ADD_NOTIFICATION, payload: newNotification })
  }

  const deleteNotification = (id) => {
    dispatch({ type: DELETE_NOTIFICATION, payload: { id } })
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h2>Posts</h2>

        <ul>
          {state.posts.map(post => (
            <li key={post.id}>
              {post.text}
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => addPost('New post')}>Add Post</button>
      </div>

      <div>
        <h2>Notifications</h2>

        <ul>
          {state.notifications.map(notification => (
            <li key={notification.id}>
              {notification.text}
              <button onClick={() => deleteNotification(notification.id)}>Dismiss</button>
            </li>
          ))}
        </ul>

        <button onClick={() => addNotification('New notification')}>Add Notification</button>
      </div>
    </div>
  )
}
