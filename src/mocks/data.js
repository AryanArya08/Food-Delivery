export const RESTUARANT_DATA = {
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Grameen Kulfi",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "355770",
              name: "Grameen Kulfi",
              city: "Kolkata",
              slugs: {
                restaurant: "grameen-kulfi-cloud-1-salt-lake",
                city: "kolkata",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "hgaixtwg9mbv1bkwndtt",
              locality: "Nayapatty",
              areaName: "Bidhannagar",
              costForTwo: "12000",
              costForTwoMessage: "₹120 for two",
              cuisines: ["Ice Cream", "Desserts"],
              avgRating: 4.8,
              veg: true,
              feeDetails: {
                restaurantId: "355770",
                fees: [
                  {
                    name: "TYPE_DISTANCE",
                    fee: 10200,
                  },
                  {
                    name: "TYPE_TIME",
                  },
                ],
                totalFee: 10200,
                title: "Delivery Charge",
                amount: "10200",
                icon: "v1648208530/surgecreatives/info",
                message:
                  "<b>Far (9.8 kms)</b> | Additional delivery fee will apply",
              },
              parentId: "12175",
              avgRatingString: "4.8",
              totalRatingsString: "1K+ ratings",
              sla: {
                restaurantId: "355770",
                deliveryTime: 46,
                minDeliveryTime: 45,
                maxDeliveryTime: 50,
                lastMileTravel: 9.8,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 120,
                slaString: "45-50 MINS",
                lastMileTravelString: "9.8 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextOpenTimeMessage: "Opens next at 5:30 am, Thursday",
                nextOpenTime: "1970-01-01 05:30:00",
                visibility: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                visible: true,
              },
              badges: {},
              slugString: "grameen-kulfi-cloud-1-salt-lake",
              multiOutlet: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message: "s, NP-375, Nayapatty, Sector V, Kolkata-700102",
                },
                {
                  title: "Cuisines",
                  message: "Ice Cream,Desserts",
                },
              ],
              totalRatings: 1000,
              aggregatedDiscountInfoV2: {
                visible: true,
              },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/355770",
              },
              generalPurposeInfoListV2: [
                {
                  cta: {
                    info: {
                      recordings: {},
                    },
                    linkCta: {},
                  },
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              availabilityServiceabilityMessage:
                "Currently closed for delivery. Opens next at 5:30 am, Thursday",
              orderabilityCommunication: {
                title: {
                  text: "Currently",
                },
                subTitle: {
                  text: "CLOSED",
                },
                message: {
                  text: "Uh-oh! The outlet is not accepting orders at the moment. We're working to get them back online",
                  textColour: "primary",
                },
                customIcon: {
                  bgGradientColorStart: "#EB8322",
                  bgGradientColorEnd: "#EE5803",
                },
              },
              nearestOutletNudge: {
                nearestOutletInfo: {
                  siblingOutlet: {
                    id: "355774",
                    city: "0",
                    slugs: {},
                    areaName: "Rajarhat",
                    costForTwo: "0",
                    feeDetails: {},
                    sla: {
                      deliveryTime: 30,
                      lastMileTravel: 4.8,
                      slaString: "30 MINS",
                      lastMileTravelString: "4.8 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      restaurantClosedMeta: {},
                    },
                    aggregatedDiscountInfo: {
                      visible: true,
                    },
                    badges: {},
                    aggregatedDiscountInfoV2: {
                      visible: true,
                    },
                    availabilityServiceabilityMessage:
                      "Temporarily closed for delivery",
                    cartOrderabilityNudgeBanner: {
                      parameters: {},
                      presentation: {},
                    },
                  },
                },
                nearestOutletComms: {
                  title: {
                    text: "Don't worry! Try our outlet that's delivering",
                  },
                  subTitle: {
                    text: "Switch to the fastest alternate",
                  },
                },
              },
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "22.5819557,88.4393435",
              backgroundImageOverlayInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      isPureVeg: true,
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 12821013000185"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Grameen Kulfi",
                      area: "Bidhannagar",
                      completeAddress:
                        "s, NP-375, Nayapatty, Sector V, Kolkata-700102",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
};
