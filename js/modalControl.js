const modal = document.querySelector("dialog");
const btnCloseModal = document.querySelector("dialog > i");

const btnOpenModal = document.querySelector("#btn-open-modal");

btnOpenModal.addEventListener("click", () => {
  modal.showModal();
});
btnCloseModal.addEventListener("click", () => {
  modal.close();
});
