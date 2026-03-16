export const GenerateSlots=()=>{
    const slots=[];
    let start=9;
    let end=17;
    for(let time=start;time<end; time++){
        slots.push(`${time.toString().padStart(2,"0")}:00 `);
        slots.push(`${time.toString().padStart(2,"0")}:30 `);
    }
    return slots
}