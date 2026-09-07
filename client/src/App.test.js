import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
jest.mock('./components/part', () => () => null);
jest.mock('./components/part_lines', () => () => null);
test('work opens a shareable creative project and excludes clone projects', () => {
 render(<MemoryRouter initialEntries={['/portfolio?project=liberia']}><App/></MemoryRouter>);
 expect(screen.getByRole('heading', {name:'Liberia'})).toBeTruthy();
 expect(screen.queryByRole('button', {name:/twitter|babylon/i})).toBeNull();
 expect(screen.getAllByRole('button').length).toBe(9);
});

test('PLEASE has a direct case-study link, repository and usage examples', () => {
 render(<MemoryRouter initialEntries={['/portfolio?project=please']}><App/></MemoryRouter>);
 expect(screen.getByRole('heading', {name:'PLEASE'})).toBeTruthy();
 expect(screen.getByRole('link', {name:/View PLEASE on GitHub/}).getAttribute('href')).toBe('https://github.com/brianrandall/please');
 expect(screen.getByText('please organize-photos --dry-run')).toBeTruthy();
});
