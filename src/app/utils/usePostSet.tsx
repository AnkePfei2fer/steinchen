export type SetProps = {
  articleNumber: string;
  articleName: string;
  numberParts: number;
  imageUrl?: string;
  theme: string;
};

export default function usePostSet(set: SetProps[] | null) {
  const username = localStorage.getItem("Current User");

  const postSet = async function () {
    await fetch(`/api/users/${username}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(set),
    });
  };

  return postSet;
}
