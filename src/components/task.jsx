import React from 'react'

export default function Task({task}) {
  return (
    <div
    style={{
        backgroundColor: "rgb(200,200,200)",
        margin:2,
        padding:3

    }}
    >{task.name}</div>
  )
}
