import { FaAngleRight, FaArrowRightLong, FaCircle } from 'react-icons/fa6';
import blogGridThumb from '/images/blog1.png';
import blogGridThumb2 from '/images/blog2.png';
import blogGridThumb3 from '/images/blog3.png';
import blogGridThumb4 from '/images/blog4.png';
import blogGridThumb5 from '/images/blog5.png';
import blogGridThumb6 from '/images/blog6.png';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import BlogGridCard from './BlogGridCard';
import { BsArrowRight } from 'react-icons/bs';

const BlogData = [
  {
    id: 1,
    blogGridThumb: blogGridThumb,
    blogGridDateIcon: <FaCircle />,
    blogGridDate: '04 Mar, 2024',
    blogGridPostBy: 'TECHNOLOGY',
    blogGridUrl: '/blog_details',
    blogGridTitle: 'Globally disintermediate exten services Planning',
    blogGridBtn: 'Read More',
    blogGridBtnIcon: <BsArrowRight />,
  },
  {
    id: 2,
    blogGridThumb: blogGridThumb2,
    blogGridDateIcon: <FaCircle />,
    blogGridDate: '14 Mar, 2024',
    blogGridPostBy: 'Business',
    blogGridUrl: '/blog_details',
    blogGridTitle: 'Sustainability Consulting for Business Planning',
    blogGridBtn: 'Read More',
    blogGridBtnIcon: <BsArrowRight />,
  },
  {
    id: 3,
    blogGridThumb: blogGridThumb3,
    blogGridDate: '24 Mar, 2024',
    blogGridDateIcon: <FaCircle />,
    blogGridPostBy: 'Consulting',
    blogGridUrl: '/blog_details',
    blogGridTitle: 'Consulting Industry changing Business Landscape',
    blogGridBtn: 'Read More',
    blogGridBtnIcon: <BsArrowRight />,
  },
  {
    id: 4,
    blogGridThumb: blogGridThumb4,
    blogGridDate: '17 May, 2024',
    blogGridDateIcon: <FaCircle />,
    blogGridPostBy: 'Consulting',
    blogGridUrl: '/blog_details',
    blogGridTitle: 'Consulting Industry changing Business Landscape',
    blogGridBtn: 'Read More',
    blogGridBtnIcon: <BsArrowRight />,
  },
  {
    id: 5,
    blogGridThumb: blogGridThumb5,
    blogGridDate: '24 Jun, 2024',
    blogGridDateIcon: <FaCircle />,
    blogGridPostBy: 'Advising',
    blogGridUrl: '/blog_details',
    blogGridTitle: 'Globally disintermediate exten services Planning',
    blogGridBtn: 'Read More',
    blogGridBtnIcon: <BsArrowRight />,
  },
  {
    id: 6,
    blogGridThumb: blogGridThumb6,
    blogGridDate: '24 May, 2024',
    blogGridDateIcon: <FaCircle />,
    blogGridPostBy: 'IT Solution',
    blogGridUrl: '/blog_details',
    blogGridTitle: 'Consulting Industry changing Business Landscape',
    blogGridBtn: 'Read More',
    blogGridBtnIcon: <BsArrowRight />,
  },
];

const BlogGrid = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Blog Grid'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Blog Grid'}
      />
      <section className='pt-28'>
        <div className='Container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {BlogData.map(
              ({
                id,
                blogGridThumb,
                blogGridDateIcon,
                blogGridDate,
                blogGridPostBy,
                blogGridUrl,
                blogGridTitle,
                blogGridBtn,
                blogGridBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogGridCard
                      blogGridThumb={blogGridThumb}
                      blogGridDateIcon={blogGridDateIcon}
                      blogGridDate={blogGridDate}
                      blogGridPostBy={blogGridPostBy}
                      blogGridUrl={blogGridUrl}
                      blogGridTitle={blogGridTitle}
                      blogGridBtn={blogGridBtn}
                      blogGridBtnIcon={blogGridBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <div>
        <ul className='flex items-center gap-2 justify-center pb-[120px] pt-[80px]'>
          <li>
            <button className='h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-BodyBg-0 flex justify-center items-center text-white transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-100 hover:before:scale-100'>
              01
            </button>
          </li>
          <li>
            <button className='h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-BodyBg-0 flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              02
            </button>
          </li>
          <li>
            <button className='h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-BodyBg-0 flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              03
            </button>
          </li>
          <li>
            <button className='h-[50px] w-[50px] font-FiraSans rounded-full border-BorderColor2-0 border bg-BodyBg-0 flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogGrid;
