import Dashboard from "./Dashboard.js";
import Loading from "./Loading.js";
import { useRequireAuth } from "./use-require-auth.js";
function DashboardPage(props) {
  const auth = useRequireAuth();
  // If auth is null (still fetching data)
  // or false (logged out, above hook will redirect)
  // then show loading indicator.
  if (!auth) {
    return <Loading />;
  }
  return <Dashboard auth={auth} />;
}
// Hook (use-require-auth.js)
import { useEffect } from "react";
import { useAuth } from "./use-auth.js";
import { useRouter } from "./use-router.js";
function useRequireAuth(redirectUrl = "/signup") {
  const auth = useAuth();
  const router = useRouter();
  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      router.push(redirectUrl);
    }
  }, [auth, router]);
  return auth;
}