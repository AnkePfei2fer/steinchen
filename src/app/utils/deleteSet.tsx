export default function deleteSet(numberSet: object) {
  const username = localStorage.getItem("Current User");

  const deleteExistingSet = async function () {
    await fetch(`/api/users/${username}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(numberSet),
    });
  };

  return deleteExistingSet;
}
