import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowerList', () => {
  beforeEach(() => {
    console.log('running before each test')
  })
  beforeAll(() => {
    console.log('running once before all tests')
  })
  afterEach(() => {
    console.log('running after each test')
  })
  afterAll(() => {
    console.log('running after all tests')
  })
  it('should render follower div', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-div-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower div 1', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-div-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render follower div 2', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-div-0');
    expect(followerDivElement).toBeInTheDocument();
  });

});
