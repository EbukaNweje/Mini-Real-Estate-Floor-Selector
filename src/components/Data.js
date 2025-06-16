import towerImg1 from "../assets/Tower1.avif"
import towerImg2 from "../assets/Tower2.avif"
import towerImg3 from "../assets/Tower3.avif"

export const TowerList = [
    {
        id: 1,
        Title: "Warisan Merdeka Tower",
        Description: "Warisan Merdeka Tower is a skyscraper located in Kuala Lumpur, Malaysia. It is one of the tallest buildings in the country and serves as a symbol of Malaysia's development and modernization.",
        imgSrc: towerImg1,
        imgAlt: "Warisan Merdeka Tower",

        Floors: [
             {
                id: 1,
                name: "Ground Floor",
                description: "The ground floor serves as the main entrance and lobby area, providing access to various facilities and services.",
                features: ["Security Desk", "Information Center", "Retail Outlets"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment A1",
                        size: "1200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$300,000",
                        thumbnailImg: "https://example.com/apartment-a1.jpg"
                    },
                    
                    {
                        id: 2,
                        name: "Apartment A2",
                        size: "1500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$450,000",
                        thumbnailImg: "https://example.com/apartment-a2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment A3",
                        size: "1800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$600,000",
                        thumbnailImg: "https://example.com/apartment-a3.jpg"
                    }
                ]
                
            },
            {
                 id: 2,
                name: "Second Floor",
                description: "The second floor features a variety of retail shops, cafes, and restaurants, providing a vibrant shopping and dining experience.",
                features: ["Shopping Area", "Food Court", "Entertainment Zone"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment B1",
                        size: "1300 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$320,000",
                        thumbnailImg: "https://example.com/apartment-b1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment B2",
                        size: "1600 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$480,000",
                        thumbnailImg: "https://example.com/apartment-b2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment B3",
                        size: "1900 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$650,000",
                        thumbnailImg: "https://example.com/apartment-b3.jpg"
                    }
                ]
            },
            {
                 id: 3,
                name: "Third Floor",
                description: "The third floor is dedicated to office spaces, providing a professional environment for businesses and organizations.",
                features: ["Office Suites", "Meeting Rooms", "Business Center"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment C1",
                        size: "1400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$340,000",
                        thumbnailImg: "https://example.com/apartment-c1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment C2",
                        size: "1700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$500,000",
                        thumbnailImg: "https://example.com/apartment-c2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment C3",
                        size: "2000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-c3.jpg"
                    }
                ]
            },
             {
                 id: 4,
                name: "Fourth Floor",
                description: "The fourth floor is designed for recreational activities, including a gym, swimming pool, and spa facilities.",
                features: ["Fitness Center", "Swimming Pool", "Spa"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment D1",
                        size: "1500 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$360,000",
                        thumbnailImg: "https://example.com/apartment-d1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment D2",
                        size: "1800 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$520,000",
                        thumbnailImg: "https://example.com/apartment-d2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment D3",
                        size: "2100 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$750,000",
                        thumbnailImg: "https://example.com/apartment-d3.jpg"
                    }
                ]
            },
          {
             id: 5,
                name: "Fifth Floor",
                description: "The fifth floor is reserved for luxury apartments, offering stunning views and high-end amenities.",
                features: ["Luxury Apartments", "Private Balconies", "Exclusive Services"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment E1",
                        size: "2000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$500,000",
                        thumbnailImg: "https://example.com/apartment-e1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment E2",
                        size: "2500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-e2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment E3",
                        size: "3000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/apartment-e3.jpg"
                    }
                ]
            },
            {
                 id: 6,
                name: "Sixth Floor",
                description: "The sixth floor is dedicated to conference rooms and event spaces, suitable for meetings and gatherings.",
                features: ["Conference Rooms", "Event Spaces", "Catering Services"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment F1",
                        size: "2200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$550,000",
                        thumbnailImg: "https://example.com/apartment-f1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment F2",
                        size: "2700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$750,000",
                        thumbnailImg: "https://example.com/apartment-f2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment F3",
                        size: "3200 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$950,000",
                        thumbnailImg: "https://example.com/apartment-f3.jpg"
                    }
                ]
            },
            {
                 id: 7,
                name: "Seventh Floor",
                description: "The seventh floor features a rooftop garden and lounge area, providing a serene escape with panoramic views of the city.",
                features: ["Rooftop Garden", "Lounge Area", "Scenic Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment G1",
                        size: "2400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$600,000",
                        thumbnailImg: "https://example.com/apartment-g1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment G2",
                        size: "2900 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$800,000",
                        thumbnailImg: "https://example.com/apartment-g2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment G3",
                        size: "3400 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/apartment-g3.jpg"
                    }
                ]
            },
          {
             id: 8,
                name: "Eighth Floor",
                description: "The eighth floor is designed for leisure and entertainment, featuring a cinema, game room, and lounge.",
                features: ["Cinema", "Game Room", "Lounge"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment H1",
                        size: "2600 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$650,000",
                        thumbnailImg: "https://example.com/apartment-h1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment H2",
                        size: "3100 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$850,000",
                        thumbnailImg: "https://example.com/apartment-h2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment H3",
                        size: "3600 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,100,000",
                        thumbnailImg: "https://example.com/apartment-h3.jpg"
                    }
                ]
            },
          {
             id: 9,
                name: "Ninth Floor",
                description: "The ninth floor is dedicated to wellness and relaxation, featuring a yoga studio, meditation room, and wellness center.",
                features: ["Yoga Studio", "Meditation Room", "Wellness Center"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment I1",
                        size: "2800 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-i1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment I2",
                        size: "3300 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/apartment-i2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment I3",
                        size: "3800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/apartment-i3.jpg"
                    }
                ]
            },

             {
                 id: 10,
                name: "Tenth Floor",
                description: "The tenth floor is a penthouse level, offering exclusive luxury apartments with private amenities and breathtaking views.",
                features: ["Penthouse Apartments", "Private Amenities", "Breathtaking Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Penthouse J1",
                        size: "3000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$800,000",
                        thumbnailImg: "https://example.com/penthouse-j1.jpg"
                    },
                    {
                        id: 2,
                        name: "Penthouse J2",
                        size: "3500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/penthouse-j2.jpg"
                    },
                    {
                        id: 3,
                        name: "Penthouse J3",
                        size: "4000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/penthouse-j3.jpg"
                    }
                ]
            },
             {
                 id: 11,
                name: "Eleventh Floor",
                description: "The eleventh floor is a private residence level, offering exclusive apartments with high-end finishes and amenities.",
                features: ["Private Residences", "High-End Finishes", "Exclusive Amenities"],
                apartments: [
                    {
                        id: 1,
                        name: "Residence K1",
                        size: "3200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/residence-k1.jpg"
                    },
                    {
                        id: 2,
                        name: "Residence K2",
                        size: "3700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/residence-k2.jpg"
                    },
                    {
                        id: 3,
                        name: "Residence K3",
                        size: "4200 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,800,000",
                        thumbnailImg: "https://example.com/residence-k3.jpg"
                    }
                ]
            },

             {
                 id: 12,
                name: "Twelfth Floor",
                description: "The twelfth floor is a sky lounge and observation deck, offering panoramic views of the city skyline.",
                features: ["Sky Lounge", "Observation Deck", "Panoramic Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Sky Lounge L1",
                        size: "3400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/sky-lounge-l1.jpg"
                    },
                    {
                        id: 2,
                        name: "Sky Lounge L2",
                        size: "3900 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,300,000",
                        thumbnailImg: "https://example.com/sky-lounge-l2.jpg"
                    },
                    {
                        id: 3,
                        name: "Sky Lounge L3",
                        size: "4400 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,000,000",
                        thumbnailImg: "https://example.com/sky-lounge-l3.jpg"
                    }
                ]
            },
            {
                 id: 13,
                name: "Thirteenth Floor",
                description: "The thirteenth floor is a private event space, suitable for hosting exclusive gatherings and celebrations.",
                features: ["Private Event Space", "Exclusive Gatherings", "Celebration Venue"],
                apartments: [
                    {
                        id: 1,
                        name: "Event Space M1",
                        size: "3600 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,100,000",
                        thumbnailImg: "https://example.com/event-space-m1.jpg"
                    },
                    {
                        id: 2,
                        name: "Event Space M2",
                        size: "4100 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,400,000",
                        thumbnailImg: "https://example.com/event-space-m2.jpg"
                    },
                    {
                        id: 3,
                        name: "Event Space M3",
                        size: "4600 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,200,000",
                        thumbnailImg: "https://example.com/event-space-m3.jpg"
                    }
                ]
            },
            {
                 id: 14,
                name: "Fourteenth Floor",
                description: "The fourteenth floor is a private residence level, offering exclusive apartments with high-end finishes and amenities.",
                features: ["Private Residences", "High-End Finishes", "Exclusive Amenities"],
                apartments: [
                    {
                        id: 1,
                        name: "Residence N1",
                        size: "3800 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/residence-n1.jpg"
                    },
                    {
                        id: 2,
                        name: "Residence N2",
                        size: "4300 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/residence-n2.jpg"
                    },
                    {
                        id: 3,
                        name: "Residence N3",
                        size: "4800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,500,000",
                        thumbnailImg: "https://example.com/residence-n3.jpg"
                    }
                ]
            },
            {
                 id: 15,
                name: "Fifteenth Floor",
                description: "The fifteenth floor is a luxury penthouse level, offering exclusive apartments with private amenities and breathtaking views.",
                features: ["Luxury Penthouses", "Private Amenities", "Breathtaking Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Penthouse O1",
                        size: "4000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/penthouse-o1.jpg"
                    },
                    {
                        id: 2,
                        name: "Penthouse O2",
                        size: "4500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,800,000",
                        thumbnailImg: "https://example.com/penthouse-o2.jpg"
                    },
                    {
                        id: 3,
                        name: "Penthouse O3",
                        size: "5000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,500,000",
                        thumbnailImg: "https://example.com/penthouse-o3.jpg"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        Title: "Avala Tower",
        Description: "The Avala Tower is a 204.68 m tall telecommunications tower located on Mount Avala, in Belgrade, Serbia.",
        imgSrc: towerImg2,
        imgAlt: "Avala Tower",

         Floors: [
            {
                 id: 1,
                name: "Ground Floor",
                description: "The ground floor serves as the main entrance and lobby area, providing access to various facilities and services.",
                features: ["Security Desk", "Information Center", "Retail Outlets"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment A1",
                        size: "1200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$300,000",
                        thumbnailImg: "https://example.com/apartment-a1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment A2",
                        size: "1500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$450,000",
                        thumbnailImg: "https://example.com/apartment-a2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment A3",
                        size: "1800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$600,000",
                        thumbnailImg: "https://example.com/apartment-a3.jpg"
                    }
                ]
                
            },
            {
                 id: 2,
                name: "Second Floor",
                description: "The second floor features a variety of retail shops, cafes, and restaurants, providing a vibrant shopping and dining experience.",
                features: ["Shopping Area", "Food Court", "Entertainment Zone"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment B1",
                        size: "1300 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$320,000",
                        thumbnailImg: "https://example.com/apartment-b1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment B2",
                        size: "1600 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$480,000",
                        thumbnailImg: "https://example.com/apartment-b2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment B3",
                        size: "1900 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$650,000",
                        thumbnailImg: "https://example.com/apartment-b3.jpg"
                    }
                ]
            },
            {
                 id: 3,
                name: "Third Floor",
                description: "The third floor is dedicated to office spaces, providing a professional environment for businesses and organizations.",
                features: ["Office Suites", "Meeting Rooms", "Business Center"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment C1",
                        size: "1400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$340,000",
                        thumbnailImg: "https://example.com/apartment-c1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment C2",
                        size: "1700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$500,000",
                        thumbnailImg: "https://example.com/apartment-c2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment C3",
                        size: "2000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-c3.jpg"
                    }
                ]
            },
            {
                 id: 4,
                name: "Fourth Floor",
                description: "The fourth floor is designed for recreational activities, including a gym, swimming pool, and spa facilities.",
                features: ["Fitness Center", "Swimming Pool", "Spa"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment D1",
                        size: "1500 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$360,000",
                        thumbnailImg: "https://example.com/apartment-d1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment D2",
                        size: "1800 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$520,000",
                        thumbnailImg: "https://example.com/apartment-d2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment D3",
                        size: "2100 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$750,000",
                        thumbnailImg: "https://example.com/apartment-d3.jpg"
                    }
                ]
            },
           {
             id: 5,
                name: "Fifth Floor",
                description: "The fifth floor is reserved for luxury apartments, offering stunning views and high-end amenities.",
                features: ["Luxury Apartments", "Private Balconies", "Exclusive Services"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment E1",
                        size: "2000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$500,000",
                        thumbnailImg: "https://example.com/apartment-e1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment E2",
                        size: "2500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-e2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment E3",
                        size: "3000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/apartment-e3.jpg"
                    }
                ]
            },
            {
                 id: 6,
                name: "Sixth Floor",
                description: "The sixth floor is dedicated to conference rooms and event spaces, suitable for meetings and gatherings.",
                features: ["Conference Rooms", "Event Spaces", "Catering Services"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment F1",
                        size: "2200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$550,000",
                        thumbnailImg: "https://example.com/apartment-f1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment F2",
                        size: "2700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$750,000",
                        thumbnailImg: "https://example.com/apartment-f2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment F3",
                        size: "3200 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$950,000",
                        thumbnailImg: "https://example.com/apartment-f3.jpg"
                    }
                ]
            },
           {
                id: 7,
                name: "Seventh Floor",
                description: "The seventh floor features a rooftop garden and lounge area, providing a serene escape with panoramic views of the city.",
                features: ["Rooftop Garden", "Lounge Area", "Scenic Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment G1",
                        size: "2400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$600,000",
                        thumbnailImg: "https://example.com/apartment-g1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment G2",
                        size: "2900 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$800,000",
                        thumbnailImg: "https://example.com/apartment-g2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment G3",
                        size: "3400 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/apartment-g3.jpg"
                    }
                ]
            },
            {
                 id: 8,
                name: "Eighth Floor",
                description: "The eighth floor is designed for leisure and entertainment, featuring a cinema, game room, and lounge.",
                features: ["Cinema", "Game Room", "Lounge"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment H1",
                        size: "2600 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$650,000",
                        thumbnailImg: "https://example.com/apartment-h1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment H2",
                        size: "3100 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$850,000",
                        thumbnailImg: "https://example.com/apartment-h2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment H3",
                        size: "3600 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,100,000",
                        thumbnailImg: "https://example.com/apartment-h3.jpg"
                    }
                ]
            },
           {
                 id: 9,
                name: "Ninth Floor",
                description: "The ninth floor is dedicated to wellness and relaxation, featuring a yoga studio, meditation room, and wellness center.",
                features: ["Yoga Studio", "Meditation Room", "Wellness Center"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment I1",
                        size: "2800 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-i1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment I2",
                        size: "3300 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/apartment-i2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment I3",
                        size: "3800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/apartment-i3.jpg"
                    }
                ]
            },

            {
                 id: 10,
                name: "Tenth Floor",
                description: "The tenth floor is a penthouse level, offering exclusive luxury apartments with private amenities and breathtaking views.",
                features: ["Penthouse Apartments", "Private Amenities", "Breathtaking Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Penthouse J1",
                        size: "3000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$800,000",
                        thumbnailImg: "https://example.com/penthouse-j1.jpg"
                    },
                    {
                        id: 2,
                        name: "Penthouse J2",
                        size: "3500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/penthouse-j2.jpg"
                    },
                    {
                        id: 3,
                        name: "Penthouse J3",
                        size: "4000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/penthouse-j3.jpg"
                    }
                ]
            },
             {
                 id: 11,
                name: "Eleventh Floor",
                description: "The eleventh floor is a private residence level, offering exclusive apartments with high-end finishes and amenities.",
                features: ["Private Residences", "High-End Finishes", "Exclusive Amenities"],
                apartments: [
                    {
                        id: 1,
                        name: "Residence K1",
                        size: "3200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/residence-k1.jpg"
                    },
                    {
                        id: 2,
                        name: "Residence K2",
                        size: "3700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/residence-k2.jpg"
                    },
                    {
                        id: 3,
                        name: "Residence K3",
                        size: "4200 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,800,000",
                        thumbnailImg: "https://example.com/residence-k3.jpg"
                    }
                ]
            },

           {
             id: 12,
                name: "Twelfth Floor",
                description: "The twelfth floor is a sky lounge and observation deck, offering panoramic views of the city skyline.",
                features: ["Sky Lounge", "Observation Deck", "Panoramic Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Sky Lounge L1",
                        size: "3400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/sky-lounge-l1.jpg"
                    },
                    {
                        id: 2,
                        name: "Sky Lounge L2",
                        size: "3900 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,300,000",
                        thumbnailImg: "https://example.com/sky-lounge-l2.jpg"
                    },
                    {
                        id: 3,
                        name: "Sky Lounge L3",
                        size: "4400 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,000,000",
                        thumbnailImg: "https://example.com/sky-lounge-l3.jpg"
                    }
                ]
            },
             {
                 id: 13,
                name: "Thirteenth Floor",
                description: "The thirteenth floor is a private event space, suitable for hosting exclusive gatherings and celebrations.",
                features: ["Private Event Space", "Exclusive Gatherings", "Celebration Venue"],
                apartments: [
                    {
                        id: 1,
                        name: "Event Space M1",
                        size: "3600 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,100,000",
                        thumbnailImg: "https://example.com/event-space-m1.jpg"
                    },
                    {
                        id: 2,
                        name: "Event Space M2",
                        size: "4100 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,400,000",
                        thumbnailImg: "https://example.com/event-space-m2.jpg"
                    },
                    {
                        id: 3,
                        name: "Event Space M3",
                        size: "4600 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,200,000",
                        thumbnailImg: "https://example.com/event-space-m3.jpg"
                    }
                ]
            },
           {
             id: 14,
                name: "Fourteenth Floor",
                description: "The fourteenth floor is a private residence level, offering exclusive apartments with high-end finishes and amenities.",
                features: ["Private Residences", "High-End Finishes", "Exclusive Amenities"],
                apartments: [
                    {
                        id: 1,
                        name: "Residence N1",
                        size: "3800 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/residence-n1.jpg"
                    },
                    {
                        id: 2,
                        name: "Residence N2",
                        size: "4300 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/residence-n2.jpg"
                    },
                    {
                        id: 3,
                        name: "Residence N3",
                        size: "4800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,500,000",
                        thumbnailImg: "https://example.com/residence-n3.jpg"
                    }
                ]
            },
            {
                 id: 15,
                name: "Fifteenth Floor",
                description: "The fifteenth floor is a luxury penthouse level, offering exclusive apartments with private amenities and breathtaking views.",
                features: ["Luxury Penthouses", "Private Amenities", "Breathtaking Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Penthouse O1",
                        size: "4000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/penthouse-o1.jpg"
                    },
                    {
                        id: 2,
                        name: "Penthouse O2",
                        size: "4500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,800,000",
                        thumbnailImg: "https://example.com/penthouse-o2.jpg"
                    },
                    {
                        id: 3,
                        name: "Penthouse O3",
                        size: "5000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,500,000",
                        thumbnailImg: "https://example.com/penthouse-o3.jpg"
                    }
                ]
            }
         ]
        
    },
    {
        id: 3,
        Title: "Heinrich-Hertz-Tower",
        Description: "The Heinrich Hertz Tower is a landmark radio telecommunication tower in the city of Hamburg, Germany.",
        imgSrc: towerImg3,
        imgAlt: "Heinrich-Hertz-Tower",

         Floors: [
            {
                 id: 1,
                name: "Ground Floor",
                description: "The ground floor serves as the main entrance and lobby area, providing access to various facilities and services.",
                features: ["Security Desk", "Information Center", "Retail Outlets"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment A1",
                        size: "1200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$300,000",
                        thumbnailImg: "https://example.com/apartment-a1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment A2",
                        size: "1500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$450,000",
                        thumbnailImg: "https://example.com/apartment-a2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment A3",
                        size: "1800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$600,000",
                        thumbnailImg: "https://example.com/apartment-a3.jpg"
                    }
                ]
                
            },
            {
                 id: 2,
                name: "Second Floor",
                description: "The second floor features a variety of retail shops, cafes, and restaurants, providing a vibrant shopping and dining experience.",
                features: ["Shopping Area", "Food Court", "Entertainment Zone"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment B1",
                        size: "1300 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$320,000",
                        thumbnailImg: "https://example.com/apartment-b1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment B2",
                        size: "1600 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$480,000",
                        thumbnailImg: "https://example.com/apartment-b2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment B3",
                        size: "1900 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$650,000",
                        thumbnailImg: "https://example.com/apartment-b3.jpg"
                    }
                ]
            },
            {
                 id: 3,
                name: "Third Floor",
                description: "The third floor is dedicated to office spaces, providing a professional environment for businesses and organizations.",
                features: ["Office Suites", "Meeting Rooms", "Business Center"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment C1",
                        size: "1400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$340,000",
                        thumbnailImg: "https://example.com/apartment-c1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment C2",
                        size: "1700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$500,000",
                        thumbnailImg: "https://example.com/apartment-c2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment C3",
                        size: "2000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-c3.jpg"
                    }
                ]
            },
            {
                 id: 4,
                name: "Fourth Floor",
                description: "The fourth floor is designed for recreational activities, including a gym, swimming pool, and spa facilities.",
                features: ["Fitness Center", "Swimming Pool", "Spa"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment D1",
                        size: "1500 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$360,000",
                        thumbnailImg: "https://example.com/apartment-d1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment D2",
                        size: "1800 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$520,000",
                        thumbnailImg: "https://example.com/apartment-d2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment D3",
                        size: "2100 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$750,000",
                        thumbnailImg: "https://example.com/apartment-d3.jpg"
                    }
                ]
            },
            {
                 id: 5,
                name: "Fifth Floor",
                description: "The fifth floor is reserved for luxury apartments, offering stunning views and high-end amenities.",
                features: ["Luxury Apartments", "Private Balconies", "Exclusive Services"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment E1",
                        size: "2000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$500,000",
                        thumbnailImg: "https://example.com/apartment-e1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment E2",
                        size: "2500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-e2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment E3",
                        size: "3000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/apartment-e3.jpg"
                    }
                ]
            },
            {
                 id: 6,
                name: "Sixth Floor",
                description: "The sixth floor is dedicated to conference rooms and event spaces, suitable for meetings and gatherings.",
                features: ["Conference Rooms", "Event Spaces", "Catering Services"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment F1",
                        size: "2200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$550,000",
                        thumbnailImg: "https://example.com/apartment-f1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment F2",
                        size: "2700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$750,000",
                        thumbnailImg: "https://example.com/apartment-f2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment F3",
                        size: "3200 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$950,000",
                        thumbnailImg: "https://example.com/apartment-f3.jpg"
                    }
                ]
            },
            {
                 id: 7,
                name: "Seventh Floor",
                description: "The seventh floor features a rooftop garden and lounge area, providing a serene escape with panoramic views of the city.",
                features: ["Rooftop Garden", "Lounge Area", "Scenic Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment G1",
                        size: "2400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$600,000",
                        thumbnailImg: "https://example.com/apartment-g1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment G2",
                        size: "2900 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$800,000",
                        thumbnailImg: "https://example.com/apartment-g2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment G3",
                        size: "3400 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/apartment-g3.jpg"
                    }
                ]
            },
            {
                 id: 8,
                name: "Eighth Floor",
                description: "The eighth floor is designed for leisure and entertainment, featuring a cinema, game room, and lounge.",
                features: ["Cinema", "Game Room", "Lounge"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment H1",
                        size: "2600 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$650,000",
                        thumbnailImg: "https://example.com/apartment-h1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment H2",
                        size: "3100 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$850,000",
                        thumbnailImg: "https://example.com/apartment-h2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment H3",
                        size: "3600 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,100,000",
                        thumbnailImg: "https://example.com/apartment-h3.jpg"
                    }
                ]
            },
          {
             id: 9,
                name: "Ninth Floor",
                description: "The ninth floor is dedicated to wellness and relaxation, featuring a yoga studio, meditation room, and wellness center.",
                features: ["Yoga Studio", "Meditation Room", "Wellness Center"],
                apartments: [
                    {
                        id: 1,
                        name: "Apartment I1",
                        size: "2800 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$700,000",
                        thumbnailImg: "https://example.com/apartment-i1.jpg"
                    },
                    {
                        id: 2,
                        name: "Apartment I2",
                        size: "3300 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/apartment-i2.jpg"
                    },
                    {
                        id: 3,
                        name: "Apartment I3",
                        size: "3800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/apartment-i3.jpg"
                    }
                ]
            },

             {
                 id: 10,
                name: "Tenth Floor",
                description: "The tenth floor is a penthouse level, offering exclusive luxury apartments with private amenities and breathtaking views.",
                features: ["Penthouse Apartments", "Private Amenities", "Breathtaking Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Penthouse J1",
                        size: "3000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$800,000",
                        thumbnailImg: "https://example.com/penthouse-j1.jpg"
                    },
                    {
                        id: 2,
                        name: "Penthouse J2",
                        size: "3500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/penthouse-j2.jpg"
                    },
                    {
                        id: 3,
                        name: "Penthouse J3",
                        size: "4000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/penthouse-j3.jpg"
                    }
                ]
            },
             {
                 id: 11,
                name: "Eleventh Floor",
                description: "The eleventh floor is a private residence level, offering exclusive apartments with high-end finishes and amenities.",
                features: ["Private Residences", "High-End Finishes", "Exclusive Amenities"],
                apartments: [
                    {
                        id: 1,
                        name: "Residence K1",
                        size: "3200 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$900,000",
                        thumbnailImg: "https://example.com/residence-k1.jpg"
                    },
                    {
                        id: 2,
                        name: "Residence K2",
                        size: "3700 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/residence-k2.jpg"
                    },
                    {
                        id: 3,
                        name: "Residence K3",
                        size: "4200 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$1,800,000",
                        thumbnailImg: "https://example.com/residence-k3.jpg"
                    }
                ]
            },

            {
                 id: 12,
                name: "Twelfth Floor",
                description: "The twelfth floor is a sky lounge and observation deck, offering panoramic views of the city skyline.",
                features: ["Sky Lounge", "Observation Deck", "Panoramic Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Sky Lounge L1",
                        size: "3400 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,000,000",
                        thumbnailImg: "https://example.com/sky-lounge-l1.jpg"
                    },
                    {
                        id: 2,
                        name: "Sky Lounge L2",
                        size: "3900 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,300,000",
                        thumbnailImg: "https://example.com/sky-lounge-l2.jpg"
                    },
                    {
                        id: 3,
                        name: "Sky Lounge L3",
                        size: "4400 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,000,000",
                        thumbnailImg: "https://example.com/sky-lounge-l3.jpg"
                    }
                ]
            },
          {
                 id: 13,
                name: "Thirteenth Floor",
                description: "The thirteenth floor is a private event space, suitable for hosting exclusive gatherings and celebrations.",
                features: ["Private Event Space", "Exclusive Gatherings", "Celebration Venue"],
                apartments: [
                    {
                        id: 1,
                        name: "Event Space M1",
                        size: "3600 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,100,000",
                        thumbnailImg: "https://example.com/event-space-m1.jpg"
                    },
                    {
                        id: 2,
                        name: "Event Space M2",
                        size: "4100 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,400,000",
                        thumbnailImg: "https://example.com/event-space-m2.jpg"
                    },
                    {
                        id: 3,
                        name: "Event Space M3",
                        size: "4600 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,200,000",
                        thumbnailImg: "https://example.com/event-space-m3.jpg"
                    }
                ]
            },
             {
                 id: 14,
                name: "Fourteenth Floor",
                description: "The fourteenth floor is a private residence level, offering exclusive apartments with high-end finishes and amenities.",
                features: ["Private Residences", "High-End Finishes", "Exclusive Amenities"],
                apartments: [
                    {
                        id: 1,
                        name: "Residence N1",
                        size: "3800 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,200,000",
                        thumbnailImg: "https://example.com/residence-n1.jpg"
                    },
                    {
                        id: 2,
                        name: "Residence N2",
                        size: "4300 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/residence-n2.jpg"
                    },
                    {
                        id: 3,
                        name: "Residence N3",
                        size: "4800 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,500,000",
                        thumbnailImg: "https://example.com/residence-n3.jpg"
                    }
                ]
            },
             {
                 id: 15,
                name: "Fifteenth Floor",
                description: "The fifteenth floor is a luxury penthouse level, offering exclusive apartments with private amenities and breathtaking views.",
                features: ["Luxury Penthouses", "Private Amenities", "Breathtaking Views"],
                apartments: [
                    {
                        id: 1,
                        name: "Penthouse O1",
                        size: "4000 sqft",
                        bedrooms: 3,
                        bathrooms: 2,
                        price: "$1,500,000",
                        thumbnailImg: "https://example.com/penthouse-o1.jpg"
                    },
                    {
                        id: 2,
                        name: "Penthouse O2",
                        size: "4500 sqft",
                        bedrooms: 4,
                        bathrooms: 3,
                        price: "$1,800,000",
                        thumbnailImg: "https://example.com/penthouse-o2.jpg"
                    },
                    {
                        id: 3,
                        name: "Penthouse O3",
                        size: "5000 sqft",
                        bedrooms: 5,
                        bathrooms: 4,
                        price: "$2,500,000",
                        thumbnailImg: "https://example.com/penthouse-o3.jpg"
                    }
                ]
            }
         ]
    },

    

]