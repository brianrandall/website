import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./components/part', () => () => null);
jest.mock('./components/part_lines', () => () => null);

test('portfolio features paid client software and preserves the original creative case studies', () => {
  render(<MemoryRouter initialEntries={['/portfolio?project=farm-ordering']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'Farm Inventory & Ordering' })).toBeTruthy();
  expect(screen.getByText(/planned spring 2027 rollout/i)).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Body Language' })).toBeTruthy();
  expect(screen.getAllByRole('button').length).toBe(12);
  expect(screen.queryByRole('button', { name: /twitter|babylon/i })).toBeNull();
});

test('technical product page explains PyMuz development status', () => {
  render(<MemoryRouter initialEntries={['/portfolio?project=pymuz']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'PyMuz' })).toBeTruthy();
  expect(screen.getByText(/Active prototype/i)).toBeTruthy();
});

test('PLEASE retains a direct case-study link, repository and usage examples', () => {
  render(<MemoryRouter initialEntries={['/portfolio?project=please']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'PLEASE' })).toBeTruthy();
  expect(screen.getByRole('link', { name: /View PLEASE on GitHub/ }).getAttribute('href')).toBe('https://github.com/brianrandall/please');
  expect(screen.getByText('please organize-photos --dry-run')).toBeTruthy();
});

test('the résumé route includes a printable version and recent experience', () => {
  render(<MemoryRouter initialEntries={['/resume']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'BRIAN RANDALL' })).toBeTruthy();
  expect(screen.getByRole('button', { name: /Print \/ Save as PDF/i })).toBeTruthy();
  expect(screen.getByText(/Paid Farm Client Engagement/i)).toBeTruthy();
});

test('home leads with current work and provides résumé navigation', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: /I figure out how things work/i })).toBeTruthy();
  expect(screen.getByRole('link', { name: /View résumé/i })).toBeTruthy();
});
