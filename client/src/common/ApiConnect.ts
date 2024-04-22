

interface RequestOptions {
  method: string;
  headers: Record<string, string>;
  body: any;
}
export default class ApiConnect {
  private static request: RequestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: {},
  };

  static base: string = "http://localhost:5000";

  static instance = new ApiConnect();

  constructor() {
    Object.freeze(this);
  }

  static getInstance = async () => {
    return ApiConnect.instance == null ? new ApiConnect() : ApiConnect.instance;
  };

  public static async send(
    path: string,
    reqHeaders: object,
    method: string,
    body: object
  ): Promise<Response> {
    const userObj = JSON.parse(localStorage.getItem('user') || '{}');
    const user = userObj.auth;
    if (user) {
      ApiConnect.request.headers = {
        ...ApiConnect.request.headers,
        ...reqHeaders,
        Authorization: user,
      };
    } else {
      ApiConnect.request.headers = {
        ...ApiConnect.request.headers,
        ...reqHeaders,
      };
    }

    if (method) {
      ApiConnect.request.method = method;
    }
    
    if (body) {
      ApiConnect.request.body = JSON.stringify(body);
    }

    if(ApiConnect.request.method==="GET"){
      delete ApiConnect.request.body;
    }
    const response = await fetch(ApiConnect.base + path, ApiConnect.request);
    return response;
  }

  public async get(
    path: string,
    headers: Record<string, string>
  ): Promise<Response> {
    return await ApiConnect.send(path, headers,'',{});
  }

  public async post(
    path: string,
    headers: Record<string, string>,
    body:any
  ): Promise<Response> {
    return await ApiConnect.send(path, headers,'POST',body);
  }

  public async put(
    path: string,
    headers: Record<string, string>,
    body:any
  ): Promise<Response> {
    return await ApiConnect.send(path, headers,'PUT',body);
  }

  public async delete(
    path: string,
    headers: Record<string, string>
  ): Promise<Response> {
    return await ApiConnect.send(path, headers,'DELETE',{});
  }
}
