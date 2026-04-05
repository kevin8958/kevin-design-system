import Typography from '@/components/foundation/Typography';
import PrimaryGuide from '@/pages/components/foundation/colors/PrimaryGuide';
import SecondaryGuide from '@/pages/components/foundation/colors/SecondaryGuide';
import NeutralGuide from '@/pages/components/foundation/colors/NeutralGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import FlexWrapper from '@/components/layout/FlexWrapper';
import StatusGuide from '@/pages/components/foundation/colors/StatusGuide';

const ComponenColorsPage = () => {
  const breadcrumbItems = [
    { label: 'Components', href: '/components' },
    { label: 'Foundation', href: '/components/foundation' },
    { label: 'Colors', href: '/components/foundation/colors' },
  ];
  return (
    <div className="flex size-full flex-col items-start gap-4 sm:px-4 pb-[100px]">
      <BreadCrumb items={breadcrumbItems} />
      <FlexWrapper classes="w-full" justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <Typography variant="H1">Colors</Typography>
          <PrimaryGuide />
          <SecondaryGuide />
          <NeutralGuide />
          <StatusGuide />
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
};
export default ComponenColorsPage;
