export type Gender = 'male' | 'female';

export type User = {
  id: string;
  name: string;
  photoURL: string;
  email: string;
  createdAt: number;
  description?: string;
  gender?: Gender;
  title?: string;
  links?: string[];
  coverURL?: string;
};
