import { QueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { RFS_USER_ROLE_REQUESTOR } from "src/shared/Constants";

import client from "src/utils/rqclient.ts";

const GLOBAL_STATE = {
  userName: "Jithin Joseph",
  userEmail: "jithin.joseph@wpp.com",
  rfsUserRole: RFS_USER_ROLE_REQUESTOR,
}

export const useRQGlobalState = (key, initialData="") => [
  useQuery(
    { queryKey: [key], queryFn: () => initialData },
    {
      enabled: false, // Important - To prevent from clearing cache/data
      initialData,
    }
  ).data,
  (value) => client.setQueryData([key], value),
];

const StateEditor = () => {
  const [value, setValue] = useRQGlobalState("globalState", "111");
  return (
    <input value={value || ""} onChange={(evt) => setValue(evt.target.value)} />
  );
};

const StateViewer = () => {
  const [value] = useRQGlobalState("globalState", "");
  return <div>{value}</div>;
};

const GlobalState = () => {
  return (
    <div>
      <StateEditor />
      <StateViewer />
    </div>
  );
};

export default GlobalState;
