/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  blogThumbTitle,
  blogUrl,
  blogTitle,
  blogDesc,
  blogDateIcon,
  blogDate,
  blogCommentIcon,
  blogComment,
}) => {
  return (
    <div className='group transition-all duration-500 bg-white rounded-xl border border-BorderColor2-0 overflow-hidden'>
      <div className='relative z-10 rounded-lg overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-[1.01] group-hover:scale-110 w-full'
        />
        <div className="absolute z-10 top-5 right-5">
          <h6 className='relative z-10 overflow-hidden font-FiraSans uppercase rounded text-sm text-white bg-PrimaryColor-0 px-5 py-2 before:absolute before:right-0 before:w-0 before:h-full before:top-0 before:-z-10 before:transition-all before:duration-500 before:bg-[#ff9307] group-hover:before:w-full group-hover:before:left-0'>
            {blogThumbTitle}
          </h6>
        </div>
      </div>
      <div className='rounded-md px-4 sm:px-5 md:px-9 lg:px-5 xl:px-9 pb-9 pt-[30px] relative z-20 bg-white transition-all duration-500'>
        <div>
          <Link to={blogUrl}>
            <button className='font-FiraSans text-left font-medium text-lg sm:text-xl md:text-lg lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0 transition-all duration-500 group-hover:underline group-hover:text-PrimaryColor-0'>
              {blogTitle}
            </button>
          </Link>
          <p className='font-FiraSans text-TextColor2-0 pt-3'>{blogDesc}</p>
          <div className='flex justify-between border-t border-BorderColor2-0 mt-4 pt-4'>
            <p className='font-FiraSans text-TextColor2-0 flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0 text-[10px]'>
                {blogDateIcon}
              </span>
              {blogDate}
            </p>
            <p className='font-FiraSans text-TextColor2-0 flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0 text-xl'>
                {blogCommentIcon}
              </span>
              {blogComment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
