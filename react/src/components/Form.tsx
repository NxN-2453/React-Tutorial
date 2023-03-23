import Button from "./Button";
function Form() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div>
        <Button
          color="primary"
          onClick={() => SetDismissableAlertVisible(true)}
          type="submit"
        >
          Login
        </Button>
        
      </div>
    </form>
  );
}

export default Form;
