import { useEffect } from 'react';

import styles from '../styles/components/Page.module.css';

type Props = {
  text: string
};

export default function Page(props: Props) {
  // called on key press
  function onKeydown(e: KeyboardEvent) {
    console.log(e.key);
  }

  // listen for keys on start
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);

  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}
