import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export * from './Card';

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});