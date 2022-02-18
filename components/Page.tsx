import { useEffect, useState } from 'react';

import styles from '../styles/components/Page.module.css';

type Props = {
  text: string
};

export default function Page(props: Props) {
  const [text, setText] = useState(props.text);

  // called on key press
  function onKeydown(e: KeyboardEvent) {
    setText(val => val + e.key);
  }

  // listen for keys on start
  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [onKeydown]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
