/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogPostBy,
  blogUrl,
  blogTitle,
  blogBtn,
  blogBtnIcon,
}) => {
  return (
    <div className='group transition-all duration-500 rounded-lg bg-BodyBg2-0'>
      <div className='relative rounded-xl overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
      </div>
      <div className='rounded-b-lg relative z-20 flex justify-center transition-all duration-500 px-4 sm:px-[30px] lg:px-5 2xl:px-[30px] pt-9 pb-6'>
        <div>
          <div className='flex gap-6 mb-3'>
            <p className='font-FiraSans text-white py-1 px-4 bg-PrimaryColor-0 inline-block rounded-r-full text-sm uppercase'>
              {blogPostBy}
            </p>
            <p className='font-FiraSans text-TextColor-0 flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0 text-[10px]'>
                {blogDateIcon}
              </span>
              {blogDate}
            </p>
          </div>
          <Link to={blogUrl}>
            <button className='font-FiraSans text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[22px] text-white mt-2 mb-5'>
              {blogTitle}
            </button>
          </Link>
          <Link
            to={blogUrl}
            className='inline-block relative'
          >
            <button className='flex items-center gap-2 font-FiraSans uppercase overflow-hidden font-medium text-sm'>
              <span className='-ml-[76px] text-white transition-all duration-500 group-hover:ml-0'>
                {blogBtn}
              </span>
              <span className='text-[22px] text-white'>
                {blogBtnIcon}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
