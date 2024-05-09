import ApiConnect from '../common/ApiConnect';

export default class Course {
  static getAllCourses = async (): Promise<object> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.get('/course', {});
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      return {};
    }
  };
  async getCourse(id:string){
    try{
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.get(`/course/${id}`, {});
      const data = await response.json();
      return data;
    }catch(e){
      return {};
    }
  }
  createCourse = async (obj: any): Promise<object> => {
    try {
      const apiConnect = await ApiConnect.getInstance();
      const response = await apiConnect.post('/course/', {}, obj);
      const data = await response.json();
      if (response.ok) {
        const course = Object.assign(new Course(), data);
        console.log(course);
        return data;
      } else throw new Error('Incorrect Login Credentials');
    } catch (error) {
      console.log(error);
      return {};
    }
  };
}
