import "./header.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

function Header() {
  const [headerHover, setHeaderHover] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log(window.innerWidth);
      console.log(windowSize);
    });
  }, []);

  return (
    <div style={{ maxWidth: "100%" }}>
      <div
        style={{
          background: "#a6672b",
          color: "white",
          padding: "10px",
          textAlign: "center",
          width: "100%",
          fontSize: "15px",
        }}
      >
        In line with government guidelines, our stores in Hong Kong will remain
        open under adjusted opening hours.
        <span className="top-anchor">For assistance, please click here.</span>
      </div>
      <div
        style={{
          background: "#252525",
          color: "white",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          href="http://www.google.com"
        >
          <div
            onMouseEnter={() => {
              setHeaderHover(1);
            }}
            onMouseLeave={() => {
              setHeaderHover(0);
            }}
            style={{
              display: "flex",
              borderBottom: `${headerHover}px solid white`,
            }}
          >
            <div>
              Enjoy complimentary carbon neutral shipping on all Hong Kong and
              Macau orders.
            </div>
            <AddIcon
              style={{
                marginLeft: "20px",
              }}
              fontSize="small"
            />
          </div>
        </div>
      </div>
      {windowSize.width > 640 ? (
        <div
          style={{
            background: "#333",
            color: "white",
            height: "80px",
            width: "100%",
            fontSize: "15px",
            display: "flex",
          }}
        >
          <div
            className="container-fluid"
            style={{
              marginLeft: "34px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="row" style={{ width: "100%" }}>
              <div
                className={windowSize.width > 960 ? "col-11" : "col-10"}
                style={{ display: "flex", alignItems: "center" }}
              >
                {windowSize.width > 980 ? (
                  <>
                    <div className="nav-tags">Skin Care</div>
                    <div className="nav-tags">Body & Hand</div>
                    <div className="nav-tags">Hair</div>
                    <div className="nav-tags">Fragrance</div>
                    <div className="nav-tags">Home</div>
                    <div className="nav-tags">Kits & Travel</div>
                    <div className="nav-tags">Gifts</div>
                  </>
                ) : (
                  <div className="nav-tags">Shop</div>
                )}

                <div className="nav-tags">Read</div>
                <div className="nav-tags">Strores</div>
                <SearchIcon className="nav-tags" />
              </div>
              <div
                className={windowSize.width > 960 ? "col-1" : "col-2"}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="nav-tags">Login</div>
                <div className="nav-tags">Cart</div>
              </div>
            </div>
          </div>
          {/* <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            background: "blue",
          }}
          className="nav-right"
        >
          <div>Login</div>
          <div>Cart</div>
        </div> */}
        </div>
      ) : null}
    </div>
  );
}

export default Header;
