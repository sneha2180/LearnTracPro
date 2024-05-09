import ApiConnect from '../common/ApiConnect';

export default class Tutor {
  name: string | null = null;
  email: string | null = null;
  password: string | null = null;
  register = async (obj: any): Promise<object> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.post('/tutor/signup', {}, obj);
      const data = await response.json();
      if (response.ok) {
        const user = Object.assign(new Tutor(), data);
        user.password = obj.password;
        user.password = null;
        const userData = {
          id:data._id,
          email: data.email,
          name: data.name,
          auth: 'Basic ' + btoa(obj.email + ':' + obj.password),
        };
        return userData;
      } else throw new Error('Incorrect Login Credentials');
    } catch (error) {
      console.log(error);
      return {};
    }
  };
  signin = async (obj: any): Promise<object> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.post('/tutor/signin', {}, obj);
      const data = await response.json();
      if (response.ok) {
        const user = Object.assign(new Tutor(), data);
        user.password = obj.password;
        user.password = null;
        const userData = {
          id:data._id,
          email: data.email,
          name: data.name,
          auth: 'Basic ' + btoa(obj.email + ':' + obj.password),
          role:'tutor'
        };
        localStorage.setItem('user', JSON.stringify(userData));
        return data;
      } else throw new Error('Incorrect Login Credentials');
    } catch (error) {
      console.log(error);
      return {};
    }
  };
  async getTutor(id:string){
    try{
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.get(`/tutor/${id}`, {});
      const data = await response.json();
      return data;
    }catch(e){
      return {};
    }
  }
}
