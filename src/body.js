import { useEffect, useState } from "react";
import "./body.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { width } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        background: "#333",
        width: "100px",
        height: "100px",
        position: "absolute",
        right: 0,
        bottom: "170px",
        cursor: "pointer",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <ChevronRightIcon fontSize="large" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        background: "#333",
        position: "absolute",
        left: 0,
        top: "120px",
        width: "100px",
        height: "100px",
        zIndex: "100",
        cursor: "pointer",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <ChevronLeftIcon fontSize="large" />
    </div>
  );
}

function Body() {
  const [browseColor, setBrowseColor] = useState("white");
  const [browseBackground, setBrowseBackground] = useState("none");
  const [discoverColor, setDiscoverColor] = useState("black");
  const [discoverBackground, setDiscoverBackground] = useState("none");
  const [findColor, setFindColor] = useState("black");
  const [findBackground, setFindBackground] = useState("none");
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    autoplaySpeed: 10,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
  };

  const slick1 = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/3f2oytDw9wmcetShJHqGaw/14356c3ae0f314ca8dd896fb67776f6e/Aesop_Body_Rejuvenate_Intensive_Body_Balm_120mL_large.png",
      head: "Rejuvenate Internsive Body Balm",
      body: "A sumptuous moisturising balm",
      width: "320px",
      height: "379px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/1Bvr76NWKg0CgUR2bAYwtf/0123f846ce85d98c71ffa70a60946a47/Aesop_Resurrection_Portable_Hand_Care_Hybris_Large_1584x962px__1_.png",
      head: "Resurrection Protable Hand Care",
      body: "A portable trio for hands",
      width: "370px",
      height: "224px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5tohXrYPG52gI48cP9TbJR/c8fd45a7665745c81dffaf5c6b5895b2/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.png",
      head: "Parsley Seed Anti-Oxidant Facial Toner",
      body: "For use post-cleaning, prefacing hydration",
      width: "370px",
      height: "376px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/1D8SZ3pwiWAd4iHgyaLwUK/58cab4eb3026ea8c0a48760a52830b85/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png",
      head: "Geranium Leaf Body Cleanser",
      body: "A gentle, invigorationg gel cleanser",
      width: "329px",
      height: "379px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/4uMx0pAo5uZhfxP4V5nAzV/5e3e3fbd5877a92ee1b5b2e9105e9912/Aesop-Skin-Damascan-Rose-Facial-Treatment-25mL-Large-684x668px.png",
      head: "Damascan Rose Facial Treatment",
      body: "Leaves skin supple, nourished",
      width: "370px",
      height: "361px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/2RdKQmpPtqVC2lVLtCeott/3841f8985a8decb737794e843b3239d3/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png",
      head: "Mandarin Facial Hydrating Cream",
      body: "Rapidly absorbed, lightly hydrating",
      width: "370px",
      height: "196px",
    },
  ];

  const slick2 = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png",
      head: "Fabulous Face Cleanser",
      body: "For skin requiring gengle cleansing",
      width: "390px",
      height: "390px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png",
      head: "Parsley Seed Facial Cleanser",
      body: "Ideal for city dwellers",
      width: "390px",
      height: "390px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/1D8SZ3pwiWAd4iHgyaLwUK/58cab4eb3026ea8c0a48760a52830b85/Aesop-Body-Geranium-Leaf-Body-Cleanser-100mL-Hybris-Large-835x962px.png",
      head: "Geranium Leaf Body Cleanser",
      body: "A gentle, invigorating gel cleanser",
      width: "347px",
      height: "399px",
    },
    {
      img: "https://images.ctfassets.net/u1nb1km7t5q7/1DzvQFchYhmMa0Zo1AY1w4/967fbc17f857bb576f47da86de886e43/Aesop_Hair_Conditioner_500mL_Large_888x1100px.png",
      head: "Shampoo",
      body: "For soft, shiny fragrant hair",
      width: "322px",
      height: "399px",
    },
    {
      img: "https://images.ctfassets.net/u1nb1km7t5q7/4mw7C3QcsfLAcCPScGjMld/fb6e864e9b98702c002d6be5d931aa02/Aesop_Hair_Shampoo_500mL_Large_888x1100px.png",
      head: "A Rose By Any Other name Body Cleanser",
      body: "A gently cleansing aromatic formulation",
      width: "322px",
      height: "399px",
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/2Gyl6pSrgwsvcYkD1dSGNY/11a1085f11c9be33e2481b411057b9b5/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_500mL_large.png",
      head: "Citrus Melange Body Cleanser",
      body: "For all who savour citrus aromas",
      width: "322px",
      height: "399px",
    },
  ];

  const slick3 = [
    "https://www.aesop.com/u1nb1km7t5q7/40xVxq4tBdXpyJLXVTQPvO/aa8ef7a4cca7a713e12b58f1ab8cc6ea/Aesop-HK-K11-Hero-Bleed-Desktop-2880x1620px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/DqJCGx3tPeDqODieHw5uA/48f50fbd1758ee27990a600c131bd2ce/Aesop-HK-New-Town-Plaza-Hero-Bleed-Desktop-2880x1620px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/3b6KRiDt3QpNut8LoYGgB9/1d62a7373daa8a6ba4dff6ea300b891e/Aesop-HK-Hollywood-Road-Hero-Desktop-2880x1620.jpg",
  ];
  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="body-1">
        {windowSize.width > 640 ? (
          <div
            style={{
              display: "flex",
              paddingTop: "100px",
              paddingLeft: "50px",
            }}
          >
            <div
              style={{
                fontSize: "40px",
              }}
            >
              Aesop
            </div>
            <div
              style={{
                marginLeft: "50px",
              }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "30px" }}>
                In boldness, a bond
              </h1>
              <div
                style={{
                  width: "380px",
                  fontSize: "16px",
                  lineHeight: "180%",
                }}
              >
                Celebrating the power of self-expression this Lunar New Year
                through gestures replete with character.
              </div>
              <div
                onMouseEnter={() => {
                  setBrowseBackground("white");
                  setBrowseColor("black");
                }}
                onMouseLeave={() => {
                  setBrowseBackground("none");
                  setBrowseColor("white");
                }}
                style={{
                  color: browseColor,
                  background: browseBackground,
                  cursor: "pointer",
                  border: "1px solid white",
                  width: "300px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <div
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    marginLeft: "20px",
                  }}
                >
                  Browse all gifts
                </div>
                <ArrowForwardIcon
                  style={{ marginLeft: "130px" }}
                  fontSize="small"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div style={{ color: "white", paddingTop: "10px" }} className="row">
              <div style={{ fontSize: "24px" }} className="col-7">
                Aesop
              </div>
              <div
                style={{ display: "flex", paddingLeft: "30px" }}
                className="col-5"
              >
                <SearchIcon
                  style={{ cursor: "pointer" }}
                  className=""
                  fontSize="medium"
                />
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    marginRight: "20px",
                  }}
                  className="nav-tags"
                >
                  Cart
                </div>
                <MenuIcon style={{ cursor: "pointer" }} fontSize="medium" />
              </div>
            </div>
          </div>
        )}
      </div>
      {windowSize.width < 640 ? (
        <div
          style={{
            background: "#333",
            color: "white",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <div
            style={{
              marginLeft: "10%",
            }}
          >
            <h1 style={{ fontWeight: "400", fontSize: "30px" }}>
              In boldness, a bond
            </h1>
            <div
              style={{
                fontSize: "16px",
                width: "80%",
                lineHeight: "180%",
              }}
            >
              Celebrating the power of self-expression this Lunar New Year
              through gestures replete with character.
            </div>
            <div
              onMouseEnter={() => {
                setBrowseBackground("white");
                setBrowseColor("black");
              }}
              onMouseLeave={() => {
                setBrowseBackground("none");
                setBrowseColor("white");
              }}
              style={{
                color: browseColor,
                background: browseBackground,
                cursor: "pointer",
                border: "1px solid white",
                width: "300px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  marginLeft: "20px",
                }}
              >
                Browse all gifts
              </div>
              <ArrowForwardIcon
                style={{ marginLeft: "130px" }}
                fontSize="small"
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className="body-2">
        <Slider {...settings}>
          {slick1.map((ele) => (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <img
                  style={{ height: ele.height, width: ele.width }}
                  src={ele.img}
                ></img>
                <a className="slick-a">{ele.head}</a>
                <div>{ele.body}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="body-3">
        <div
          style={{
            width: windowSize.width > 960 ? "30%" : "70%",
            marginLeft: "5%",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            The value of time
          </div>
          <div style={{ fontSize: "28px", marginTop: "20px" }}>
            Healthy skin cannot be rushed
          </div>
          <div style={{ marginTop: "20px", fontSize: "17px" }}>
            Years of contemplation and rigour go into each Aesop
            formulation–hydrators are no exception. Scientifically validated
            ingredients, combined with acquired wisdom, impart lasting benefits.{" "}
          </div>
          <div
            onMouseEnter={() => {
              setDiscoverBackground("#333");
              setDiscoverColor("white");
            }}
            onMouseLeave={() => {
              setDiscoverBackground("none");
              setDiscoverColor("black");
            }}
            style={{
              color: discoverColor,
              background: discoverBackground,
              cursor: "pointer",
              border: "1px solid #333",
              width: "300px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Discover deliberate nourishment
            </div>
            <ArrowForwardIcon style={{ marginLeft: "30px" }} fontSize="small" />
          </div>
        </div>
        <div
          style={{
            width: windowSize.width > 960 ? "60%" : "80%",
            marginTop: windowSize.width > 960 ? 0 : "50px",
          }}
        >
          <img
            style={{
              height: windowSize.width > 960 ? "470px" : "350px",
              width: "100%",
              marginLeft: "5%",
            }}
            src="https://www.aesop.com/u1nb1km7t5q7/2a9toBA6YVvZPntYn1qdLH/b5f611688860aee184a8b519f298ee04/Aesop_Healthy_Skin_Nourish_2022_Web_Homepage_Secondary_Warm_Mid_Desktop_2560x1440px.jpg"
          ></img>
        </div>
      </div>
      <div className="body-2">
        <Slider {...settings}>
          {slick2.map((ele) => (
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                <img
                  style={{ height: ele.height, width: ele.width }}
                  src={ele.img}
                ></img>
                <a className="slick-a">{ele.head}</a>
                <div>{ele.body}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="body-5">
        <video
          height={windowSize.width > 960 ? "472px" : "350px"}
          width={windowSize.width > 960 ? "60%" : "90%"}
          loop
          autoPlay
          muted
        >
          <source src="assets/video.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            width: windowSize.width > 960 ? "30%" : "80%",
            marginTop: windowSize.width > 960 ? "0" : "50px",
            marginLeft: "5%",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            The Athenaem
          </div>
          <div style={{ fontSize: "28px", marginTop: "20px" }}>
            How to curate a skin care regimen
          </div>
          <div style={{ marginTop: "20px", fontSize: "17px" }}>
            A well-considered, attentive skin care regimen takes time—a resource
            that is as finite and precious as our skin. But be assured: time
            spent caring for the self is always time well spent.
          </div>
          <div
            onMouseEnter={() => {
              setDiscoverBackground("#333");
              setDiscoverColor("white");
            }}
            onMouseLeave={() => {
              setDiscoverBackground("none");
              setDiscoverColor("black");
            }}
            style={{
              color: discoverColor,
              background: discoverBackground,
              cursor: "pointer",
              border: "1px solid #333",
              width: "300px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Read our guide
            </div>
            <ArrowForwardIcon
              style={{ marginLeft: "130px" }}
              fontSize="small"
            />
          </div>
        </div>
      </div>
      <div className="body-6">
        <div
          style={{
            width: windowSize.width > 960 ? "30%" : "80%",
            marginLeft: "5%",
          }}
        >
          <div style={{ fontSize: "28px", marginTop: "20px" }}>
            Store locator
          </div>
          <div style={{ marginTop: "20px", fontSize: "17px" }}>
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases
          </div>
          <div
            onMouseEnter={() => {
              setFindBackground("#333");
              setFindColor("white");
            }}
            onMouseLeave={() => {
              setFindBackground("none");
              setFindColor("black");
            }}
            style={{
              color: findColor,
              background: findBackground,
              cursor: "pointer",
              border: "1px solid #333",
              width: "300px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginLeft: "20px",
              }}
            >
              Find a nearby store
            </div>
            <ArrowForwardIcon
              style={{ marginLeft: "100px" }}
              fontSize="small"
            />
          </div>
        </div>
        <div
          style={{
            width: windowSize.width > 960 ? "60%" : "90%",
            marginTop: windowSize.width > 960 ? 0 : "50px",
            marginLeft: "5%",
            height: windowSize.width > 960 ? "442px" : "350px",
          }}
        >
          <Slider {...settings2}>
            {slick3.map((ele) => (
              <div>
                <img
                  src={ele}
                  width="100%"
                  height={windowSize.width > 960 ? "442px" : "350px"}
                ></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div
        style={{
          marginTop: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "200px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div style={{ fontSize: "30px", textAlign: "center" }}>
          ‘Wisely, and slow. They stumble that run fast.’
        </div>
        <div style={{ fontWeight: "600", marginTop: "30px" }}>
          William Shakespeare
        </div>
      </div>
    </div>
  );
}

export default Body;
