import styles from '../styles/components/Page.module.css';

type Props = {
  text: string
};

export default function Page(props: Props) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
}
