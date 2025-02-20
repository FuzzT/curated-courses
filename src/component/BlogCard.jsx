

const BlogCard = ({ image, title, description, date, author, readMoreLink }) => {
    return (
      <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300 ">
        {/* Image */}
        <img src={image} alt={title} className="w-full h-48 object-cover" />
  
        {/* Content */}
        <div className="p-4 flex flex-col">
          {/* Title with responsive clamping */}
          <h2 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2">
            {title}
          </h2>
  
          {/* Author & Date (Auto-resize text) */}
          <p className="text-sm text-gray-500 mt-1 truncate">
            <span className="font-medium">{author}</span> • {date}
          </p>
  
          {/* Description with Read More */}
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {description.length > 100 ? description.slice(0, 100) + "..." : description}
          </p>
  
          {/* Read More Button */}
          <a
            href={readMoreLink}
            className="mt-3 text-blue-600 font-semibold hover:underline self-start"
          >
            Read More →
          </a>
        </div>
      </div>
    );
  };

  export default BlogCard;