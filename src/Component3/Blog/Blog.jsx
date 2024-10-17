import { FaCircle } from "react-icons/fa6";
import blogThumb from '/images/blog3_1.png';
import blogThumb2 from '/images/blog3_2.png';
import blogThumb3 from '/images/blog3_3.png';
import border from '/images/hero_border.png';
import BlogCard from "./BlogCard";
import { CiHeart } from "react-icons/ci";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogThumbTitle: 'Creative',
    blogDateIcon: <FaCircle />,
    blogDate: '04 Mar, 2024',
    blogCommentIcon: <CiHeart />,
    blogComment: '2 Comments',
    blogUrl: '/blog_details',
    blogTitle: 'Globally disintermediate exten services resource',
    blogDesc:
      'Continually plagiarizes virtual web services action items. Globally build',
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogThumbTitle: 'Creative',
    blogDateIcon: <FaCircle />,
    blogDate: '14 Mar, 2024',
    blogCommentIcon: <CiHeart />,
    blogComment: '2 Comments',
    blogUrl: '/blog_details',
    blogTitle: 'Consulting Industry changing Business Landscape',
    blogDesc:
      'Continually plagiarizes virtual web services action items. Globally build',
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogThumbTitle: 'Creative',
    blogDateIcon: <FaCircle />,
    blogDate: '24 Mar, 2024',
    blogCommentIcon: <CiHeart />,
    blogComment: '2 Comments',
    blogUrl: '/blog_details',
    blogTitle: 'Sustainability Consulting for Business Planning',
    blogDesc:
      'Continually plagiarizes virtual web services action items. Globally build',
  },
];

const Blog = () => {
  return (
    <section className='bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-center bg-cover py-28'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
            LATEST BLOG
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
            Read Our Latest Insights from the <br /> Latest Blog Articles
            <img
              src={border}
              draggable='false'
              className='absolute bottom-0 left-1/2 -translate-x-1/2'
            />
          </h1>
        </div>
        <div className='mt-[60px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {blogData.map(
              ({
                id,
                blogThumb,
                blogThumbTitle,
                blogDateIcon,
                blogDate,
                blogCommentIcon,
                blogComment,
                blogUrl,
                blogTitle,
                blogDesc,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogThumbTitle={blogThumbTitle}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogCommentIcon={blogCommentIcon}
                      blogComment={blogComment}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogDesc={blogDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
