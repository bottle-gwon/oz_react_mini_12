import { useCallback, useEffect, useRef } from "react"


export const useInfiniteScroll = (onIntersect, options = {}) => {
    const sightRef  = useRef(null);     //감지 대상

    const observerCallback = useCallback((entries) => {
        const [entry] = entries;    //감시대상
        if(entry.isIntersecting){   //대상이 뷰포트에 들어오면 실행
            onIntersect();
        }
    }, [onIntersect])

    useEffect(() => {
        const targetElement  = sightRef.current
        const observer = new IntersectionObserver(observerCallback, options);

        if(targetElement){
            observer.observe(targetElement)
        };

        return () => {
            if(targetElement){
                observer.unobserve(targetElement);
            }
            observer.disconnect();
        }
    }, [observerCallback, options])

    return sightRef;

}