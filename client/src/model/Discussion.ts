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
}
