import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../libs/contextLib";

const UserDashboardDiv = () => {

    const { user } = useAppContext();

    return (
        <p>Welcome {user.displayName}</p>
    )
}

export default UserDashboardDiv;