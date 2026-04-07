function Welcome(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Branch: {props.branch}</h3>
    </div>
  );
}

export default Welcome;