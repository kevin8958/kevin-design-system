import MobileController from '@/pages/components/mobile/shared/MobileController';

const sizes: NonNullable<Action.ActionSheetProps['size']>[] = ['sm', 'md', 'lg'];

type ActionSheetControllerGuideProps = {
  size: NonNullable<Action.ActionSheetProps['size']>;
  onSizeChange: (next: NonNullable<Action.ActionSheetProps['size']>) => void;
};

const ActionSheetControllerGuide = ({
  size,
  onSizeChange,
}: ActionSheetControllerGuideProps) => {
  return (
    <MobileController
      controls={[
        {
          label: 'Size',
          value: size,
          defaultValue: 'sm',
          options: sizes,
          onChange: (next) =>
            onSizeChange(next as NonNullable<Action.ActionSheetProps['size']>),
        },
      ]}
    />
  );
};

export default ActionSheetControllerGuide;
