import React from "react";
import ReactDOM from "react-dom";

// see https://iconsvg.xyz/
const Linkedin = ({ size = 16 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#000"
        style={{ verticalAlign: "bottom" }}
    >
        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
    </svg>
);
const Facebook2 = ({ size = 16 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#000"
        style={{ verticalAlign: "bottom" }}
    >
        <path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z" />
    </svg>
);
const Twitter = ({ size = 16 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#000"
        style={{ verticalAlign: "bottom" }}
    >
        <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
    </svg>
);
const Share = ({ size = 16, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "bottom" }}
    >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
);
const MapMarker2 = ({ size = 16, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "bottom" }}
    >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
    </svg>
);
const Phone = ({ size = 16, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "bottom" }}
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);
const Mail = ({ size = 16, color = "currentColor", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "bottom" }}
    >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);
const Star = ({ size = 16, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ verticalAlign: "bottom" }}
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
function Business({
                          people,
                          headerColor = "#fff",
                          headerBg = "#4285F4",
                          headerStyle = {},
                          shadow = true,
                          style = {},
                          ...props
                      }) {
    return (
        <div
            className="card-business"
            style={{
                background: "#fff",
                width: "90mm",
                height: "50mm",
                borderRadius: "5px",
                boxShadow: shadow !== false ? "#9E9E9E 0px 0px 10px" : "",
                ...style
            }}
            {...props}
        >
            <div
                style={{
                    background: headerBg,
                    height: "12mm",
                    padding: 10,
                    paddingTop: 15,
                    paddingLeft: 20,
                    position: "relative",
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                    ...headerStyle
                }}
            >
                <img
                    width={"60mm"}
                    height={"60mm"}
                    alt="avatar"
                    style={{
                        position: "absolute",
                        right: 15,
                        top: 5,
                        borderRadius: "100%",
                        float: "right",
                        background: "#fff"
                    }}
                    src={people.avatar}
                />
                {/*https://pbs.twimg.com/profile_images/1215572708336865280/_8lVTX2z_400x400.jpg*/}
                <h1
                    style={{
                        fontSize: "17pt",
                        margin: 0,
                        marginRight: -50,
                        color: headerColor
                    }}
                >
                    {people.displayName}
                </h1>
                {people.tagline && (
                    <p
                        style={{
                            margin: 0,
                            fontSize: "10pt",
                            marginRight: -50,
                            color: "#ccc"
                        }}
                    >
                        <span>{people.tagline}</span>
                    </p>
                )}
            </div>
            <div style={{ padding: 10, paddingLeft: 20, position: "relative" }}>
                <img
                    alt="qr-code"
                    style={{
                        position: "absolute",
                        right: 15,
                        top: 10,
                        float: "right"
                    }}
                    src="/qr.png"
                />
                <ul
                    style={{
                        fontSize: "10pt",
                        listStyle: "none",
                        lineHeight: "15pt",
                        margin: 0,
                        padding: 0
                    }}
                >
                    {people.title && (
                        <li>
                            <Star /> {people.title}
                        </li>
                    )}
                    {people.phone && (
                        <li>
                            <Phone /> {people.phone}
                        </li>
                    )}
                    {people.mail && (
                        <li>
                            <Mail /> {people.mail}
                        </li>
                    )}
                    {people.socials && people.socials.length > 0 && (
                        <li>
                            <Share />{" "}
                            {people.socials.map(([type, text]) => (
                                <span style={{ marginRight: 5 }}>{text}</span>
                            ))}
                        </li>
                    )}
                    {people.location && (
                        <li>
                            <MapMarker2 /> {people.location}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

function App() {
    const list = [
        {
            avatar: "/avatar.png",
            qr: "/qr.png",
            displayName: "Elon Musk",
            tagline: "Entrepreneur",
            title: "CEO Boring Company",
            phone: "+123-456-789",
            mail: "m@spacex.com",
            location: "United State , Califonia",
            socials: [["twitter", "@elonmusk"], ["linkedin", "/in/elonmusk"]]
        }
        /*{
          avatar: "/avatar.png",
          qr: "/qr.png",
          displayName: "Bill Gates",
          tagline: "Entrepreneur",
          title: "CEO Gate Foudation",
          phone: "+123-456-789",
          mail: "bill@microsoft.com",
          location: "United State , Califonia",
          socials: [["twitter", "@billgates"], ["linkedin", "/in/billgates"]]
        }*/
    ];
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <ul style={{ listStyle: "none" }}>
                {list.map(it => (
                    <li style={{ margin: 30 }}>
                        <Business people={it} />
                    </li>
                ))}
            </ul>
            <style>
                {`
        @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
        .card-business * {
          font-family:  'Quicksand',sans-serif;
        }
     `}
            </style>
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default Business