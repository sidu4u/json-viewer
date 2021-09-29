import React,{useState,useCallback} from "react";
import ArrayViewer from "../Array";
import "./styles.css";

const render = (data) =>{

   let renderArray = [];

   for(let key in data){
       if(data.hasOwnProperty(key)){
           let value = data[key];
           console.log(value.constructor);
           if(typeof value === "object"){
               if(value.constructor===Array){
                renderArray.push(<div>
                 <span>{key}</span>:
                 <ArrayViewer data={value}/>
                 </div>);
               }
               if(value.constructor===Object){
                renderArray.push(<div>
                    <span>{key}</span>:
                    <span><ObjectViewer data={value}/></span>
                    </div>);
               }
           }
           else{
            renderArray.push(<div>
                <span>{key}</span>:
                <span>{value}</span>
                </div>)
           }
       }
   }

   return renderArray;

}

const ObjectViewer = ({data})=>{
  const [isExpanded,changeExpand] = useState(false);
  const onClick = useCallback((event)=>{
      event.stopPropagation();
    changeExpand(isExpanded=>!isExpanded);
  },[changeExpand]);

    return <span onClick={onClick}>
       {!isExpanded?"{}": <div className="container">{render(data)}</div>}
    </span>
}

export default ObjectViewer;