'use client';

const Error = ({ error }: { error: Error }) => {
  return (
    <main>
      <h1> An error occured ! </h1>
      <p>{error.message}</p>
    </main>
  );
};

export default Error;
