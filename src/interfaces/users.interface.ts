export interface FetchUser {
  name?: string;
  email?: string;
  role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
export interface AddUser {
  name: string;
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
