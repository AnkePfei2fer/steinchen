export default function deleteSetFunction(id: string | undefined) {
  const username = localStorage.getItem("Current User");

  const deleteSet = async function () {
    await fetch(`/api/users/${username}/sets/${id}`, {
      method: "DELETE",
    });
  };

  return deleteSet;
}
