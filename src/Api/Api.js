import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const client = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {},
  withCredentials: true,
});

const mock = new MockAdapter(client, { delayResponse: 3000 });

mock.onPost("/sessions").reply(() => {
  return [
    200,
    {
      token: "TOKEN_VALID",
      user: {
        id: 1,
        name: "Jose",
      },
    },
  ];
});

mock.onDelete("/sessions").reply(200);
//mock.onDelete("/sessions").reply(500);

mock.onGet("/sessions").reply(() => {
  return [200, { token: "TOKEN_VALID", user: { id: 1, name: "jose" } }];
});

export default client;
