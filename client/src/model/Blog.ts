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
}
