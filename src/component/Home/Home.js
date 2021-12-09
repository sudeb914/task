import React from 'react';
import Banner from '../Banner/Banner';
import Customize from '../Customize/Customize';
import Expo from '../Expo/Expo';
import Gallery from '../Gallery/Gallery';
import ProjectManage from '../ProjectManage/ProjectManage';
import TradeShadow from '../TradeShadow/TradeShadow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Customize></Customize>
            <TradeShadow></TradeShadow>
            <ProjectManage></ProjectManage>
            <Expo></Expo>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;