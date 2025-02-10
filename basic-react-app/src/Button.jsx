function printHello(event) {
  console.log('Hii');
  console.log(event);
}

function onMouse() {
  console.log('this is hendle the non-clickebal events');
}

function handleDubbleClick() {
  console.log('double click');
}
export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me</button>
      <p onMouseOver={onMouse}>mouse come</p>
      <button onDoubleClick={handleDubbleClick}>Click me</button>
    </div>
  );
}
