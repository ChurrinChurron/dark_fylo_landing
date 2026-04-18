import React from 'react'

const FeaturesCard = ({ icon, title, description }) => {
  return (
    <article className="space-y-6 p-8 text-center">
      <figure className="mx-auto flex h-16 w-16 items-center justify-center sm:w-18 sm:h-18">
        <img src={icon} alt={`${title} icon`} />
      </figure>
      <div className="space-y-4 sm:text-center">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-md leading-7 text-white">{description}</p>
      </div>
    </article>
  )
}

export default FeaturesCard