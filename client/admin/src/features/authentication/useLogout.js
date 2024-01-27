import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthenticationContext";

import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      localStorage.removeItem("token");
      toast.success("Đăng xuất thành công");
      setIsAuth(false);
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Đăng xuất không thành công");
    },
  });

  return { logout, isLoading };
}
