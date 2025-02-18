import { createContext, useContext, useEffect, ReactNode } from "react";

// 1. AdminContextType 정의
interface AdminContextType {
  addClass: () => void;
  removeClass: () => void;
}

// 2. AdminContext 생성 (함수가 아니라 변수에 할당)
const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  // 3. useContext로 AdminContext를 가져옵니다.
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};

// 4. AdminProviderProps 정의
interface AdminProviderProps {
  children: ReactNode;
}

// 5. AdminProvider 정의
export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add("admin-dashboard");

    return () => {
      document.documentElement.classList.remove("admin-dashboard");
    };
  }, []);

  // 6. Provider를 통해 값을 전달
  return (
    <AdminContext.Provider
      value={{
        addClass: () => document.documentElement.classList.add("admin-dashboard"),
        removeClass: () => document.documentElement.classList.remove("admin-dashboard"),
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
