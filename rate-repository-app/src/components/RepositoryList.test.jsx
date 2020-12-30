import React from "react";
import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "./RepositoryList";
import { getCountCopy } from "./RepositoryItem/Detailtem";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    let repositories;

    beforeEach(() => {
      repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
    });

    it("renders repository information correctly", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const names = getAllByTestId("fullName");
      const descriptions = getAllByTestId("description");
      const languages = getAllByTestId("languageTag");
      const starsDetail = getAllByTestId("starsDetail");
      const forksDetail = getAllByTestId("forksDetail");
      const reviewsDetail = getAllByTestId("reviewsDetail");
      const ratingDetail = getAllByTestId("ratingDetail");

      for (let idx = 0; idx < repositories.edges.length; idx++) {
        expect(names[idx]).toHaveTextContent(
          repositories.edges[idx].node.fullName
        );
        expect(descriptions[idx]).toHaveTextContent(
          repositories.edges[idx].node.description
        );
        expect(languages[idx]).toHaveTextContent(
          repositories.edges[idx].node.language
        );
        expect(starsDetail[idx]).toHaveTextContent(
          getCountCopy(repositories.edges[idx].node.stargazersCount)
        );
        expect(forksDetail[idx]).toHaveTextContent(
          getCountCopy(repositories.edges[idx].node.forksCount)
        );
        expect(reviewsDetail[idx]).toHaveTextContent(
          getCountCopy(repositories.edges[idx].node.reviewCount)
        );
        expect(ratingDetail[idx]).toHaveTextContent(
          getCountCopy(repositories.edges[idx].node.ratingAverage)
        );
      }
    });

    it("renders all repositories", () => {
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      expect(getAllByTestId("repositoryItem").length).toBe(
        repositories.edges.length
      );
    });
  });
});
