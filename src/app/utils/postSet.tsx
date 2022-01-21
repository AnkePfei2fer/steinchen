import { SetProps } from "../../../types";

export default function postSet(set: SetProps | null) {
  const username = localStorage.getItem("Current User");

  const postNewSet = async function () {
    await fetch(`/api/users/${username}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(set),
    });
  };

  return postNewSet;
}
