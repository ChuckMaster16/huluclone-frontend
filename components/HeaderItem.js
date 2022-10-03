import React from 'react'

function HeaderItem({Icon, title}) {
  return (
    <div className="group flex flex-col items-center mt-6 w-12 cursor-pointer sm:w-20">
      <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  )
}

export default HeaderItem
