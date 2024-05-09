import ApiConnect from '../common/ApiConnect';

export default class Chapter {
  title: string | null = null;
  content: string | null = null;
  
  createChapter = async (obj: any,id:string): Promise<object> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      console.log(obj);
      const response = await apiConnect.post(`/chapter/${id}/chapter/`, {}, obj);
      const data = await response.json();
      if (response.ok) {
        const chapter = Object.assign(new Chapter(), data);
        return data;
      } else throw new Error('Incorrect Login Credentials');
    } catch (error) {
      console.log(error);
      return {};
    }
  };
}
