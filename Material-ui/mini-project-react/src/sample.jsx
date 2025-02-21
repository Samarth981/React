import Button from '@mui/material/Button';

export default function Sample() {
  const handleClick = () => {
    console.log('Button was clicked');
  };

  return (
    <>
      <h1>This is a test for MUI!</h1>
      <div>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ marginRight: '10px' }}
        >
          Test
        </Button>
        <Button variant="contained" color="secondary" size="large" disabled>
          Disabled
        </Button>
      </div>
    </>
  );
}
