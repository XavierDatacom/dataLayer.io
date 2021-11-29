// Page produit consulté
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    "pageCategory": "product",
    "ecommerce": {
        "currencyCode": "EUR",
        "detail": {
            "products": [
                {
                    "name": "SPINNER JOGGER - H.SUEDE/DILORCY - TILLEUL/WHITE",
                    "id": "3900-30173",
                    "reference": "LNVTDI0461",
                    "price": "149",
                    "category": "Joggers",
                    "variant": "36, Vert",
                    "price_tax_exc": "124.17"
                }
            ]
        }
    }
});

// Ajout produit
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(
{
    "event": "addToCart",
    "ecommerce": {
        "add": {
            "products": [
                {
                    "id": "3900-30173",
                    "quantity": 1,
                    "name": "SPINNER JOGGER - H.SUEDE/DILORCY - TILLEUL/WHITE",
                    "price": "149"
                }
            ]
        },
        "currencyCode": "EUR"
    }
});

// Tunnel de commande Step 1 > Step 4
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    "pageCategory": "order",
    "ecommerce": {
        "currencyCode": "EUR",
        "checkout": {
            "actionField": {
                "step": 1, // de 1 à 4
                "action": "checkout"
            },
            "products": [
                {
                    "name": "SPINNER JOGGER - H.SUEDE/DILORCY - TILLEUL/WHITE",
                    "id": "3900-30173",
                    "reference": "LNVTDI0461",
                    "price": "149",
                    "category": "Joggers",
                    "variant": "36, Vert",
                    "quantity": 1,
                    "price_tax_exc": "124.17"
                }
            ]
        }
    },
    "event": "checkout",
});

// Purchase
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(
{
    "pageCategory": "orderconfirmation",
    "ecommerce": {
        "currencyCode": "EUR",
        "purchase": {
            "actionField": {
                "id": "NNNNNNN",
                "revenue": "149",
                "tax": "0.6",
                "shipping": "24.83"
            },

            "products": [
                {
                    "name": "SPINNER JOGGER - H.SUEDE/DILORCY - TILLEUL/WHITE",
                    "id": "3900-30173",
                    "reference": "LNVTDI0461",
                    "price": "149",
                    "category": "Joggers",
                    "variant": "36, Vert",
                    "quantity": 1,
                    "price_tax_exc": "124.17"
                }
            ]
        }
    }
});

// Listing Attention >> les impressions sont envoyé toutes en même temps.
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(
{
    "pageCategory": "category",
    "ecommerce": {
        "currencyCode": "EUR",
        "impressions": [
            {
                "name": "IRON MID - DADDY - MINT/DOVE",
                "id": "3918-30344",
                "reference": "KNSEDD042U",
                "price": "109",
                "category": "Baskets a plateforme",
                "variant": "36, Vert",
                "price_tax_exc": "90.83",
                "list": "category",
                "position": 1
            },
            {
                "name": "IRON MID - PONY LYNX - NATUREL",
                "id": "3919-30351",
                "reference": "KNSELY04A3",
                "price": "139",
                "category": "Baskets a plateforme",
                "variant": "36, Beige",
                "price_tax_exc": "115.83",
                "list": "category",
                "position": 2
            },
            {
                "name": "IRON MID - PONY LYNX - WHITE",
                "id": "3920-30357",
                "reference": "KNSELY0401",
                "price": "139",
                "category": "Baskets a plateforme",
                "variant": "35, Blanc",
                "price_tax_exc": "115.83",
                "list": "category",
                "position": 3
            },
            {
                "name": "PLATO M SNEAKER 30 YEARS - CANVAS - WHITE",
                "id": "3935-30496",
                "reference": "LN30OD0401",
                "price": "99",
                "category": "Baskets a plateforme",
                "variant": "36",
                "price_tax_exc": "82.5",
                "list": "category",
                "position": 4
            },
            {
                "name": "IRON MID - DADDY - CAMEL",
                "id": "3933-30481",
                "reference": "KNSEDD04CA",
                "price": "109",
                "category": "Baskets a plateforme",
                "variant": "36, Marron",
                "price_tax_exc": "90.83",
                "list": "category",
                "position": 5
            },
            {
                "name": "IRON MID - DADDY - CEDRE",
                "id": "3932-30475",
                "reference": "KNSEDD04EA",
                "price": "109",
                "category": "Baskets a plateforme",
                "variant": "37, Vert",
                "price_tax_exc": "90.83",
                "list": "category",
                "position": 6
            },
            {
                "name": "IRON MID - WILLOW - BLACK",
                "id": "3853-29530",
                "reference": "KNSEWL0415",
                "price": "109",
                "category": "Baskets a plateforme",
                "variant": "Noir, 37",
                "price_tax_exc": "90.83",
                "list": "category",
                "position": 7
            },
            {
                "name": "IRON MID - VINTAGE SUEDE - BLACK",
                "id": "3852-29514",
                "reference": "KNSEVT0415",
                "price": "129",
                "category": "Baskets a plateforme",
                "variant": "36, Noir",
                "price_tax_exc": "107.5",
                "list": "category",
                "position": 8
            },
            {
                "name": "IRON MID - SAVAGE/SUEDE - BLACK",
                "id": "3848-29463",
                "reference": "KNSESS0415",
                "price": "129",
                "category": "Baskets a plateforme",
                "variant": "Noir, 36",
                "price_tax_exc": "107.5",
                "list": "category",
                "position": 9
            },
            {
                "name": "PLATO M DERBY - BOBBY/SAGA - CHESTNUT/GOLD",
                "id": "3812-28716",
                "reference": "KNAKBS04AY",
                "price": "99",
                "category": "Baskets a plateforme",
                "variant": "35, Beige",
                "price_tax_exc": "82.5",
                "list": "category",
                "position": 10
            },
            {
                "name": "PLATO M STRAPS - WILLOW - BLACK",
                "id": "3811-28919",
                "reference": "KNAJWL0415",
                "price": "99",
                "category": "Baskets a plateforme",
                "variant": "Noir, 36",
                "price_tax_exc": "82.5",
                "list": "category",
                "position": 11
            },
            {
                "name": "PLATO M STRAPS - IGUANA - BLACK",
                "id": "3810-28906",
                "reference": "KNAJUA0415",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "36, Noir",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 12
            },
            {
                "name": "PLATO M STRAPS - SOFT/DISTRICT - BLACK/GOLD",
                "id": "3809-28892",
                "reference": "KNAJSI0415",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "Noir, 36",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 13
            },
            {
                "name": "PLATO M STRAPS - SOFT/DISTRICT - OFF WHITE/GOLD",
                "id": "3808-28878",
                "reference": "KNAJSI04OF",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "Blanc, 36",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 14
            },
            {
                "name": "PLATO M STRAPS - CROCK - DOVE",
                "id": "3807-28864",
                "reference": "KNAJCK04VE",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "Beige, 36",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 15
            },
            {
                "name": "SPICE EASY - LAMBSKIN - WHITE",
                "id": "3544-26815",
                "reference": "JNTEZJ0401",
                "price": "149",
                "category": "Baskets a plateforme",
                "variant": "Blanc, 37",
                "price_tax_exc": "124.17",
                "list": "category",
                "position": 16
            },
            {
                "name": "IRON MID - CANVAS - BLACK",
                "id": "2971-25376",
                "reference": "KNSEOD0415",
                "price": "99",
                "category": "Baskets a plateforme",
                "variant": "36, Noir",
                "price_tax_exc": "82.5",
                "list": "category",
                "position": 17
            },
            {
                "name": "IRON MID - CANVAS - WHITE",
                "id": "2970-25373",
                "reference": "KNSEOD0401",
                "price": "99",
                "category": "Baskets a plateforme",
                "variant": "Blanc, 39",
                "price_tax_exc": "82.5",
                "list": "category",
                "position": 18
            },
            {
                "name": "IRON MID - DADDY - BEIGE",
                "id": "3846-29435",
                "reference": "KNSEDD0418",
                "price": "109",
                "category": "Baskets a plateforme",
                "variant": "36, Beige",
                "price_tax_exc": "90.83",
                "list": "category",
                "position": 19
            },
            {
                "name": "PLATO M SNEAKER - CANVAS - BLACK",
                "id": "2876-24728",
                "reference": "KNAMOD0415",
                "price": "79",
                "category": "Baskets a plateforme",
                "variant": "35, Noir",
                "price_tax_exc": "65.83",
                "list": "category",
                "position": 20
            },
            {
                "name": "PLATO M SNEAKER - CANVAS - WHITE",
                "id": "2875-24723",
                "reference": "KNAMOD0401",
                "price": "79",
                "category": "Baskets a plateforme",
                "variant": "37, Blanc",
                "price_tax_exc": "65.83",
                "list": "category",
                "position": 21
            },
            {
                "name": "PLATO M SNEAKER - NAPPA/PATENT - BLACK",
                "id": "2874-24715",
                "reference": "KNAMNB0415",
                "price": "109",
                "category": "Baskets a plateforme",
                "variant": "36, Noir",
                "price_tax_exc": "90.83",
                "list": "category",
                "position": 22
            },
            {
                "name": "PLATO M SNEAKER - NAPPA/PATENT - WHITE/BLACK",
                "id": "2873-24709",
                "reference": "KNAMNB0401",
                "price": "109",
                "category": "Baskets a plateforme",
                "variant": "37, Blanc",
                "price_tax_exc": "90.83",
                "list": "category",
                "position": 23
            },
            {
                "name": "PLATO M SNEAKER - AFTER - SILVER",
                "id": "2868-24673",
                "reference": "KNAMGE0475",
                "price": "99",
                "category": "Baskets a plateforme",
                "variant": "36, Argent",
                "price_tax_exc": "82.5",
                "list": "category",
                "position": 24
            },
            {
                "name": "PLATO M SNEAKER - AFTER - GOLD",
                "id": "2867-24667",
                "reference": "KNAMGE0474",
                "price": "99",
                "category": "Baskets a plateforme",
                "variant": "37, Dore",
                "price_tax_exc": "82.5",
                "list": "category",
                "position": 25
            },
            {
                "name": "PLATO M STRAPS - PUNCH NAPPA - WHITE",
                "id": "2859-24611",
                "reference": "KNAJP60401",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "37, Blanc",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 26
            },
            {
                "name": "PLATO M STRAPS - PUNCH NAPPA - BLACK",
                "id": "2858-24603",
                "reference": "KNAJP604B3",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "36, Noir",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 27
            },
            {
                "name": "PLATO M STRAPS - NAPPA - BLACK",
                "id": "2857-24596",
                "reference": "KNAJNB0415",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "36, Noir",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 28
            },
            {
                "name": "PLATO M STRAPS - NAPPA - WHITE",
                "id": "2856-24593",
                "reference": "KNAJNB0401",
                "price": "119",
                "category": "Baskets a plateforme",
                "variant": "40, Blanc",
                "price_tax_exc": "99.17",
                "list": "category",
                "position": 29
            },
            {
                "name": "SPICE SNEAKER - LAMBSKIN - WHITE",
                "id": "1552-9535",
                "reference": "KNTAZJ0401",
                "price": "149",
                "category": "Baskets a plateforme",
                "variant": "37, Blanc",
                "price_tax_exc": "124.17",
                "list": "category",
                "position": 30
            }
        ]
    }
});