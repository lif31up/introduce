import "@/styles/Text.css"

const headingStyle = {
  height: "6rem",
  overflow: "hidden",
}
export default function Heading({children,desc}:{children:string,desc:string}){
  let descNode:JSX.Element = <></>;
  if(desc !== ""){
    descNode = <p className={"_heading_small text-neutral-400"} style={{fontWeight: 400}}>{desc}</p>
  }
  return(
    <div className={["mx-8 mt-8",desc === "" ? "":"mb-12"].join(" ").trim()}>
      <h1 className={"-mb-8 _heading_huge text-white"} style={headingStyle}>
        {children}
      </h1>
      {descNode}
    </div>
  );
}