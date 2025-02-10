function handelSubmit(event) {
  event.preventDefault();
  console.log('form is submited');
}

export default function Form() {
  return (
    <form onClick={handelSubmit}>
      <input placeholder="Write somthing" />
      <button>Submit</button>
    </form>
  );
}
