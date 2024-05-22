import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Opps ........</h2>
      <h4>
        something went wrong {error.status} : {error.statusText}
      </h4>
    </div>
  );
};

export default Error;
