import { useEffect } from 'react';

function Preloader() {

    useEffect(() => {

        const preloaderScript = document.createElement('script');
        preloaderScript.src = 'js/adapters/preloader.js';
        preloaderScript.async = true;
        document.head.append(preloaderScript);
      
        // componentWillUnmount() {}
        return () => {
            preloaderScript.remove();
        };

    }, []);

    return(
        <div className="preloader-wrap">
                <div className="loader"></div>
            </div>
    )
}

export default Preloader