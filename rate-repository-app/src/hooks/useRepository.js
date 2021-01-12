import { GET_REPOSITORY_DETAIL } from "../graphql/queries";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

const useRepository = (repositoryId) => {
  const { data, loading } = useQuery(GET_REPOSITORY_DETAIL, {
    fetchPolicy: "cache-and-network",
    variables: { id: repositoryId },
  });
  const [detail, setDetail] = useState();

  const fetchRepositoryDetail = () => {
    const { data } = useQuery(GET_REPOSITORY_DETAIL, {
      fetchPolicy: "cache-and-network",
      variables: { id: repositoryId },
    });
    if (data) {
      setDetail(data.repository);
    }
  };

  useEffect(() => {
    if (data) {
      setDetail(data.repository);
    }
  }, [data]);

  return { detail, loading, refetch: fetchRepositoryDetail };
};

export default useRepository;
