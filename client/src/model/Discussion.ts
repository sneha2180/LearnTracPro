import ApiConnect from '../common/ApiConnect';

export default class Discussion {
  title: string | null = null;
  content: string | null = null;
  userId: string | null = null;
  createdAt: number | null = null;
  updatedAt: number | null = null;
  comments:any = null;
  static getAllDiscussions = async (): Promise<object> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.get('/discussion', {});
      const data = await response.json();
      return data;
    } catch (e) {
      return {};
    }
  };
  async getDiscussion(id:string){
    try{
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.get(`/discussion/${id}`, {});
      const data = await response.json();
      return data;
    }catch(e){
      return {};
    }
  }
  createComment = async (obj: any,id:string): Promise<boolean> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.post(`/discussion/${id}/comments`, {}, obj);
      const data = await response.json();
      if (response.ok) {
        return true;
      } else throw new Error('Incorrect Login Credentials');
    } catch (error) {
      return false;
    }
  };

  createDiscussion = async (obj: any): Promise<boolean> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      obj = {...obj,"createdAt":Date.now(),"updatedAt":Date.now(),"comments":[]}
      const response = await apiConnect.post(`/discussion/`, {}, obj);
      const data = await response.json();
      if (response.ok) {
        return true;
      } else throw new Error('Incorrect Login Credentials');
    } catch (error) {
      return false;
    }
  };
}
