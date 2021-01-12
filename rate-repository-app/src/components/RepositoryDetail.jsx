import React from "react";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/RepositoryItem";
import useRepository from "../hooks/useRepository";
import { SafeAreaView } from "react-native";

const RepositoryDetail = () => {
  let { repositoryId } = useParams();
  const { detail, loading } = useRepository(repositoryId);

  if (loading || !detail) {
    return null;
  }

  return (
    <SafeAreaView>
      <RepositoryItem data={detail} showAction={true} actionUrl={detail.url} />
    </SafeAreaView>
  );
};

export default RepositoryDetail;
