const TitlePage = ({ title }) => {
  return (
    <h2
      style={{
        marginBottom: 20,
        color: '#EFEDE8',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 'calc(28 / 24)',
      }}
    >
      {title ? title : 'Exercises'}
    </h2>
  );
};
export default TitlePage;
