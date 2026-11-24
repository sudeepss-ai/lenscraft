const PhotoCard = ({ image, title, category }) => {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 hover:border-neutral-600 transition">

      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="flex items-center justify-between mt-4 mb-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="border border-neutral-700 text-neutral-300 text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="flex items-center gap-5 text-sm text-neutral-300 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          Select
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          Favourite
        </label>
      </div>

      <a href={image} download className="btn w-full text-center text-sm py-2.5">
        Download Photo
      </a>

    </div>
  )
}

export default PhotoCard