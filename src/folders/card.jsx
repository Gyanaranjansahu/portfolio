import data from "../project/p.js"
export default function Card(params) {
    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="i"
                            style={{

                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                padding: "30px",
                                displayL: "flex",

                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                borderRadius: "10px",
                            }}
                        >
                            <div style={{
                                height: "80%",
                                width: "100%",
                               
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>
                              
                            </div>
                            <div className="div" lassName="title" style={{  height: "30%", textAlign: "center", display: "flex", alignItems: "center ", justifyContent: "center" }}>
  <a href={item.link} target="_blank" style={{ textDecoration: "none", color: "lime", fontSize: "10px", fontWeight: "bold" }}>
                                    {item.name}
                                    {/* <img src={item.img} alt={item.name}  style={{width:"100%", height:"auto"}}/> */}
                                </a>
                            </div>
                            </div>

                
                    )
                })
            }
        </>
    )
};
