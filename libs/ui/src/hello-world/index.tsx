import styles from './index.module.css';

type HelloWorldProps = {
  name?: string;
};

export function HelloWorld({ name }: HelloWorldProps) {
  return <h2 className={styles.heading}>Hello {name ?? 'World'}</h2>;
}
