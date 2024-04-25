export default function Field({name,icon,value}) {
  return (
    <div>
        <h4 style={{textAlign : "center"}}>{name}</h4>
        <div style={{display : "flex", justifyContent : "center", alignItems : "center", gap : "12px" }}>
            <img style={{width : "40px", height : "40px"}} src={icon} alt="" />
            <span>{value}</span>
        </div>
    </div>
  )
}
