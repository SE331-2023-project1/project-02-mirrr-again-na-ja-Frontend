export interface StudentItem {
  id: number;
  name: string;
  surname: string;
  studentID: string;
  image: string[];
  department: string;
  advisor: AdviserItem;
  roles: string[];
  username: string;
  password: string;
}

export interface AdviserItem {
  id: number;
  advisorID: string;
  name: string;
  surname: string;
  position: string;
  image: string[];
  department: string;
  studentList: StudentItem[];
  roles: string[];
  username: string;
  password: string;
  student: StudentData;
  announcements: string[];
}

export interface StudentData {
  id: number;
  studentID: string;
  name: string;
  surname: string;
  image: string[];
  department: string;
}

export interface AdvisorData {
  id: number;
  advisorID: string;
  name: string;
  surname: string;
  position: string;
  image: string[];
  department: string;
}

export interface StudentConnect {
  id: number;
  studentID: string;
  name: string;
  surname: string;
  advisor: AdvisorData;
}
