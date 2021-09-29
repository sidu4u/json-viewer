import React,{useState,useCallback} from "react";
import ObjectViewer from "../Object";
import "./styles.css";

const ArrayViewer = ({data})=>{
    const [isExpanded,changeExpand] = useState(false);
    const onClick = useCallback((event)=>{
        event.stopPropagation();
      changeExpand(isExpanded=>!isExpanded);
    },[changeExpand]);
  
      return <span  onClick={onClick}>
         {!isExpanded?"[]":<div className="container">{render(data)}</div>}
      </span>
  }

const render = (data) =>{

   let renderArray = [];

   for(let value of data){
           if(typeof value === "object"){
               if(value.constructor===Array){
                renderArray.push(<div>
                 <ArrayViewer data={value}/>
                 </div>);
               }
               if(value.constructor===Object){
                renderArray.push(<div>
                    <ObjectViewer data={value}/>
                    </div>);
               }
           }
           else{
            renderArray.push(<div>
                {value}
                </div>)
           }
       }


   return renderArray;

}



export default ArrayViewer;