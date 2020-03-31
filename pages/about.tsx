import React from "react";
import {NextPage} from "next";
import MyLayout from "../components/MyLayout";

const About: NextPage = () => (
    <MyLayout title="About">
        <h1>This is what it´s all ABOUT</h1>
        <div>
            <p>This is the about page</p>
        </div>
    </MyLayout>
);

export default About;