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
         <span className="property_value">{`${p.cssValue};`}</span>
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
          <span className="property_style">{"  background-color:"} </span>
          <span className="property_value">{"red;"}</span>
          {"\n"}
          <span className="property_style">{"  width:"}</span>
          <span className="property_value">{"auto;"}</span>
          {"\n"}
          <span className="property_style">{"  height:"}</span>
          <span className="property_value">{"auto;"}</span>
          {"\n"}
          <span className="property_style">{"  display:"}</span>
          <span className="property_value">{"flex;"}</span>
          {"\n"}
          <span className="property_style">{"  flex-direction:"}</span>
          <span className="property_value">{"column;"}</span>
          {"\n"}
          <span className="property_style">{"}"}</span>
        </pre>
      </code>
      <span id="lang_highlight">css</span>
      <button className="copy_btn">
        Copy
      </button>
    </div>
  );
};