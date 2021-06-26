import React from "react";
import renderer from "react-test-renderer";
import delay from "redux-saga";
import NotificationsViewer from "../NotificationsViewer";
import notificationsService from "../../services/notificationsService";

jest.mock("../../services/notificationsService");

describe("The notification viewer", () => {
    beforeAll(() => {
        notificationsService.__setcount(42);
    });

    it("should display the correct number of notifications", async () => {
        const tree = renderer.create(<NotificationsViewer />);
        await delay();
        const instance = tree.root;
        const component = instance.findByProps({ className: "notifications" });
        const text = component.children[0];
        expect(text).toEqual("42 Notifications Awaiting!");
    });
});