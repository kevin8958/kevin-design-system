import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import { propsColumn } from '@/constants/common';

type AppDocsPageShellProps = {
  title: string;
  description: string;
  breadcrumbItems: { label: string; href?: string }[];
  propsData: {
    id: string;
    property: string;
    type: string | string[];
    default: string;
    description: string;
  }[];
  children: React.ReactNode;
};

const AppDocsPageShell = ({
  title,
  description,
  breadcrumbItems,
  propsData,
  children,
}: AppDocsPageShellProps) => {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
            <Typography variant="H1">{title}</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              {description}
            </Typography>
          </FlexWrapper>

          {children}

          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default AppDocsPageShell;
