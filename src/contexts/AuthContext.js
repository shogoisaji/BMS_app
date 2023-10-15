import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    setLoading(false);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {});
  }, []);

  const login = async (credentials) => {
    try {
      const { user, error } = await supabase.auth.signIn({
        email: credentials.email,
        password: credentials.password,
      });
      if (error) {
        console.error("ログインエラー:", error);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("ログインエラー:", error);
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
