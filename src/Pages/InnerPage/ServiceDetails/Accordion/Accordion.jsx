import FaqAccordion from "./AccordionMain";

const Accordion = () => {
  //  All Faqs and  answers.
  const Accordions = [
    {
      title: 'How to Install Booking Plugin on WP?',
      text: 'Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally',
      active: true,
    },
    {
      title: 'What is the Best Extension for Marketing?',
      text: 'Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally',
      active: false,
    },
    {
      title: 'Do You have any custom Service?',
      text: 'Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally',
      active: false,
    },
    {
      title: 'How to Change my Username from cPannel?',
      text: 'Dramatically harness cross-platform best practices whereas business services. Conveniently formula standards in innovation with wireless Globally engage cross-media leadership best breed experience rather than bricks-and-clicks infomediaries monotonectally',
      active: false,
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-28 bg-[url('/images/faq-bg.jpg')] bg-cover bg-no-repeat
     bg-center"
    >
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3'>
            {`FAQ’s`}
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
            Freequently Asked Questions
            <br />
            Portable Services
          </h1>
        </div>
        <div className='w-full mx-auto max-w-[850px] mt-12'>
          <div>
            {Accordions.map((faq, index) => (
              <FaqAccordion
                key={index}
                faqIcon={faq.faqIcon}
                title={faq.title}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </FaqAccordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
