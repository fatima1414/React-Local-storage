import Swal from "sweetalert2";

export const Error = () =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}
export const Update = () =>{
    Swal.fire({
  title: "Are you sure?",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, update it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Updated!",
      text: "Your file has been updated.",
      icon: "success"
    });
  }
});
}
export const Success = () =>{
  Swal.fire("Product Added!");
}