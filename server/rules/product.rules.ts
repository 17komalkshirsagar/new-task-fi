export const createProductRules = {
    name: { required: true, type: "string" },
    slug: { required: true, type: "string" },
    variant: { required: true, type: "string" },
    mrp: { required: true, type: "number" },
    price: { required: true, type: "number" },
    image: { required: true, type: "string" },
};
export const updateProductRules = {
    name: { required: false, type: "string" },
    slug: { required: false, type: "string" },
    variant: { required: false, type: "string" },
    mrp: { required: false, type: "number" },
    price: { required: false, type: "number" },
    image: { required: false, type: "string" },
};