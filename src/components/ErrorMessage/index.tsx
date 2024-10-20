export const ErrorMessage = ({ error }: { error: string | null }) => {
  if (!error) return null;

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        color: 'red',
        justifyContent: 'center',
      }}
    >
      {error}
    </div>
  );
};
