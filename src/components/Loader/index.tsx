export const Loader = ({ loading }: { loading: boolean }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Loading...
    </div>
  );
};
