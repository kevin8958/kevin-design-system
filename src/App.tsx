import { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Gnb from '@/components/layout/Gnb';
import Snb from '@/components/layout/Snb';
import ScrollTopButton from '@/components/layout/ScrollTopButton';
import { ThemeProvider } from '@/providers/ThemeProvider';
import GettingStarted from './pages/GettingStarted';
import Components from './pages/Components';
import Colors from '@/pages/components/foundation/colors/page';
import Typography from '@/pages/components/foundation/typography/page';
import ComponentButtonPage from '@/pages/components/action/button/ComponentButtonPage';
import ComponentButtonGroupPage from '@/pages/components/action/buttonGroup/ComponentButtonGroupPage';
import ComponentAccordionPage from '@/pages/components/action/accordion/ComponentAccordionPage';
import ComponentDropdownPage from '@/pages/components/action/dropdown/ComponentDropdownPage';
import ComponentPopoverPage from '@/pages/components/action/popover/ComponentPopoverPage';
import ComponentActionSheetPage from '@/pages/components/mobile/actionSheet/ComponentActionSheetPage';
import ComponentModalPage from './pages/components/action/modal/ComponentModalPage';
import ComponentDrawerPage from './pages/components/action/drawer/ComponentDrawerPage';
import ComponentTextInputPage from '@/pages/components/input/textinput/ComponentTextInputPage';
import ComponentTextareaPage from '@/pages/components/input/textarea/ComponentTextareaPage';
import ComponentSelectPage from '@/pages/components/input/select/ComponentSelectPage';
import ComponentComboboxPage from '@/pages/components/input/combobox/ComponentComboboxPage';
import ComponentCheckboxPage from '@/pages/components/input/checkbox/ComponentCheckboxPage';
import ComponentRadioPage from '@/pages/components/input/radio/ComponentRadioPage';
import ComponentSwitchPage from '@/pages/components/input/switch/ComponentSwitchPage';
import ComponentDatePickerPage from '@/pages/components/input/datepicker/ComponentDatePickerPage';
import ComponentUploadDropzonePage from '@/pages/components/input/uploadDropzone/ComponentUploadDropzonePage';
import ComponentPaginationPage from '@/pages/components/navigation/pagination/ComponentPaginationPage';
import ComponentStepperPage from '@/pages/components/navigation/stepper/ComponentStepperPage';
import ComponentTabsPage from '@/pages/components/navigation/tabs/ComponentTabsPage';
import ComponentBreadcrumbPage from '@/pages/components/navigation/breadcrumb/ComponentBreadcrumbPage';
import ComponentAvatarPage from '@/pages/components/dataDisplay/avatar/ComponentAvatarPage';
import ComponentBadgePage from '@/pages/components/dataDisplay/badge/ComponentBadgePage';
import ComponentDescriptionListPage from '@/pages/components/dataDisplay/descriptionList/ComponentDescriptionListPage';
import ComponentEmptyStatePage from '@/pages/components/dataDisplay/emptyState/ComponentEmptyStatePage';
import ComponentMetricCardPage from '@/pages/components/dataDisplay/metricCard/ComponentMetricCardPage';
import ComponentTablePage from '@/pages/components/dataDisplay/table/ComponentTablePage';
import ComponentTagPage from '@/pages/components/dataDisplay/tag/ComponentTagPage';
import ComponentTooltipPage from '@/pages/components/dataDisplay/tooltip/ComponentTooltipPage';
import ComponentAlertPage from '@/pages/components/feedback/alert/ComponentAlertPage';
import ComponentProgressPage from '@/pages/components/feedback/progress/ComponentProgressPage';
import ComponentSkeletonPage from '@/pages/components/feedback/skeleton/ComponentSkeletonPage';
import ComponentToastPage from '@/pages/components/feedback/toast/ComponentToastPage';
import ComponentGridPage from '@/pages/components/layout/grid/ComponentGridPage';
import ComponentDividerPage from '@/pages/components/layout/divider/ComponentDividerPage';
import ComponentCountUpPage from '@/pages/components/interaction/countUp/ComponentCountUpPage';
import ComponentSplitTextPage from '@/pages/components/interaction/splitText/ComponentSplitTextPage';
import ComponentStickerPage from '@/pages/components/interaction/sticker/ComponentStickerPage';
import ComponentCategoryPage from '@/pages/components/category/ComponentCategoryPage';
import ComponentBottomNavigationPage from '@/pages/components/mobile/bottomNavigation/ComponentBottomNavigationPage';
import ComponentTopAppBarPage from '@/pages/components/mobile/topAppBar/ComponentTopAppBarPage';
import ComponentBottomSheetPage from '@/pages/components/mobile/bottomSheet/ComponentBottomSheetPage';
import ComponentMobileNavDrawerPage from '@/pages/components/mobile/mobileNavDrawer/ComponentMobileNavDrawerPage';
import ComponentAppAccordionPage from '@/pages/components/app/accordion/ComponentAppAccordionPage';
import ComponentAppActionSheetPage from '@/pages/components/app/actionSheet/ComponentAppActionSheetPage';
import ComponentAppButtonPage from '@/pages/components/app/button/ComponentAppButtonPage';
import ComponentAppButtonGroupPage from '@/pages/components/app/buttonGroup/ComponentAppButtonGroupPage';
import ComponentAppDrawerPage from '@/pages/components/app/drawer/ComponentAppDrawerPage';
import ComponentAppDropdownPage from '@/pages/components/app/dropdown/ComponentAppDropdownPage';
import ComponentAppModalPage from '@/pages/components/app/modal/ComponentAppModalPage';
import ComponentAppPopoverPage from '@/pages/components/app/popover/ComponentAppPopoverPage';
import ComponentAppTextInputPage from '@/pages/components/app/textInput/ComponentAppTextInputPage';
import ComponentAppTextareaPage from '@/pages/components/app/textarea/ComponentAppTextareaPage';
import ComponentAppSelectPage from '@/pages/components/app/select/ComponentAppSelectPage';
import ComponentAppComboboxPage from '@/pages/components/app/combobox/ComponentAppComboboxPage';
import ComponentAppCheckboxPage from '@/pages/components/app/checkbox/ComponentAppCheckboxPage';
import ComponentAppRadioPage from '@/pages/components/app/radio/ComponentAppRadioPage';
import ComponentAppSwitchPage from '@/pages/components/app/switch/ComponentAppSwitchPage';
import ComponentAppDatePickerPage from '@/pages/components/app/datepicker/ComponentAppDatePickerPage';
import ComponentAppUploadDropzonePage from '@/pages/components/app/uploadDropzone/ComponentAppUploadDropzonePage';
import ComponentAppPaginationPage from '@/pages/components/app/pagination/ComponentAppPaginationPage';
import ComponentAppStepperPage from '@/pages/components/app/stepper/ComponentAppStepperPage';
import ComponentAppTabsPage from '@/pages/components/app/tabs/ComponentAppTabsPage';
import ComponentAppBreadcrumbPage from '@/pages/components/app/breadcrumb/ComponentAppBreadcrumbPage';
import ComponentAppAvatarPage from '@/pages/components/app/avatar/ComponentAppAvatarPage';
import ComponentAppBadgePage from '@/pages/components/app/badge/ComponentAppBadgePage';
import ComponentAppDescriptionListPage from '@/pages/components/app/descriptionList/ComponentAppDescriptionListPage';
import ComponentAppEmptyStatePage from '@/pages/components/app/emptyState/ComponentAppEmptyStatePage';
import ComponentAppMetricCardPage from '@/pages/components/app/metricCard/ComponentAppMetricCardPage';
import ComponentAppTablePage from '@/pages/components/app/table/ComponentAppTablePage';
import ComponentAppTagPage from '@/pages/components/app/tag/ComponentAppTagPage';
import ComponentAppTooltipPage from '@/pages/components/app/tooltip/ComponentAppTooltipPage';
import ComponentAppAlertPage from '@/pages/components/app/alert/ComponentAppAlertPage';
import ComponentAppProgressPage from '@/pages/components/app/progress/ComponentAppProgressPage';
import ComponentAppSkeletonPage from '@/pages/components/app/skeleton/ComponentAppSkeletonPage';
import ComponentAppToastPage from '@/pages/components/app/toast/ComponentAppToastPage';

function BaseLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="relative w-full min-h-screen">
      <Gnb isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      {/* desktopHidden을 넘겨서 모바일에서만 작동하게 함 */}
      <Snb isOpen={isOpen} onClose={() => setIsOpen(false)} desktopHidden />
      <main className="w-full max-w-7xl mx-auto px-4 pt-4">
        <Outlet />
      </main>
      <ScrollTopButton />
    </div>
  );
}

function DocsLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="relative w-full min-h-screen">
      <Gnb isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <FlexWrapper
        items="start"
        gap={0}
        classes="relative! w-full max-w-7xl mx-auto min-h-[calc(100dvh-64px)]"
      >
        <Snb isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <main
          ref={mainRef}
          className="flex flex-col flex-1 px-4 overflow-scroll pt-4"
        >
          <Outlet />
        </main>
      </FlexWrapper>
      <ScrollTopButton scrollTargetRef={mainRef} />
    </div>
  );
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<GettingStarted />} />
          <Route path="/getting-started" element={<GettingStarted />} />
        </Route>

        <Route path="/components" element={<DocsLayout />}>
          <Route index element={<Components />} />
          <Route path=":categoryId" element={<ComponentCategoryPage />} />
          {/* foundation */}
          <Route path="foundation/colors" element={<Colors />} />
          <Route path="foundation/typography" element={<Typography />} />
          {/* action */}
          <Route path="action/accordion" element={<ComponentAccordionPage />} />
          <Route path="action/button" element={<ComponentButtonPage />} />
          <Route
            path="action/buttonGroup"
            element={<ComponentButtonGroupPage />}
          />
          <Route path="action/dropdown" element={<ComponentDropdownPage />} />
          <Route path="action/popover" element={<ComponentPopoverPage />} />
          <Route
            path="action/actionSheet"
            element={<ComponentActionSheetPage />}
          />
          <Route path="action/modal" element={<ComponentModalPage />} />
          <Route path="action/drawer" element={<ComponentDrawerPage />} />
          {/* input */}
          <Route path="input/textinput" element={<ComponentTextInputPage />} />
          <Route path="input/textarea" element={<ComponentTextareaPage />} />
          <Route path="input/select" element={<ComponentSelectPage />} />
          <Route path="input/combobox" element={<ComponentComboboxPage />} />
          <Route path="input/checkbox/*" element={<ComponentCheckboxPage />} />
          <Route path="input/radio/*" element={<ComponentRadioPage />} />
          <Route path="input/switch/*" element={<ComponentSwitchPage />} />
          <Route
            path="input/datepicker/*"
            element={<ComponentDatePickerPage />}
          />
          <Route
            path="input/uploadDropzone"
            element={<ComponentUploadDropzonePage />}
          />
          <Route
            path="navigation/pagination"
            element={<ComponentPaginationPage />}
          />
          <Route path="navigation/stepper" element={<ComponentStepperPage />} />
          <Route path="navigation/tabs" element={<ComponentTabsPage />} />
          <Route
            path="navigation/breadcrumb"
            element={<ComponentBreadcrumbPage />}
          />
          <Route path="dataDisplay/avatar" element={<ComponentAvatarPage />} />
          <Route path="dataDisplay/badge" element={<ComponentBadgePage />} />
          <Route
            path="dataDisplay/descriptionList"
            element={<ComponentDescriptionListPage />}
          />
          <Route
            path="dataDisplay/emptyState"
            element={<ComponentEmptyStatePage />}
          />
          <Route
            path="dataDisplay/metricCard"
            element={<ComponentMetricCardPage />}
          />
          <Route path="dataDisplay/table" element={<ComponentTablePage />} />
          <Route path="dataDisplay/tag" element={<ComponentTagPage />} />
          <Route
            path="dataDisplay/tooltip"
            element={<ComponentTooltipPage />}
          />
          <Route path="feedback/alert" element={<ComponentAlertPage />} />
          <Route path="feedback/progress" element={<ComponentProgressPage />} />
          <Route path="feedback/skeleton" element={<ComponentSkeletonPage />} />
          <Route path="feedback/toast" element={<ComponentToastPage />} />
          <Route path="layout/grid" element={<ComponentGridPage />} />
          <Route path="layout/divider" element={<ComponentDividerPage />} />
          <Route
            path="interaction/splitText"
            element={<ComponentSplitTextPage />}
          />
          <Route path="interaction/sticker" element={<ComponentStickerPage />} />
          <Route
            path="interaction/countUp"
            element={<ComponentCountUpPage />}
          />
          <Route
            path="mobile/bottomNavigation"
            element={<ComponentBottomNavigationPage />}
          />
          <Route path="mobile/topAppBar" element={<ComponentTopAppBarPage />} />
          <Route
            path="mobile/bottomSheet"
            element={<ComponentBottomSheetPage />}
          />
          <Route
            path="mobile/navDrawer"
            element={<ComponentMobileNavDrawerPage />}
          />
          <Route path="app/accordion" element={<ComponentAppAccordionPage />} />
          <Route
            path="app/actionSheet"
            element={<ComponentAppActionSheetPage />}
          />
          <Route path="app/button" element={<ComponentAppButtonPage />} />
          <Route
            path="app/buttonGroup"
            element={<ComponentAppButtonGroupPage />}
          />
          <Route path="app/drawer" element={<ComponentAppDrawerPage />} />
          <Route path="app/dropdown" element={<ComponentAppDropdownPage />} />
          <Route path="app/modal" element={<ComponentAppModalPage />} />
          <Route path="app/popover" element={<ComponentAppPopoverPage />} />
          <Route path="app/textInput" element={<ComponentAppTextInputPage />} />
          <Route path="app/textarea" element={<ComponentAppTextareaPage />} />
          <Route path="app/select" element={<ComponentAppSelectPage />} />
          <Route path="app/combobox" element={<ComponentAppComboboxPage />} />
          <Route path="app/checkbox" element={<ComponentAppCheckboxPage />} />
          <Route path="app/radio" element={<ComponentAppRadioPage />} />
          <Route path="app/switch" element={<ComponentAppSwitchPage />} />
          <Route path="app/datepicker" element={<ComponentAppDatePickerPage />} />
          <Route
            path="app/uploadDropzone"
            element={<ComponentAppUploadDropzonePage />}
          />
          <Route path="app/pagination" element={<ComponentAppPaginationPage />} />
          <Route path="app/stepper" element={<ComponentAppStepperPage />} />
          <Route path="app/tabs" element={<ComponentAppTabsPage />} />
          <Route path="app/breadcrumb" element={<ComponentAppBreadcrumbPage />} />
          <Route path="app/avatar" element={<ComponentAppAvatarPage />} />
          <Route path="app/badge" element={<ComponentAppBadgePage />} />
          <Route
            path="app/descriptionList"
            element={<ComponentAppDescriptionListPage />}
          />
          <Route path="app/emptyState" element={<ComponentAppEmptyStatePage />} />
          <Route path="app/metricCard" element={<ComponentAppMetricCardPage />} />
          <Route path="app/table" element={<ComponentAppTablePage />} />
          <Route path="app/tag" element={<ComponentAppTagPage />} />
          <Route path="app/tooltip" element={<ComponentAppTooltipPage />} />
          <Route path="app/alert" element={<ComponentAppAlertPage />} />
          <Route path="app/progress" element={<ComponentAppProgressPage />} />
          <Route path="app/skeleton" element={<ComponentAppSkeletonPage />} />
          <Route path="app/toast" element={<ComponentAppToastPage />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}
export default App;
