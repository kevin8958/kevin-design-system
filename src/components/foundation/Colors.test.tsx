import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter 추가
import ComponenColorsPage from '@/pages/components/foundation/colors/page';

describe('Colors Foundation Page', () => {
  it('should render all color guide sections', () => {
    // MemoryRouter로 감싸서 렌더링
    render(
      <MemoryRouter>
        <ComponenColorsPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', { level: 1, name: 'Colors' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Primary/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Secondary/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Neutral/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Status/i }),
    ).toBeInTheDocument();
  });

  it('should render the breadcrumb with correct items', () => {
    render(
      <MemoryRouter>
        <ComponenColorsPage />
      </MemoryRouter>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Design System')).toBeInTheDocument();
  });
});
