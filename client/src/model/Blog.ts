import ApiConnect from '../common/ApiConnect';

export default class Blog {
  title: string | null = null;
  content: string | null = null;
  userId: string | null = null;
  createdAt: number | null = null;
  updatedAt: number | null = null;
  static getAllBlogs = async (): Promise<object> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.get('/blog', {});
      const data = await response.json();
      return data;
    } catch (e) {
      return {};
    }
  };
  async getBlog(id:string){
    try{
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.get(`/blog/${id}`, {});
      const data = await response.json();
      return data;
    }catch(e){
      return {};
    }
  }
  createBlog = async (obj: any): Promise<boolean> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      obj = {...obj,"createdAt":Date.now(),"updatedAt":Date.now()};
      const response = await apiConnect.post('/blog/', {}, obj);
      const data = await response.json();
      if (response.ok) {
        const blog = Object.assign(new Blog(), data);
        return true;
      } else throw new Error('Incorrect Login Credentials');
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}
