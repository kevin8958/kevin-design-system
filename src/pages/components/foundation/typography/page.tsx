import Typography from '@/components/foundation/Typography';
import BodyGuide from '@/pages/components/foundation/typography/BodyGuide';
import CaptionGuide from '@/pages/components/foundation/typography/CaptionGuide';
import HeadingGuide from '@/pages/components/foundation/typography/HeadingGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import FlexWrapper from '@/components/layout/FlexWrapper';

const ComponenTypographyPage = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system' },
    { label: 'Typography', href: '/components/foundation/typography' },
  ];
  return (
    <div className="flex size-full flex-col items-start gap-4 px-4 pb-[100px]">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper classes="w-full" justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1">Typography</Typography>
          <HeadingGuide />
          <BodyGuide />
          <CaptionGuide />
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
};
export default ComponenTypographyPage;
