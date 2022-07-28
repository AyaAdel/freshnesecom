import './ListGroup.css';

type link = {
  url: string;
  name: string;
};

type ListGroupProps = {
  title: string;
  links: string[] | link[];
  onClick?: (selected: string) => void;
};

export default function ListGroup({ title, links, onClick }: ListGroupProps) {
  return (
    <div className="list-group">
      <h4 className="list-group__title">{title}</h4>
      <div className="list-group__links">
        {links.map((link: any, index: number) => (
          <div key={index}>
            {link.url ? (
              <a
                key={`link${index}${link.name}`}
                className="list-group__link"
                href={link.url}
              >
                {link.name}
              </a>
            ) : (
              <span
                key={index}
                className="list-group__link"
                onClick={() => onClick && onClick(link)}
              >
                {link}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
