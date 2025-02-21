import { useState } from 'react';

// export default function Form() {
//   let [fullName, SetFullName] = useState('samarth');

//   let handelNameChange = (e) => {
//     // console.log(e.target.value);
//     SetFullName(e.target.value);
//   };
//   return (
//     <form>
//       <lable htmlFor="username">Full Name</lable>
//       <input
//         placeholder="enter text"
//         type="text"
//         value={fullName}
//         onChange={handelNameChange}
//         id="username"
//       />
//       <button>Submit</button>
//     </form>
//   );
// }

// handel multipale input
export default function Form() {
  let [formData, SetFormData] = useState({ fullName: '', username: '' });

  let handelInputChange = (e) => {
    let fieldName = e.target.name;
    let changeValue = e.target.value;
    // console.log(fieldName, changeValue);
    SetFormData((currData) => {
      //   currData[fieldName] = changeValue;
      return { ...currData, [fieldName]: changeValue }; //copy obj return
    });
  };

  let handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    SetFormData({ fullName: '', username: '' }); //re-set
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="enter text"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handelInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">User Name</label>
      <input
        placeholder="enter text"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handelInputChange}
      />
      <button>Submit</button>
    </form>
  );
}
