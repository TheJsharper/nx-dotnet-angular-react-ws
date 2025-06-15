import axios from 'axios';

describe('GET /api', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/api/message`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
  it('should return list of cars', async () => {
    const res = await axios.get(`/api/cars`);

    expect(res.status).toBe(200);
    
    expect(res.data.length).toBeGreaterThan(0);
  });
});
