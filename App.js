      import React from "react";
      import ReactDOM from "react-dom/client";
      import Header from "./Header";
      import Footer from "./Footer";
      import Body from "./Body";


//React Element
      const Title = ()=>(
            <h2 id="gone" key="h1 ">Food Bar</h2>
      )
      //React Component


      const config = [
            {
                  type:"carousel",
                  cards: [
                        {
                              offerName: "50%off"
                        },
                        {
                              offerName:"No Delivery Charge"
                        }
                  ]
            },
            {type: "restaurants",
      cards: [
            {
                  offerName: "50%off"
            }
      ]}
      ]

      const restaurantList = [
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "61560",
            name: "Bombay Mishthan Bhandar (BMB) - Durapura",
            uuid: "359e00c7-3f00-4f59-b0ca-af039470ef71",
            city: "12",
            area: "Durgapura",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "127d6d2a1a4f3e995fba2c5dd93b574f",
            cuisines: [
              "North Indian",
              "Thalis",
              "Rajasthani",
              "Snacks",
              "Sweets",
              "Indian",
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            slaString: "32 MINS",
            lastMileTravel: 9.800000190734863,
            slugs: {
              restaurant:
                "bombay-mishthan-bhandar-sweets-durgapura-malviya-nagar",
              city: "jaipur",
            },
            cityState: "12",
            address:
              "12, 12A Jai Jawan Colony, Near Durgapura, Tonk Road, Jaipur",
            locality: "Jai Jawan Colony",
            parentId: 13728,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED",
              },
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 7600,
                  message: "",
                },
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 7600,
              message: "",
              title: "Delivery Charge",
              amount: "7600",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
              "cid=7390781~p=1~eid=00000189-298d-58dc-345f-910300dc0114~srvts=1688619276508",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "9.8 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "61560",
              deliveryTime: 32,
              minDeliveryTime: 32,
              maxDeliveryTime: 32,
              lastMileTravel: 9.800000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.2",
            totalRatings: 10000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "372938",
            name: "Khandelwal Pavitra Bhojnalaya",
            uuid: "62001683-636c-4807-81b6-49cfae2c8ebe",
            city: "12",
            area: "Pratap Nagar",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "yn8zq6yxe5qjtv4c47ql",
            cuisines: ["Indian", "North Indian", "Thalis", "Chinese"],
            tags: [],
            costForTwo: 28000,
            costForTwoString: "₹280 FOR TWO",
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            slaString: "32 MINS",
            lastMileTravel: 3,
            slugs: {
              restaurant: "khandelwal-pavitra-bhojnalaya-sitapura-sitapura",
              city: "jaipur",
            },
            cityState: "12",
            address:
              "266, S H B, Shop No 266/KB-1, Pratap Nagar Housing Board, Sanganer, Jaipur-II Ward 32, Jaipur II, Rajasthan, 302033",
            locality: "Housing Board",
            parentId: 117399,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 2600,
                  message: "",
                },
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 2600,
              message: "",
              title: "Delivery Charge",
              amount: "2600",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
              subHeader: "UPTO ₹100",
              discountTag: "",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "372938",
              deliveryTime: 32,
              minDeliveryTime: 32,
              maxDeliveryTime: 32,
              lastMileTravel: 3,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.7",
            totalRatings: 1000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "565562",
            name: "Harishankar Veg Restro",
            uuid: "82055133-6483-4775-8e1e-c67f8c7d92e2",
            city: "12",
            area: "Pratap Nagar",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "aa067134b7bdd3a2da7cd1eb251c9662",
            cuisines: [
              "North Indian",
              "South Indian",
              "Chaat",
              "Snacks",
              "Fast Food",
              "Thalis",
              "Beverages",
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            slaString: "30 MINS",
            lastMileTravel: 3,
            slugs: {
              restaurant: "harishankar-veg-restro-pratap-nagar-pratap-nagar",
              city: "jaipur",
            },
            cityState: "12",
            address:
              "174/118, Kumbha Marg, Sector 19, Pratap Nagar, Jaipur, Rajasthan 302033, India",
            locality: "Kumbha Marg",
            parentId: 4864,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 2600,
                  message: "",
                },
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 2600,
              message: "",
              title: "Delivery Charge",
              amount: "2600",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹199",
              discountTag: "FLAT DEAL",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "565562",
              deliveryTime: 30,
              minDeliveryTime: 30,
              maxDeliveryTime: 30,
              lastMileTravel: 3,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 1000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "639638",
            name: "Goila Butter Chicken",
            uuid: "3021321b-b67e-4d89-8e5a-761ada991c6e",
            city: "12",
            area: "Sitapur",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "5e19832da032dd69547565e27104706f",
            cuisines: ["North Indian", "Mughlai", "Biryani", "Indian"],
            tags: [],
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            deliveryTime: 51,
            minDeliveryTime: 51,
            maxDeliveryTime: 51,
            slaString: "51 MINS",
            lastMileTravel: 4.5,
            slugs: {
              restaurant: "goila-butter-chicken-r-tech-capital-jagatpura",
              city: "jaipur",
            },
            cityState: "12",
            address:
              "First Floor, Shop No FF03, FF04, FF05, FF20, FF21 & FF22, PLOT NO CPI - 231, R-TECH CAPITAL HIGHSTREET, APPAREL PARK, JAGATPURA, Jaipur, Jaipur, Rajasthan-302017",
            locality: "APPAREL PARK",
            parentId: 322587,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED",
              },
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 3100,
                  message: "",
                },
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 3100,
              message: "",
              title: "Delivery Charge",
              amount: "3100",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
              "cid=7253111~p=4~eid=00000189-298d-58dc-345f-910400dc0467~srvts=1688619276508",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "4.5 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
              subHeader: "UPTO ₹100",
              discountTag: "",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "639638",
              deliveryTime: 51,
              minDeliveryTime: 51,
              maxDeliveryTime: 51,
              lastMileTravel: 4.5,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.0",
            totalRatings: 100,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "483395",
            name: "Khandelwal Dhaba",
            uuid: "d8c887cc-1aa0-433b-9aa6-b616d67c4f0d",
            city: "12",
            area: "Pratap Nagar",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "xfpsrqv79jnq9tkfvwng",
            cuisines: ["North Indian", "Tandoor", "Indian", "Beverages"],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 35,
            minDeliveryTime: 35,
            maxDeliveryTime: 35,
            slaString: "35 MINS",
            lastMileTravel: 3,
            slugs: {
              restaurant: "khandelwal-dhaba-pratap-nagar-pratap-nagar",
              city: "jaipur",
            },
            cityState: "12",
            address:
              "SHOP NO.266/SH-B1/16, SH-B1/9 (C) SEC-26, PRATAP NAGAR SANGANER JAIPUR",
            locality: "Sector 26",
            parentId: 117386,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "distance",
                  fee: 2600,
                  message: "",
                },
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 2600,
              message: "",
              title: "Delivery Charge",
              amount: "2600",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "30% OFF",
              subHeader: "UPTO ₹75",
              discountTag: "",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "483395",
              deliveryTime: 35,
              minDeliveryTime: 35,
              maxDeliveryTime: 35,
              lastMileTravel: 3,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.8",
            totalRatings: 500,
            new: false,
          },
          subtype: "basic",
        },
      ];



      const BurgerKing = {
            name: "Burger King",
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nueqj3ssms88hue3eofs",
            cusines:  ["Burger","American"],
            rating: "4.3"
      }

      const RestrauntCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
            // console.log(props)
            return (
              <div className="card">
                <img
                  src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    cloudinaryImageId
                  }
                />
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{lastMileTravelString} minutes</h4>
              </div>
            );
      }


        
      const AppLayout = () => {
        return (
          <>
            <Header />
            <Body />
            <Footer />
          </>
        );
      };
      const root = ReactDOM.createRoot(document.getElementById("root"));

      //passing react element inside the root
      root.render(<AppLayout/>);