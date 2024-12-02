import { useParams } from "react-router";

type IParams = {
  name: string | undefined;
};

export const HelloPage: React.FC = () => {
  const { name } = useParams<IParams>();

  return (
    <div>
      <h1>Hello {name ?? "stranger"}</h1>
    </div>
  );
};
