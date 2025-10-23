import { render, screen, within } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  test('shows total with a single participant', () => {
    const participants = [
      { name: 'Alice', time: '1.50', rate: '40' }
    ];
    render(<Table participants={participants} />);
  // cost = 1.5 * 40 = 60.00
  const totalRow = screen.getByRole('row', { name: /Total cost/i });
  expect(totalRow).toBeInTheDocument();
  expect(within(totalRow).getByText((t) => t.includes('60.00'))).toBeInTheDocument();
  expect(within(totalRow).getByText((t) => t.includes('€'))).toBeInTheDocument();
  });

  test('renders nothing when no participants', () => {
    render(<Table participants={[]} />);
    // Table component returns an empty div when no participants
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });
});
