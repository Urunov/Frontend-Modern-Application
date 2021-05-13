import React from 'react';
import saram2 from "../images/saram2.png";
import qr from "../images/qr.png"

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

const list = [
    {
        avatar: "/saram2.png",
        qr: "/qr.png",
        displayName: "Elon Musk",
        tagline: "Entrepreneur",
        title: "CEO Boring Company",
        phone: "+123-456-789",
        mail: "m@spacex.com",
        location: "United State , Califonia",
        socials: [["twitter", "@elonmusk"], ["linkedin", "/in/elonmusk"]]
    }];
function ShowMe(
        people,
        cards,
        headerColor ="#fff",
        headerBg = "#4285F4",
        headerStyle = {},
        shadow = true,
        style = {},
        ...props
) {
    return (
        <div
        className="card-business"
        style={{
            background: "#fff",
            width: "90mm",
            height: "50mm",
            borderRadius:"5px",
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
            <img src={saram2}
             width={"60mm"}
             height={"60mm"}
             alt="saram"
             style={{position: "absolute",
             right: 15,
             top: 5,
             borderRadius: "100%",
             float: "right",
             background:"#fff"
             }}
            >
            </img>
              Zaytuna
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
                        <span>{cards.tagline}</span>
                    </p>
                )}
            </div>
            <div style={{ padding: 10, paddingLeft: 20, position: "relative" }}>
                <img src={qr}
                    alt="qr-code"
                    style={{
                        position: "absolute",
                        right: 15,
                        top: 35,
                        float: "right"
                    }}

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
                {cards.name && (
                    <li>
                        <Star /> {cards.name}
                    </li>
                )}
            </ul>
            </div>


        </div>

    );
}

export default ShowMe;