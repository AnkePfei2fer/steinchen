export default function deleteSetFunction(numberSet: object) {
  const username = localStorage.getItem("Current User");

  const deleteSet = async function () {
    await fetch(`/api/users/${username}/sets/${numberSet}`, {
      method: "DELETE",
    });
  };

  return deleteSet;
}
