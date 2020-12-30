import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import { SignInContainer } from "./SignIn";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(
        <SignInContainer onSubmit={onSubmit} validationSchema={null} />
      );

      await act(async () => {
        fireEvent.changeText(getByTestId("usernameField"), "kalle");
      });

      await act(async () => {
        fireEvent.changeText(getByTestId("passwordField"), "password");
      });
      await act(async () => {
        fireEvent.press(getByTestId("submitButton"));
      });

      await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
      await waitFor(() =>
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        })
      );
    });
  });
});
