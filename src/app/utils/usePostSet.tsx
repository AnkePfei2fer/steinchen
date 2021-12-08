export default function usePostSet(set: {
  setNum: string;
  setName: string;
  setNumberParts: number;
  setImgUrl: string;
  setTheme: string;
}) {
  const name = localStorage.getItem("Current User");

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
