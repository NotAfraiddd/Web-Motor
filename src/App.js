import { useEffect, useRef, useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Loading from './components/Loading';
import { AnimatePresence } from 'framer-motion';
import './index.css'

function App() {
    const containerRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, []);
    return (
        <Router>
            <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    // ... all available Locomotive Scroll instance options
                    mobile: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
                    },
                }}
                watch={
                    [
                        //..all the dependencies you want to watch to update the scroll.
                        //  Basicaly, you would want to watch page/location changes
                        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                    ]
                }
                containerRef={containerRef}
            >
                <div className="App" data-scroll-container ref={containerRef}>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Layout = route.layout || DefaultLayout;
                            const Page = route.component;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            {/* <AnimatePresence>
                                                {loaded ? null : <Loading />}
                                            </AnimatePresence> */}
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </LocomotiveScrollProvider>
        </Router>
    );
}

export default App;
