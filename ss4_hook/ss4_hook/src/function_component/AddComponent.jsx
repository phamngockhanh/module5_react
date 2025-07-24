
import React, {useRef} from "react";
import {add, listAll} from "../service/student";

function AddComponent({setIsLoading}){
    const idRef = useRef(null);
    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const handleAdd =()=>{
         let student = {
             id: idRef.current.value,
             name: nameRef.current.value,
             age: ageRef.current.value
         }
         add(student);
        console.log(listAll());
        setIsLoading(pre =>!pre);
    }
    return <>
        {console.log("---- add render---------")}
        <input ref={idRef} placeholder={'Enter Id'}/>
        <input ref={nameRef} placeholder={'Enter name'}/>
        <input ref={ageRef} placeholder={'Enter age'}/>
        <button onClick={handleAdd}>save</button>
    </>
}
export default React.memo(AddComponent) ;
