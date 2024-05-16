export interface Quote {
  frase: string;
  author: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  quote?: Quote;
}

export default function SupportUs({
  title = "Want to support Us",
  subtitle = "We need your help!",
  quote = {
    frase: "There's nothing out here for us dude",
    author: "Steven Universe",
  },
}: Props) {
  return (
    <div class="">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div>
        <p>{quote.frase}</p>
        <span>{quote.author}</span>
      </div>
    </div>
  );
}
