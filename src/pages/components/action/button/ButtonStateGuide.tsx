import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';

const StateExample = () => {
  const statusOptions = [
    { id: 'disabled', label: 'Disabled' },
    { id: 'loading', label: 'Loading' },
    { id: 'prompted', label: 'Prompted' },
  ];

  const exampleCode = `<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button prompted>Prompted</Button>`;

  return (
    <CodeExample code={exampleCode}>
      <FlexWrapper items="center" justify="center" classes="w-full" gap={6}>
        {statusOptions.map((option) => (
          <div key={option.id}>
            <FlexWrapper classes="!gap-3" direction="col" items="center">
              <Button
                disabled={option.id === 'disabled'}
                loading={option.id === 'loading'}
                prompted={option.id === 'prompted'}
                classes="min-w-[80px]"
              >
                Button
              </Button>
              <Typography variant="C1">{option.id}</Typography>
            </FlexWrapper>
          </div>
        ))}
      </FlexWrapper>
    </CodeExample>
  );
};

const ButtonStateGuide = () => {
  return (
    <FlexWrapper classes="size-full lg:flex-row" direction="col" items="start">
      <FlexWrapper classes="flex-1" items="start" direction="col" gap={4}>
        <Typography variant="H3">State</Typography>

        <Typography variant="B1" classes="font-semibold text-primary-500">
          Manage interactive states to provide visual feedback.
        </Typography>
      </FlexWrapper>

      <FlexWrapper
        items="start"
        direction="col"
        justify="start"
        classes="border-2 border-neutral-500/30 dark:border-neutral-100/30 w-full rounded-2xl flex-1"
        gap={6}
      >
        <StateExample />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default ButtonStateGuide;
