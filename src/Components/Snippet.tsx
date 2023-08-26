import './Snippet.css';

interface CssDictionary {
  cssProp: string;
  cssValue: string | number;
  comments?: string;
}
interface SnippetProps {
  CssProperties: CssDictionary[];
}

export const Snippet: React.FC<SnippetProps> = (props) => {

  const GenerateSnippet = () => {

    return props.CssProperties.map((p, i) => {
      return (
        <div key={i}>
          {
            (p.comments != null && p?.comments !== "") ? <span className="comments">{`  /* ${p.comments} */\n`}</span> : ""
          }
          <span className="property_style">{`  ${p.cssProp}:`}</span>
          <span className="property_value">{`  ${p.cssValue};`}</span>
          {i < props.CssProperties.length - 1 ? "\n" : ""}
        </div>);
    });
  };


  const HandleCopyClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    debugger;
    navigator.clipboard.writeText(props.CssProperties.toString())
      .then(res => {
        console.log(`Data was copied`);
      })
      .catch(err => {
        console.error(`failed to copy data. ${err}`);
      });

  };
  return (
    <div className="snippet_cont">

      <code>
        <pre>
          <span className="class_style">{".container "}</span>
          <span className="property_style">{"{"}</span>
          {"\n"}
          {GenerateSnippet()}
          <span className="property_style">{"\n}"}</span>
        </pre>
      </code>
      <span id="lang_highlight">css</span>
      <button onClick={HandleCopyClick.bind(this)} className="copy_btn">
        Copy
      </button>
    </div>
  );
};