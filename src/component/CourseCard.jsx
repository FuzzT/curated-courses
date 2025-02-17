import { UserIcon, ArrowPathRoundedSquareIcon, CurrencyRupeeIcon, ChatBubbleLeftIcon, StarIcon, EyeIcon, ClockIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

import PropTypes from 'prop-types';

const CourseCard = ({ course }) => {
  

  return (
    <div className="mx-auto max-w-[420px] w-full  rounded-xl px-2 py-8">
      {/* Course Image */}
      <div className="w-full h-1/2 bg-black rounded-xl overflow-hidden">
        <img src={course.thumbnail} alt="ReactJS Course" className="w-full h-full object-contain" />
      </div>

      {/* Course Details */}
      <div className="mt-4">
        {/* Tags & Level */}
        <div className="flex gap-4 text-sm text-gray-600">
          {course.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded-md">{tag}</span>
          ))}
        </div>

        <div className="flex items-center justify-between">
            <h1 className="pr-2 text-lg font-semibold text-gray-800 mt-2 overflow-hidden text-ellipsis whitespace-nowrap" title={course.title}>
            {course.title}
            </h1>

            <div className="flex gap-2 mt-2 items-center text-gray-600">
            <CurrencyRupeeIcon className="w-5 h-5" />
            <span>{course.Price}</span>
            </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
          <UserIcon className="w-5 h-5 text-gray-600" />
          <span>{course.Author}</span>
        </div>

        {/* Level */}
        <div className="flex items-center gap-2 mt-2 text-gray-700">
          <ArrowPathRoundedSquareIcon className="w-5 h-5 text-gray-600" />
          <span>{course.level}</span>
        </div>

        {/* Icons Section */}
        <div className="flex gap-4 mt-3">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <EyeIcon className="w-5 h-5" />
              <span>{course.views}</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600">
                <ClockIcon className="w-5 h-5 text-gray-600" />
                <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600">
              <GlobeAltIcon className="w-5 h-5 text-gray-600" />
              <span>{course.source}</span>
            </div>

        </div>



        {/* Reviews & Rating */}
        <div className="flex gap-4 mt-2 text-sm text-gray-600">
          <div className="flex gap-2 items-center">
            <ChatBubbleLeftIcon className="w-5 h-5 text-gray-600" />
            <span>{course.Reviews}</span>
          </div>
          <div className="flex gap-2 items-center">
            <StarIcon className="w-5 h-5 text-gray-600" />
            <span>{course.Rating}</span>
          </div>
        </div>

        {/* Key Highlights */}
        <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
          {course.keyHighlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
    course: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      Price: PropTypes.number.isRequired,
      Author: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      icons: PropTypes.arrayOf(PropTypes.shape({
        iconsvg: PropTypes.node.isRequired,
        detail: PropTypes.string.isRequired,
      })).isRequired,
      views: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      Reviews: PropTypes.string.isRequired,
      Rating: PropTypes.string.isRequired,
      keyHighlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };

export default CourseCard;
