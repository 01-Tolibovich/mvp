import { create } from 'zustand';

const useAuth = create((set, get) => ({
  login: "",
  password: "",
  isAuth: false,

  setLogin: (newLogin) => set(() => ({ login: newLogin })),
  setPassword: (newPassword) => set(() => ({ password: newPassword })),
  setIsAuth: (authState) => set(() => ({ isAuth: authState })),
}));

export default useAuth;
