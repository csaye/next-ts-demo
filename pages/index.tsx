import Page from '../components/Page';

import type { NextPage } from 'next';

import styles from '../styles/pages/Index.module.css';

const Index: NextPage = () => {
  return (
    <div>
      <Page text="Hello World" />
    </div>
  );
}

export default Index;
