import Button from '@/components/action/Button';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { Link } from 'react-router-dom';
import {
  LuArrowRight,
  LuBox,
  LuComponent,
  LuPackage,
} from 'react-icons/lu';

const installCommand = 'npm install @kevinworks/design-system';
const localCheckCommand = `npm pack
npm install ./kevinworks-design-system-0.1.2.tgz`;
const usageExample = `import { Button, TextInput } from '@kevinworks/design-system';

export default function App() {
  return (
    <div>
      <TextInput label="Email" placeholder="Enter your email" />
      <Button>Continue</Button>
    </div>
  );
}`;

const steps = [
  {
    title: 'Install the package',
    description:
      'The package is now published to npm, so the standard install flow uses the package name directly.',
    icon: <LuPackage size={18} />,
    code: installCommand,
  },
  {
    title: 'Import the components you need',
    description:
      'Use direct imports from the package entry. Library styles are bundled automatically, so no extra stylesheet import is required.',
    icon: <LuComponent size={18} />,
    code: usageExample,
  },
  {
    title: 'Verify locally when needed',
    description:
      'For local smoke tests or release verification, you can still pack the current workspace and install it from a tarball.',
    icon: <LuBox size={18} />,
    code: localCheckCommand,
  },
];

export default function GettingStarted() {
  return (
    <FlexWrapper classes="w-full px-4 pb-20" direction="col" gap={8}>
      <section className="relative overflow-hidden rounded-[36px] border border-neutral-200 bg-gradient-to-br from-white via-secondary-50/60 to-secondary-100/70 px-6 py-12 shadow-sm dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 md:px-10 md:py-16">
        <div className="pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-secondary-300/25 blur-3xl dark:bg-primary-400/10" />
        <div className="pointer-events-none absolute left-0 top-1/2 size-52 -translate-y-1/2 rounded-full bg-secondary-400/20 blur-3xl dark:bg-secondary-400/10" />

        <FlexWrapper direction="col" items="start" gap={6} classes="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">
            <LuPackage size={14} />
            Getting Started
          </div>

          <FlexWrapper direction="col" items="start" gap={4}>
            <Typography variant="H1" classes="text-balance !text-neutral-900 dark:!text-neutral-50">
              Install Kevin Design System and start building faster
            </Typography>
            <Typography
              variant="B1"
              classes="max-w-3xl !font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              Kevin Design System is now published to npm. The install guide below reflects the live scoped package command, direct component imports, and an optional local tarball workflow for smoke testing.
            </Typography>
          </FlexWrapper>

          <div className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white/90 px-5 py-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-950">
            <Typography
              variant="C1"
              classes="mb-2 !text-neutral-500 dark:!text-neutral-400"
            >
              Install Command
            </Typography>
            <code className="block overflow-x-auto whitespace-pre-wrap text-sm font-medium text-secondary-700 dark:text-primary-300">
              {installCommand}
            </code>
          </div>

          <FlexWrapper gap={3} classes="flex-wrap">
            <Link to="/components">
              <Button icon={<LuArrowRight size={16} />} iconPosition="right">
                Browse Components
              </Button>
            </Link>
            <a
              href="#installation"
              className="inline-flex h-[36px] items-center rounded-lg border border-neutral-300 px-4 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              View Setup Guide
            </a>
          </FlexWrapper>
        </FlexWrapper>
      </section>

      <section
        id="installation"
        className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
      >
        <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <FlexWrapper direction="col" items="start" gap={6}>
            <div>
              <Typography variant="H3">Installation Flow</Typography>
              <Typography
                variant="B2"
                classes="mt-2 !font-normal !text-neutral-600 dark:!text-neutral-300"
              >
                This page now mirrors the live package setup: published npm install command, bundled library styles, emitted TypeScript types, and a local tarball verification path when you want to test changes before a release.
              </Typography>
            </div>

            <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950/70"
                >
                  <FlexWrapper direction="col" items="start" gap={3}>
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-full bg-secondary-100 text-secondary-700 dark:bg-primary-400/10 dark:text-primary-300">
                        {step.icon}
                      </div>
                      <div>
                        <Typography variant="H4">{`${index + 1}. ${step.title}`}</Typography>
                        <Typography
                          variant="B2"
                          classes="mt-1 !font-normal !text-neutral-500 dark:!text-neutral-400"
                        >
                          {step.description}
                        </Typography>
                      </div>
                    </div>

                    <div className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950">
                      <code className="block whitespace-pre-wrap break-all text-sm text-secondary-700 dark:text-primary-300">
                        {step.code}
                      </code>
                    </div>
                  </FlexWrapper>
                </div>
              ))}
            </FlexWrapper>
          </FlexWrapper>
        </div>

        <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <FlexWrapper direction="col" items="start" gap={5}>
            <div>
              <Typography variant="H3">Current Status</Typography>
              <Typography
                variant="B2"
                classes="mt-2 !font-normal !text-neutral-600 dark:!text-neutral-300"
              >
                The package is published and installable. The remaining work is mostly around release hygiene, broader validation, and keeping the docs aligned with each published version.
              </Typography>
            </div>

            <div className="w-full rounded-2xl border border-secondary-200 bg-secondary-50/70 p-4 dark:border-primary-400/20 dark:bg-primary-400/10">
              <Typography variant="H4" classes="!text-secondary-700 dark:!text-primary-300">
                Published to npm
              </Typography>
              <Typography
                variant="B2"
                classes="mt-2 !font-normal !text-neutral-700 dark:!text-neutral-200"
              >
                You can install the package today with `npm install @kevinworks/design-system`. The local tarball workflow is still useful when you want to test unreleased changes before publishing another version.
              </Typography>
            </div>

            <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
              <div className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950/70">
                <Typography variant="H4">Ready Now</Typography>
                <Typography
                  variant="B2"
                  classes="mt-2 !font-normal !text-neutral-600 dark:!text-neutral-300"
                >
                  npm installation, library entry exports, bundled component styles, emitted TypeScript declarations, and local consumer smoke testing.
                </Typography>
              </div>

              <div className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950/70">
                <Typography variant="H4">Next Up</Typography>
                <Typography
                  variant="B2"
                  classes="mt-2 !font-normal !text-neutral-600 dark:!text-neutral-300"
                >
                  Release notes, versioned changelog updates, and broader consumer validation across real projects and frameworks.
                </Typography>
              </div>
            </FlexWrapper>
          </FlexWrapper>
        </div>
      </section>
    </FlexWrapper>
  );
}
