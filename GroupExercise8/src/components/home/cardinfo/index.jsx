const Cardinfo = (props) => {
  const { cardText } = props;

  return (
    <div>
      <h2>{cardText}</h2>
    </div>
  );
};

export default Cardinfo;