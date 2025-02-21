import { useState } from 'react';
// import { useFormik } from 'formik';

export default function CommentForm({ addComment }) {
  let [formData, setFormData] = useState({
    username: '',
    comment: '',
    rating: 5,
  });

  // let [isValid, setIsValid] = useState(true); //validation

  let handleInputChange = (e) => {
    setFormData((currData) => ({
      ...currData,
      [e.target.name]: e.target.value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    addComment(formData);
  };
  // let handleSubmit = (e) => {
  //   if (!isValid.username) {
  //     console.log('username is empty');
  //     setIsValid(false);
  //     e.preventDefault();
  //     return;
  //   }
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   addComment(formData);
  // };

  return (
    <div>
      <h4>Hi!</h4>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.username}
          placeholder="Username"
          type="text"
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        {/* {!isValid && <p style={{ color: 'red' }}>Username can not be empty</p>} */}
        <br /> <br />
        <label htmlFor="comment">Comment</label>
        <textarea
          value={formData.comment}
          placeholder="Comment"
          onChange={handleInputChange}
          id="comment"
          name="comment"
        />
        <br /> <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//use formik npm library for validation

// export default function CommentForm({ addComment }) {
//   // let [formData, setFormData] = useState({
//   //   username: '',
//   //   comment: '',
//   //   rating: 5,
//   // });

//   //only validedate username as example
//   const validate = (values) => {
//     const errors = {};
//     if (!values.username) {
//       errors.username = 'username can not be empty';
//     }
//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       comment: '',
//       rating: 5,
//     },
//     validate, //this is function for validation
//     onSubmit: (values) => {
//       //what to do after submit
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div>
//       <h4>Hi!</h4>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           value={formik.values.username}
//           placeholder="Username"
//           type="text"
//           onChange={handleInputChange}
//           id="username"
//           name="username"
//         />
//         {formik.errors.username ? <div>{formik.errors.username}</div> : null}
//         <br /> <br />
//         <label htmlFor="comment">Comment</label>
//         <textarea
//           value={formik.values.comment}
//           placeholder="Comment"
//           onChange={handleInputChange}
//           id="comment"
//           name="comment"
//         />
//         <br /> <br />
//         <label htmlFor="rating">Rating</label>
//         <input
//           placeholder="Rating"
//           type="number"
//           min={1}
//           max={5}
//           value={formik.values.rating}
//           onChange={handleInputChange}
//           id="rating"
//           name="rating"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
