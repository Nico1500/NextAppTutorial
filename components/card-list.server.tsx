import Card from './card.client';
import Date from './date.server';
import { Tag } from './tags.server';

type CardListProps = {
  slug: string;
  link: string;
  date: string;
  title?: string;
  key: string;
  abstract?: string;
  imgUrl?: string;
};

export default function CardList({ data }: { data: Array<CardListProps> }) {
  console.log({ data });

  return (
    <div className="border-green-700 border-solid border-spacing-4 border-2">
      <Tag twClass="bg-green-200">React Server component: Card List</Tag>
      <div className={`dark:text-white px-2 lg:px-6`}>
        <ul
          className={
            'list-none p-0 m-0 dark:text-white grid grid-cols-2 w-full xl:flex-row -mx-1 xl:-mx-4 h-1/3'
          }
        >
          {data.map((props: CardListProps) => (
            <Card {...props} key={props.slug} link={`blog/${props.slug}`}>
              <Date value={props.date} />
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
