import './Snippet.css';

interface CssDictionary {
  cssProp: string;
  cssValue: string | number;
}
interface SnippetProps {
  CssProperties: CssDictionary[];
}

export const Snippet: React.FC<SnippetProps> = (props) => {

  const GenerateSnippet = () => {

   return  props.CssProperties.map((p,i) => {
      return (
        <>
         <span className="property_style">{`  ${p.cssProp}:`}</span>
         <span className="property_value">{`  ${p.cssValue};`}</span>
         { i < props.CssProperties.length-1 ? "\n" : ""}
        </>);
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
      <button className="copy_btn">
        Copy
      </button>
    </div>
  );
};