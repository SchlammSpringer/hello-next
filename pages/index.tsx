import {NextPage} from 'next';
import MyLayout from "../components/MyLayout";
import React from "react";

const Index: NextPage<{ userAgent: string }> = ({userAgent}) => (
    <MyLayout title="Home">
        <h1>Hello Next.js 👋</h1>
        <p>{userAgent}</p>
    </MyLayout>
);

Index.getInitialProps = async ({req}) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return {userAgent};
};

export default Index;