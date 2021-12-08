type SetProps = {
  setNum: string | null;
  setName: string | null;
  setNumberParts: number | null;
  setImgUrl: string | null;
  setTheme: string | null;
};

export default function usePostSet(set: SetProps) {
  const name = localStorage.getItem("Current User");

  console.log({ set });

  const postSet = async function () {
    const response = await fetch(`/api/users/${name}`);
    if (response.ok) {
      console.log(`Hello ${name}`);
      await fetch(`/api/users/${name}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(set),
      });
      console.log(`${JSON.stringify(set)} was added to ${name}'s collection`);
    }
  };

  return postSet;
}
