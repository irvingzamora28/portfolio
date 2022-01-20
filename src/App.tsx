import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw from 'twin.macro';
import TopSection from './containers/TopSection';
import ExploreSection from './containers/ExploreSection';
import Footer from './components/Footer';

const AppContainer = tw.div`
    flex
    flex-col
    w-full
    h-full
    overflow-hidden
`;

function App() {
    return (
        <AppContainer>
            <TopSection></TopSection>
            <ExploreSection></ExploreSection>
            <Footer></Footer>
        </AppContainer>
    );
}

export default App;
