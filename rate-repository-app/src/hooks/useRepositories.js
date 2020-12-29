import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES);
  const [repositories, setRepositories] = useState();

  const fetchRepositories = () => {
    const { data } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
    });
    if (data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
