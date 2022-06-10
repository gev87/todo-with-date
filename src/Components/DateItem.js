import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function DateItem() {
	const [dateitem,setDateitem] = useState(JSON.parse(localStorage.getItem("dates")).filter(
		(elem) => elem.id === localStorage.getItem("id"))
    );
    const [todoes, setTodoes] = useState(dateitem[0].todo);
    
   
  
    // useEffect(() => {
    //     setDateitem(JSON.parse(localStorage.getItem("dates")).filter(
    //         (elem) => elem.id === localStorage.getItem("id")));
    // },[])

   
	return (
		<>
			<h3>{dateitem[0].date} Tasks</h3>
			<ul>
				{todoes.map((elem) => (
                    <li key={elem.id}>{elem.value}</li>
				))}
			</ul>
		</>
	);
}
