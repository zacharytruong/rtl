const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Zach',
          last: 'Truong'
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/39.jpg'
        },
        login: {
          username: 'ThePhonyGoat'
        }
      }
    ]
  }
};

const axios = {
  get: jest.fn().mockResolvedValue(mockResponse)
};

export default axios;
