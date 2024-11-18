import { FaCircle } from 'react-icons/fa6';
import blogThumb from '/images/blog_1.png';
import blogThumb2 from '/images/blog_2.png';
import blogThumb3 from '/images/blog_3.png';
import BlogCard from './BlogCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const BlogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaCircle />,
    blogDate: '04 Mar, 2024',
    blogPostBy: 'TECHNOLOGY',
    blogUrl: '/blog_details',
    blogTitle: 'Globally disintermediate exten services Planning',
    blogBtn: 'Read More',
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaCircle />,
    blogDate: '14 Mar, 2024',
    blogPostBy: 'Business',
    blogUrl: '/blog_details',
    blogTitle: 'Sustainability Consulting for Business Planning',
    blogBtn: 'Read More',
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDate: '24 Mar, 2024',
    blogDateIcon: <FaCircle />,
    blogPostBy: 'Consulting',
    blogUrl: '/blog_details',
    blogTitle: 'Consulting Industry changing Business Landscape',
    blogBtn: 'Read More',
    blogBtnIcon: <BsArrowRight />,
  },
];

const Blog = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <div className='Container'>
      <section className='pt-28 pb-[120px] border-t border-HeadingColor2-0 border-opacity-15 blog2'>
        <div className='text-center'>
          <h5 className='font-FiraSans text-sm sm:text-base font-semibold text-PrimaryColor2-0'>
            LATEST BLOG
          </h5>
          <h1 className='font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor2-0 mt-[18px]'>
            Read Our Latest Insights from the
            <br />
            Latest Blog Articles
          </h1>
        </div>
        <div className='mt-[56px]'>
          <Swiper
            {...settings}
            pagination={pagination}
            modules={[Pagination]}
          >
            {BlogData.map(
              ({
                id,
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
                  <SwiperSlide key={id}>
                    <div className='pb-[70px]'>
                      <BlogCard
                        blogThumb={blogThumb}
                        blogDateIcon={blogDateIcon}
                        blogDate={blogDate}
                        blogPostBy={blogPostBy}
                        blogUrl={blogUrl}
                        blogTitle={blogTitle}
                        blogBtn={blogBtn}
                        blogBtnIcon={blogBtnIcon}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Blog;
