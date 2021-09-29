import React from "react";
import Array from "../Array";
import Object from "../Object";

const render = (data) =>{

        if(data.constructor === Array){
           return <Array data={data} />
        }
        else{
            return <Object data={data} />
        }

}

const Node = ({jsonObject})=>{



    return render(jsonObject);
}

export default Node;