import FlexWrapper from '@/components/layout/FlexWrapper';
import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import GuideSection from '@/components/layout/GuideSection';

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
    <CodeExample code={exampleCode} className="flex-1 min-w-[320px]">
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
    <GuideSection
      title="State"
      description="Manage interactive states to provide visual feedback."
      example={<StateExample />}
    />
  );
};

export default ButtonStateGuide;
