import {useEffect, useRef} from "react";

export const useScroll = (parentRef, childRef, callback) => {
// принимает два рефа которае получили в компоненту  и функцию обратного вызова которая будет делать axios запрос
  const observer = useRef()    // позволяет веб-приложениям асинхронно следить за  пересечения элемента с его родителем или областью видимости документа

  useEffect(() => {
    let options = {
      root: parentRef.current,     // сюда вводим тот ref элемента который будет главным,родителем
      rootMargin: '0px', // это нам не надо
      threshold: 0   // если 0 то callback вызовиться когда дочерний элемент только появился в зоне видимости , если 1 то дочерний элемент должен полностю появится в зоне видимости
    }
      //
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {

        callback()
      }
    }, options);

    observer.current.observe(childRef.current)  // тут мы подписываем наш смотритель на дочерний элемент
    return () => {
      // все что идет после return это то что будет выполняться перед удалением компоненты(willUnmount)
      // так как мы подписывались на дочерний элемент то перед удалением компоненты надо отписатся
      // observer.current.unobserve(childRef.current)
    }
  }, [callback])
}