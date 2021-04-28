import React from "react";
import {Primary} from "../Button/Button.stories";
import {Large} from "../Input/Input.stories";
import Center from "../Center/Center";
export default {
    title: "form/Subscription",
}

export const PrimarySubscription = () => (
    <>
     <Center>  <Large/>
        <Primary/>
     </Center>
    </>
)