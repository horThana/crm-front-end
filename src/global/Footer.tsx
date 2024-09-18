import { Container, Group, Anchor } from '@mantine/core';
import classes from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

const links = [
  { link: 'http://www.facebook.com', label: 'Facebook', external: true },
  { link: 'http://www.youtube.com', label: 'Youtube', external: true },
  { link: 'https://www.linkedin.com/', label: 'LinkIn', external: true },
  { link: 'https://roadmap.sh/full-stack', label: 'CareersPath', external: true },
];

export function Footer() {
  const items = links.map((link) =>
    link.external ? (
      <Anchor
        className="dimmed"
        key={link.label}
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </Anchor>
    ) : (
      <Link className="dimmed" key={link.label} to={link.link}>
        {link.label}
      </Link>
    )
  );

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
   
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}